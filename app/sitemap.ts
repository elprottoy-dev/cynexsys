import type { MetadataRoute } from "next";
import { navItems, secondaryNav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...navItems, ...secondaryNav].map((item) => ({
    url: `${site.url}${item.href}`,
    lastModified: new Date(),
  }));
}
