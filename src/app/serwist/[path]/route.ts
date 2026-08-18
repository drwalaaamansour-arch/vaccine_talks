import { createSerwistRoute } from "@serwist/turbopack";

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } =
  createSerwistRoute({
    swSrc: "src/app/sw.ts",
    useNativeEsbuild: true,
    globIgnores: [
      "**/*.pdf",
      "**/*.{png,jpg,jpeg,webp,gif,avif,svg,ico}",
      "**/*.{mov,mp4,webm,m4v,mp3,wav,ogg}",
    ],
  });