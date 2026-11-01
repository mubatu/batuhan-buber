import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      logo: image().optional(),
      cover: image().optional(),
      links: z
        .object({
          website: z.string().url().optional(),
          github: z.string().url().optional(),
        })
        .default({}),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

export const collections = { projects };
