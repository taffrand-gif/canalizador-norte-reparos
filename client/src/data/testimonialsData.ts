/**
 * Témoignages — dynamique uniquement via tRPC reviews.
 */
export interface Testimonial {
 id: number;
 name: string;
 city: string;
 service: string;
 rating: 5;
 date: string;
 text: string;
 verified: boolean;
}
export const NORTE_REPAROS_TESTIMONIALS: Testimonial[] = [];