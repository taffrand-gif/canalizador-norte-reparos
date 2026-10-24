export interface ServiceVideo {
 id: string;
 category: string;
 title: string;
 description: string;
 duration: number;
 thumbnailUrl: string;
 youtubeId: string;
 keywords: string[];
 uploadDate: string;
 transcript: string;
}

// Aucun contenu vidéo original vérifié n'est actuellement disponible.
// L'ancien catalogue de démonstration est conservé dans l'historique Git,
// mais ses vidéos de remplacement, témoignages et promesses ne sont pas publiables.
// Réintroduire uniquement des vidéos réellement produites, avec métadonnées exactes.
export const videoData: ServiceVideo[] = [];
