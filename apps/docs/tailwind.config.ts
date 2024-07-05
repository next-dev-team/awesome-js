// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | 'theme' | 'corePlugins'> = {
  content: [
    "./src/app/**/*.tsx", 
    // "../../packages/ui/*.{js,ts,jsx,tsx}",
    // "../../packages/ui-rc/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
};

export default config;
