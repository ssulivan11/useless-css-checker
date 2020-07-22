# Useless CSS Checker

A function that takes content (HTML/JS/etc) and CSS, and returns the validity of your unused selectors.

## Installation

```bash
npm install useless-css-checker --save-dev
```

## Usage

```javascript
const uselessCssChecker = require('useless-css-checker')

module.exports.csscheck = () => {
  const content = ['dist/lib/main.js', 'dist/lib/vendor.js']
  const css = ['dist/lib/main.css', 'dist/lib/vendor.css']
  const options = {
    rejected: true,
    validationOutput: true, // gives output on rejections
    validationProcessExit: true, // determines if process.exit
    whitelist: ['*white-list-testing*']
  }
  uselessCssChecker(content, css, options)
}
```

### Success:

![Imgur](https://i.imgur.com/kk1Bcnt.png)

### Failure:

![Imgur](https://i.imgur.com/3SmtJQF.png)
