import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Portfolio Collection
 *
 * Case studies and project highlights from Bradley's career.
 * Featured items appear on the homepage.
 */
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    problem: z.string(),
    approach: z.string(),
    outcome: z.string(),
    company: z.string(),
    role: z.string(),
    timeframe: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    tags: z.array(z.string()).optional(),
    metrics: z.array(z.string()).optional(),
  })
});

/**
 * Speaking Collection
 *
 * Podcast appearances, conference talks, and other speaking engagements.
 * Ordered by date (most recent first).
 */
const speaking = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/speaking' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    date: z.coerce.date(),
    type: z.enum(['podcast', 'conference', 'webinar', 'panel', 'interview']),
    url: z.string().url(),
    description: z.string().optional(),
    episode: z.string().optional(),
    topics: z.array(z.string()).optional(),
  })
});

export const collections = {
  portfolio,
  speaking,
};
