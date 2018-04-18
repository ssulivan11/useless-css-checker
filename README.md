# Useless CSS Checker

A function that takes content (HTML/JS/etc) and CSS, and returns the validity of your unused selectors.

## Installation  

```bash
yarn add useless-css-checker -D
```
## Usage

```javascript
const uselessCss = require('useless-css-checker')

module.exports.csscheck = () => {
  const content = [
    'dist/lib/main.js',
    'dist/lib/vendor.js'
  ];
  const css = [
    'dist/lib/main.css',
    'dist/lib/vendor.css'
  ];
  const options = {
    rejected: true,
    validationOutput: true,
    validationProcessExit: true,
    whitelist: ['*white-list-testing*']
  }
  uselessCss(content, css, options)
}
```
