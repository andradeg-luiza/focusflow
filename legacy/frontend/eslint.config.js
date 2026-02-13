import vue from "eslint-plugin-vue";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      vue,
      "@typescript-eslint": ts,
      prettier
    },
    rules: {
      // Prettier como fonte da verdade
      "prettier/prettier": "error",

      // Vue
      "vue/multi-word-component-names": "off",

      // TypeScript
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",

      // Organização de imports
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true
        }
      ]
    }
  }
];
