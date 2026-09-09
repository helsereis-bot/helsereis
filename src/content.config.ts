import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const turer = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/turer",
  }),

  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    destination: z.string(),

    description: z.string(),

    hero: z.string(),
    heroPosition: z.string().default("center"),

    eyebrow: z.string().default("FELTRAPPORT"),
    reportTitle: z.string().optional(),

    introTitle: z.string().default("Introduksjon"),

    published: z.boolean().default(true),

    stats: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .default([]),

    highlights: z
      .array(
        z.object({
          title: z.string(),
          text: z.string(),
        })
      )
      .default([]),

    routes: z
      .array(
        z.object({
          title: z.string(),
          distance: z.string().optional(),
          elevation: z.string().optional(),
          url: z.string().url().optional(),
          text: z.string(),
        })
      )
      .default([]),

    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = {
  turer,
};