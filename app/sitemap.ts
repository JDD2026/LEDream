import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ledream.art",
      lastModified: new Date(),
    },
    {
      url: "https://ledream.art/contact",
      lastModified: new Date(),
    },
  ];
}
