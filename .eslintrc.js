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
      },
    },
  ],
};
