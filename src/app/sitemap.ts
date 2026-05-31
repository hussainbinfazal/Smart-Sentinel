import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages: MetadataRoute.Sitemap = [{
      url: process.env.NEXT_PUBLIC_BASE_URL!,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },]

  return [
    ...staticPages
  ];
}