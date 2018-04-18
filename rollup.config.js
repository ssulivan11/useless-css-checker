import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/uselesscss.js',
  targets: [
    {
      dest: 'dist/uselesscss.js',
      format: 'cjs'
    }
  ],
  plugins: [
    builtins(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          'es2015', { modules: false }
        ]
      ],
      plugins: ['external-helpers']
    })
  ],
  external: ['clean-css', 'glob', 'rework', 'uglifyjs'],
  sourceMap: false
}
