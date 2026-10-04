import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/proyects' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    year: z.number(),
    model: z.string().optional(),
    cover: z.string(), // z.string().url() valida que sea una URL de Cloudinary
    photos: z.array(z.string().url()),
  }),
});

export const collections = { proyectos };