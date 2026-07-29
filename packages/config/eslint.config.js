/**
 * NexusCM ESLint Configuration
 * ESLint v9 Flat Config
 */

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/.turbo/**",
      "**/.output/**",
      "**/.cache/**",
      "**/*.min.js",
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },

      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },

    rules: {
      // Best Practices
      "no-console": "warn",
      "no-debugger": "error",
      "no-var": "error",
      "prefer-const": "error",

      // Style
      "object-shorthand": "error",
      "prefer-template": "error",

      // TypeScript
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },

  // Let Prettier handle formatting
  eslintConfigPrettier,
];
