import { defineConfig } from "astro/config";
// import { sentryVitePlugin } from "@sentry/vite-plugin";

import sentryIntegration from "./sentry";
import spotlightIntegration from "./spotlight";
import react from "@astrojs/react";

// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  build: {
    sourcemap: true, // Source map generation must be turned on
  },

  // plugins: [
  //   // Put the Sentry vite plugin after all other plugins
  //   sentryVitePlugin({
  //     org: process.env.SENTRY_ORG,
  //     project: process.env.SENTRY_PROJECT,
  //     // Auth tokens can be obtained from https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/
  //     authToken: process.env.SENTRY_AUTH_TOKEN,
  //   }),
  // ],

  // vite: {
  //   ssr: {
  //     noExternal: [/.*sentry.*/],
  //   },
  // },
  integrations: [spotlightIntegration(), sentryIntegration(), react()],
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
});
