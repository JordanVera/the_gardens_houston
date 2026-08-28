export const GALLERY_IMAGES = [
  { id: 1, src: "/gallery/gallery-01.jpg", alt: "The Gardens Houston venue photo 1", category: "ballroom" as const, featured: true },
  { id: 2, src: "/gallery/gallery-02.jpg", alt: "The Gardens Houston venue photo 2", category: "garden" as const, featured: true },
  { id: 3, src: "/gallery/gallery-03.jpg", alt: "The Gardens Houston venue photo 3", category: "chapel" as const, featured: true },
  { id: 4, src: "/gallery/gallery-04.jpg", alt: "The Gardens Houston venue photo 4", category: "ballroom" as const, featured: true },
  { id: 5, src: "/gallery/gallery-05.jpg", alt: "The Gardens Houston venue photo 5", category: "garden" as const, featured: true },
  { id: 6, src: "/gallery/gallery-06.jpg", alt: "The Gardens Houston venue photo 6", category: "chapel" as const, featured: true },
  { id: 7, src: "/gallery/gallery-07.jpg", alt: "The Gardens Houston venue photo 7", category: "ballroom" as const, featured: true },
  { id: 8, src: "/gallery/gallery-08.jpg", alt: "The Gardens Houston venue photo 8", category: "garden" as const, featured: true },
  { id: 9, src: "/gallery/gallery-09.jpg", alt: "The Gardens Houston venue photo 9", category: "chapel" as const, featured: false },
  { id: 10, src: "/gallery/gallery-10.jpg", alt: "The Gardens Houston venue photo 10", category: "ballroom" as const, featured: false },
  { id: 11, src: "/gallery/gallery-11.jpg", alt: "The Gardens Houston venue photo 11", category: "garden" as const, featured: false },
  { id: 12, src: "/gallery/gallery-12.jpg", alt: "The Gardens Houston venue photo 12", category: "chapel" as const, featured: false },
  { id: 13, src: "/gallery/gallery-13.jpg", alt: "The Gardens Houston venue photo 13", category: "ballroom" as const, featured: false },
  { id: 14, src: "/gallery/gallery-14.jpg", alt: "The Gardens Houston venue photo 14", category: "garden" as const, featured: false },
  { id: 15, src: "/gallery/gallery-15.jpg", alt: "The Gardens Houston venue photo 15", category: "chapel" as const, featured: false },
] as const;

export type GalleryImage = (typeof GALLERY_IMAGES)[number];