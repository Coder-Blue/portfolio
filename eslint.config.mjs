import antfu from "@antfu/eslint-config";

export default antfu(
  {
    type: "app",
    svelte: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["**/.svelte-kit/**", "bun.lock"],
  },
  {
    rules: {
      "svelte/max-attributes-per-line": [
        "error",
        {
          multiline: 1,
          singleline: 2,
        },
      ],
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"],
        },
      ],
    },
  },
);
