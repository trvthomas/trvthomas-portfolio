// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Chivo",
        cssVariable: "--font-chivo",
        styles: ["normal"],
        weights: ["100 900"],
        fallbacks: ["sans-serif"]
    }]
});