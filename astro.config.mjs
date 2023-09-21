import { defineConfig } from 'astro/config';
import sentryIntegration from './sentry';
import spotlightIntegration from './spotlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sentryIntegration(),
    spotlightIntegration(),
  ]
})