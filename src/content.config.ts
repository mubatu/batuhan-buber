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

// One markdown file per photo, named YYYY-MM-DD-slug (the date comes from the name);
// only the frontmatter is used
const gallery = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      location: z.string().optional(),
      device: z.string().optional(),
      label: z.string().optional(),
    }),
});

export const collections = { projects, gallery };
