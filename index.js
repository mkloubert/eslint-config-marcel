/*******************************************************************************
  The MIT License (MIT)
  Copyright (c) 2022-present Marcel Joachim Kloubert
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*******************************************************************************/

module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-explicit-any": ["off"],
    "quotes": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "brace-style": "error",
    "comma-dangle": ["error", "always"],
    "curly": "error",
    "eqeqeq": [
      "error",
      "always"
    ],
    "indent": "off",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    "no-unused-expressions": "error",
    "no-var": "error",
    "quote-props": ["error", "always", {
      "numbers": true
    }],
    "spaced-comment": "error",
  }
};