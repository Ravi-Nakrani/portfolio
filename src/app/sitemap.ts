import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

/**
 * Generates sitemap.xml dynamically at build time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
