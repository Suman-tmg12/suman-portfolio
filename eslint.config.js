import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser } 
  },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Automatically detects your React version
      },
    },
    rules: {
      // Disables the old React-in-scope requirement for modern JSX transform
      "react/react-in-jsx-scope": "off",
      // Disables prop-types checking across components
      "react/prop-types": "off",
    },
  },
  {
    // Fixes the unused 'error' variable warning in ContactForm.jsx
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    },
  },
]);