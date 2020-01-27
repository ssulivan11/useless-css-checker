import CleanCss from 'clean-css'
import CssTreeWalker from './CssTreeWalker'
import FileUtil from './utils/FileUtil'
import PrintUtil from './utils/PrintUtil'
import SelectorFilter from './SelectorFilter'
import { getAllWordsInContent } from './utils/ExtractWordsUtil'

const OPTIONS = {
  output: false,
  minify: false,
  info: false,
  rejected: false,
  validationOutput: false,
  validationProcessExit: false,
  whitelist: [],
  cleanCssOptions: {}
}

const getOptions = (options = {}) => {
  const opt = {}
  for (const option in OPTIONS) {
    if (opt) opt[option] = options[option] || OPTIONS[option]
  }
  return opt
}

const minify = (cssSource, options) =>
  new CleanCss(options).minify(cssSource).styles

const uselessCssChecker = (searchThrough, css, options) => {
  options = getOptions(options)

  const cssString = FileUtil.filesToSource(css, 'css')
  const content = FileUtil.filesToSource(searchThrough, 'content')

  PrintUtil.startLog(minify(cssString).length)

  const wordsInContent = getAllWordsInContent(content)
  const selectorFilter = new SelectorFilter(wordsInContent, options.whitelist)
  const tree = new CssTreeWalker(cssString, [selectorFilter])

  tree.beginReading()
  let source = tree.toString()
  source = options.minify ? minify(source, options.cleanCssOptions) : source

  // Option info = true
  if (options.info) {
    if (options.minify) {
      PrintUtil.printInfo(source.length)
    } else {
      PrintUtil.printInfo(minify(source, options.cleanCssOptions).length)
    }
  }

  // Option rejected = true
  if (options.rejected && selectorFilter.rejectedSelectors.length) {
    PrintUtil.printRejected(
      selectorFilter.rejectedSelectors,
      minify(source, options.cleanCssOptions).length
    )
    if (options.validationProcessExit) process.exit(1)
  }

  // Option validationOutput = true && rejected = false
  if (!selectorFilter.rejectedSelectors.length && options.validationOutput) {
    PrintUtil.printValidated(css)
  }

  return true
}

export default uselessCssChecker
