import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import react from "@astrojs/react";
import vercelServerless from '@astrojs/vercel/serverless';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), react(), astroI18next({
    baseLanguage: "en",
    i18next: {
        debug: true, // convenient during development to check for missing keys
        supportedLngs: ["en", "es"],
      },
    loacales: ["en", "es"],
    experimental: {
      i18nDomains: true
    },
    routing: {
      prefixDefaultLocale: false
  }
  })],
  adapter: vercelServerless()
});