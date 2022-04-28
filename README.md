# eslint-config-marcel

[![npm](https://img.shields.io/npm/v/eslint-config-marcel.svg)](https://www.npmjs.com/package/eslint-config-marcel)

> Personal ESLint settings, which can be (used by anyone)[http://eslint.org/docs/developer-guide/shareable-configs.html].

## Installation

```
$ npm i -D eslint eslint-config-marcel
```

## Usage

Once the `eslint-config-marcel` package is installed, you can use it by specifying `marcel` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

Create a `.eslintrc.js` file in the root folder of your project and use the following skeleton:

```js
module.exports = {
  "extends": "marcel",
  "rules": {
    // Additional, per-project rules...
  },
};
```

As optional feature, you can add script entry, called `lint` e.g., to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint -c .eslintrc.js --ext .ts <srcFolder>",
    "lint:fix": "eslint --fix -c .eslintrc.js --ext .ts <srcFolder>"
  }
}
```

### Visual Studio Code

First install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for [Visual Studio Code](https://code.visualstudio.com/) by [Dirk Baeumer](https://marketplace.visualstudio.com/publishers/dbaeumer).

Then setup your `settings.json` inside your `.vscode` subfolder by adding the following entries:

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "eslint.quiet": false,
  "eslint.workingDirectories": ["<srcFolder>"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

To keep sure, to have the extension installed, create a `extensions.json` file inside the same folder, if needed, and add the following entry as recommendation:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint"]
}
```


## License

MIT © [Marcel Joachim Kloubert](https://github.com/mkloubert)

## Support

<span class="badge-paypal"><a href="https://paypal.me/MarcelKloubert" title="Donate to this project using PayPal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/mkloubert" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/mkloubert" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>

Or visit https://marcel.coffee
