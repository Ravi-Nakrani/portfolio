import type { MetadataRoute } from "next";
import { personal } from "@/data";

/**
 * Web App Manifest definition.
 * Generated dynamically at build time by Next.js App Router.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personal.name} — Full-Stack Software Engineer`,
    short_name: personal.name,
    description: `${personal.name} is a Full-Stack Software Engineer based in ${personal.location}, building scalable web applications and real-time systems.`,
    start_url: "/",
    display: "standalone",
    background_color: "#080b12",
    theme_color: "#080b12",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
