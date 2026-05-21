import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    category: z.string().default("未分类"),
  }),
});

export const collections = { blog };
