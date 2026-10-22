import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// One page. No lastModified: a build-time date would change every deploy
// without the content changing.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
