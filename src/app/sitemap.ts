import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages: MetadataRoute.Sitemap = [{
      url: "https://www.smartsentinel.in/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.smartsentinel.in/#testimonials",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.smartsentinel.in/#whatwedo",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    }]

  return [
    ...staticPages
  ];
}