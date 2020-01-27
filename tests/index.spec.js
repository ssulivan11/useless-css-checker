/* eslint-env jest */
const uselessCss = require('../dist/main.js')

describe('Useless Class Checker', () => {
  const options = {
    rejected: true,
    output: './coverage/outputShim',
    validationOutput: true,
    validationProcessExit: false,
    whitelist: ['*color-swatch-option*'],
  }

  console.log = jest.fn()

  it('valid', () => {
    const content = ['valid/simple.js']
    const css = ['valid/simple.css']

    uselessCss(content, css, options)
    expect(console.log).toHaveBeenCalled()
  })

  it('invalid', () => {
    const content = ['invalid/simple.js']
    const css = ['invalid/simple.css']

    uselessCss(content, css, options)
    expect(console.log).toHaveBeenCalled()
  })
})
