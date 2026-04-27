import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "warn",
      "prefer-const": "error",
    },
  },
];

export default eslintConfig;

