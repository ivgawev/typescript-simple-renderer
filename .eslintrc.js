module.exports = {
      extends: ["standard-with-typescript"],

      rules: {
            // BASE
            indent: ["error", 6, { SwitchCase: 1 }],
            "jsx-quotes": ["error", "prefer-double"],
            "max-len": ["error", { code: 250 }],
            quotes: "off",
            semi: "off",

            // TYPESCRIPT
            "@typescript-eslint/consistent-type-assertions": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/indent": ["error", 6],
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/promise-function-async": "off",
            "@typescript-eslint/semi": ["error", "always"],
            "@typescript-eslint/strict-boolean-expressions": "off"
      },

      // PARSER
      parserOptions: {
            project: "tsconfig.json"
      }
};
