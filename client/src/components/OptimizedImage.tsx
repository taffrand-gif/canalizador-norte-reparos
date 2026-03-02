import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  sizes?: string;
}

/**
 * Composant d'image optimisé avec:
 * - Support WebP avec fallback
 * - Srcset responsive (320w, 640w, 1024w, 1920w)
 * - Lazy loading (sauf si priority=true)
 * - Dimensions explicites pour éviter CLS
 * - Placeholder pendant le chargement
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  objectFit = 'cover',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Déterminer si l'image est externe (CDN)
  const isExternalImage = src.startsWith('http://') || src.startsWith('https://');
  const isManuscdn = src.includes('manuscdn.com');

  // Générer srcset pour images responsives
  const generateSrcSet = (imagePath: string): string => {
    if (isExternalImage) {
      if (isManuscdn) {
        const baseUrl = imagePath.split('?')[0];
        return [
          `${baseUrl}?x-oss-process=image/resize,w_320/format,webp/quality,q_80 320w`,
          `${baseUrl}?x-oss-process=image/resize,w_640/format,webp/quality,q_80 640w`,
          `${baseUrl}?x-oss-process=image/resize,w_1024/format,webp/quality,q_80 1024w`,
          `${baseUrl}?x-oss-process=image/resize,w_1920/format,webp/quality,q_80 1920w`,
        ].join(', ');
      }
      return '';
    }

    // Pour images locales
    const pathParts = imagePath.split('.');
    const extension = pathParts.pop();
    const basePath = pathParts.join('.');

    return [
      `${basePath}-320w.webp 320w`,
      `${basePath}-640w.webp 640w`,
      `${basePath}-1024w.webp 1024w`,
      `${basePath}-1920w.webp 1920w`,
    ].join(', ');
  };

  // Générer URL WebP
  const getWebPSrc = (imagePath: string): string => {
    if (isExternalImage) {
      if (isManuscdn) {
        const baseUrl = imagePath.split('?')[0];
        return `${baseUrl}?x-oss-process=image/format,webp/quality,q_80`;
      }
      return imagePath;
    }

    const pathParts = imagePath.split('.');
    pathParts.pop();
    return `${pathParts.join('.')}.webp`;
  };

  const srcSet = generateSrcSet(src);
  const webpSrc = getWebPSrc(src);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
    ...(width && height ? { aspectRatio: `${width} / ${height}` } : {}),
  };

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit,
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0,
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} style={containerStyle} className={className}>
      {isInView && (
        <>
          <picture>
            {srcSet && (
              <source
                type="image/webp"
                srcSet={srcSet}
                sizes={sizes}
              />
            )}
            <img
              src={hasError ? '/images/placeholder.svg' : webpSrc}
              alt={alt}
              style={imgStyle}
              loading={priority ? 'eager' : 'lazy'}
              decoding={priority ? 'sync' : 'async'}
              onLoad={handleLoad}
              onError={handleError}
              {...(width && { width })}
              {...(height && { height })}
            />
          </picture>
          {!isLoaded && !hasError && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f3f4f6',
              }}
            >
              <div className="animate-pulse">
                <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
