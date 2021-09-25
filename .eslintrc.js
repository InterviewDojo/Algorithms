module.exports = {
    env: {
      jest: true,
      node: true,
    },
    extends: [
      "plugin:prettier/recommended"
    ],
    plugins: ["@typescript-eslint", "prettier"],
    parser: "@typescript-eslint/parser",
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error", { "vars": "all", "args": "all", "argsIgnorePattern": "^_" }
      ]
    },
    overrides: [
      {
        files: ["**/__tests__/**"],
      },
    ],
  };