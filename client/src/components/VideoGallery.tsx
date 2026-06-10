import { videoData } from '@/shared/videoData';
interface VideoGalleryProps {
 category?: string;
 limit?: number;
}
export default function VideoGallery({ category, limit }: VideoGalleryProps) {
 const filteredVideos = category
 ? videoData.filter(v => v.category === category)
 : videoData;
 const displayVideos = limit ? filteredVideos.slice(0, limit) : filteredVideos;
 return (
 <div className="bg-white rounded-lg shadow-lg p-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-6">
 Vídeos Explicativos
 </h2>
 <p className="text-gray-700 mb-8">
 Aprenda com os nossos técnicos profissionais. Dicas, tutoriais e casos reais.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {displayVideos.map((video) => (
 <div key={video.id} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
 {/* Video Embed */}
 <div className="relative aspect-video bg-gray-900">
 <iframe
 src={`https://www.youtube.com/embed/${video.youtubeId}`}
 title={video.title}
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowFullScreen
 className="absolute inset-0 w-full h-full"
 />
 </div>
 {/* Video Info */}
 <div className="p-4">
 <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
 {video.title}
 </h3>
 <p className="text-sm text-gray-600 mb-3 line-clamp-2">
 {video.description}
 </p>
 {/* Duration & Keywords */}
 <div className="flex items-center justify-between text-xs text-gray-500">
 <span>⏱️ {video.duration}s</span>
 <span className="text-primary font-semibold">
 {video.category.replace('-', ' ')}
 </span>
 </div>
 {/* Keywords */}
 <div className="mt-3 flex flex-wrap gap-1">
 {video.keywords.slice(0, 3).map((keyword) => (
 <span
 key={keyword}
 className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
 >
 {keyword}
 </span>
 ))}
 </div>
 </div>
 {/* Schema.org JSON-LD */}
 {/* removed */}
/* removed */
/* removed */
/* removed */
/* removed */
/* removed */
 </div>
 ))}
 </div>
 {/* CTA */}
 <div className="mt-8 text-center">
 <p className="text-gray-700 mb-4">
 Tem dúvidas? Fale diretamente com os nossos técnicos.
 </p>
 <a
 href="https://wa.me/351928484451?text=Vi%20os%20vídeos%20e%20tenho%20uma%20dúvida"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
 >
 💬 Falar no WhatsApp
 </a>
 </div>
 </div>
 );
}
