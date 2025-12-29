import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Portfolio Collection
 *
 * Essays, guides, and writing on building AI/ML systems and teams.
 * Content is universal/educational rather than company-specific case studies.
 *
 * Design philosophy: Clean, blog-style presentation.
 * Let the prose content speak for itself.
 */
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Optional fields - only used if relevant
    company: z.string().optional(),
    role: z.string().optional(),
    timeframe: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    tags: z.array(z.string()).optional(),
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
    url: z.string().url().optional().or(z.literal('')),
    description: z.string().optional(),
    episode: z.string().optional(),
    topics: z.array(z.string()).optional(),
  })
});

/**
 * Site Collection
 *
 * Site-wide configuration and profile data.
 * Used for hero sections and global content.
 * Uses discriminated union to enforce correct fields per type.
 */
const profileSchema = z.object({
  type: z.literal('profile'),
  name: z.string(),
  role: z.string(),
  company: z.string(),
  location: z.string().optional(),
  image: z.string().optional(),
  tagline: z.string().optional(),
});

const pageMetaSchema = z.object({
  type: z.literal('page-meta'),
  title: z.string(),
  lead: z.string().optional(),
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: z.discriminatedUnion('type', [profileSchema, pageMetaSchema]),
});

/**
 * Expertise Collection
 *
 * Skills and expertise areas displayed on home and about pages.
 * Each entry can appear on multiple pages via the `pages` field.
 */
const expertise = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/expertise' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    pages: z.array(z.enum(['home', 'about'])).default(['about']),
  })
});

/**
 * Timeline Collection
 *
 * Career timeline entries for the about page.
 * Ordered by the `order` field (ascending).
 */
const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: z.object({
    year: z.string(),
    title: z.string(),
    type: z.enum(['position', 'education', 'milestone']).default('position'),
    order: z.number().default(0),
  })
});

/**
 * Bio Collection
 *
 * Prose content for biographical sections.
 * Each entry is a paragraph or section of content.
 */
const bio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bio' }),
  schema: z.object({
    section: z.string(),
    order: z.number().default(0),
  })
});

export const collections = {
  portfolio,
  speaking,
  site,
  expertise,
  timeline,
  bio,
};
