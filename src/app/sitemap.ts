import type { MetadataRoute } from "next";
import { siteUrl } from "@content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, priority: 1 },
    { url: `${siteUrl}/projects/dormsy`, priority: 0.8 },
    { url: `${siteUrl}/resume`, priority: 0.5 },
  ];
}
