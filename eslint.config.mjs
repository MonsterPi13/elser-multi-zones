import antfu from "@antfu/eslint-config";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

export default antfu({
  type: "app",
  typescript: true,
  formatters: true,
  nextjs: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: ["public", "src/components/ui/**", "scripts/**", ".github/**"],
},

/* Custom rules */
{
  rules: {
    "max-lines": ["warn", { max: 400 }],
    "style/max-len": ["warn", { code: 130 }],
    "unicorn/filename-case": ["error", {
      cases: {
        kebabCase: true,
      },
      ignore: ["README.md"],
    }],
  },
}, {
  plugins: {
    "@stylistic": stylistic,
  },
  rules: {
    "@stylistic/multiline-ternary": ["error", "never"],
    "@stylistic/operator-linebreak": ["error", "after"],
  },
}, {
  rules: {
    // Consistently import navigation APIs from `@/i18n/navigation`
    "no-restricted-imports": [
      "error",
      {
        name: "next/link",
        message: "Please import from `@/i18n/navigation` instead.",
      },
      {
        name: "next/navigation",
        importNames: ["redirect", "permanentRedirect", "useRouter", "usePathname"],
        message: "Please import from `@/i18n/navigation` instead.",
      },
    ],
  },
},

/* tailwindcss plugin configuration */
{
  files: ["**/*.{jsx,tsx}"],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    "better-tailwindcss": eslintPluginBetterTailwindcss,
  },
  rules: {
    // enable all recommended rules to report a warning
    ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
    // enable all recommended rules to report an error
    ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,

    // or configure rules individually
    "better-tailwindcss/enforce-consistent-line-wrapping": ["warn", { printWidth: 100 }],
    "better-tailwindcss/no-unregistered-classes": ["error", {
      detectComponentClasses: true,
    }],
  },
  settings: {
    "better-tailwindcss": {
      entryPoint: "src/styles/global.css",
    },
  },
});
