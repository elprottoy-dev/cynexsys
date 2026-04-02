import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cynexsys IT",
    short_name: "Cynexsys",
    description: "AI systems, research software, geospatial intelligence, and future ready digital infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#030711",
    theme_color: "#22d3ee",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
