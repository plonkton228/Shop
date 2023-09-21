module.exports = {
  env: {
      "browser": true,
      "es2022": true
},
    plugins: ["i18next"],
extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:n/recommended",
    "plugin:i18next/recommended",

],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project : ['**/tsconfig.json']
},
ignorePatterns: ['**/config', '**/dist', '**/node_modules'],
    "rules": {
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "n/exports-style": ["off", "module.exports"],
        "n/handle-callback-err": "off",
        "padded-blocks": "off",
        "n/no-missing-import": "off",
        "n/no-unpublished-import": "off",
        "@typescript-eslint/naming-convention": "off",
        "indent": [2, 4],
        "@typescript-eslint/indent": [2, 4],
     },
    "overrides": [{
        "files" :  ["**/src/**/*.test.{ts,tsx}"],
        "rules" : {
            "i18next/no-literal-string":  "off",
            "@typescript-eslint/no-confusing-void-expression": "off",
            "@typescript-eslint/no-unused-expressions": "off"
        }
    },
        {
            "files" :  ["**/src/pages/**/*.{ts,tsx}"],
            "rules" : {
                "i18next/no-literal-string":  "off",
            }
        }
    ]


}

