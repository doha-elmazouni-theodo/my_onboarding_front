// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "@nimbleways/eslint-config"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["*.{spec,test}.{ts,tsx}"],
      rules: {
        "no-restricted-syntax": [
          "error",
          {
            selector: "CallExpression[callee.property.name='toMatchSnapshot']",
            message: "Unexpected toMatchSnapshot",
          },
        ],
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "i18next",
                message: "Importing the i18next library is not allowed.use local module ~i18n",
              },
              {
                name: "react-i18next",
                message: "Importing the react-i18next library is not allowed",
              },
            ],
          },
        ],
      },
    },
  ],
};
