// IndexNow key helper
// The key is stored in indexnow-key.txt at the repo root (gitignored build artefact).
// Usage: import { getKey, getSubmitUrl } from '@/shared/indexnow';
//
// IndexNow protocol: https://www.indexnow.org/
// - Submit POST https://api.indexnow.org/indexnow with key + host + urlList
// - Key file indexnow-<key>.txt must be accessible at https://<host>/indexnow-<key>.txt

// Static key exported — read from the file at build time. The key MUST be committed to the repo (not gitignored) because Vercel needs it at build/runtime.
// In dev, the key file is read via fs; in prod (browser bundle), we use the literal value.
import indexnowKey from '../../../../indexnow-key.txt?raw';

export function getKey(): string {
  return (indexnowKey || '').trim();
}

export function getSubmitUrl(host: string, urlList: string[]): string {
  const key = getKey();
  const params = new URLSearchParams({
    key,
    host,
    urlList: urlList.join('\n'),
  });
  return `https://api.indexnow.org/indexnow?${params.toString()}`;
}

export const INDEXNOW_KEY = getKey();