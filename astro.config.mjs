import { defineConfig } from 'astro/config';
import sentryIntegration from './sentry';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sentryIntegration(),
  ]
})