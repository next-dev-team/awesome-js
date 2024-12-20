const { resolve } = require("node:path");
const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-default-export": "off",
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "import/no-default-export": "off",
    "react/function-component-definition": 0,
    "@typescript-eslint/consistent-type-definitions": 0
  }
};
