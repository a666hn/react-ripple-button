import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import sassModule from 'rollup-plugin-sass'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      babel({ exclude: 'node_modules/**/*', babelHelpers: 'bundled' }),
      resolve(),
      commonJs(),
      sassModule({ insert: true }),
      typescript({
        // eslint-disable-next-line no-undef
        typescript: require('typescript')
      })
    ],
    output: [
      { file: pkg.main, format: 'cjs', compact: true, plugins: [terser({ compress: { drop_console: true, drop_debugger: true }, ie8: true })] },
      { file: pkg.module, format: 'esm', compact: true, plugins: [terser({ compress: { drop_console: true, drop_debugger: true }, ie8: true })] },
      {
        file: 'example/src/react-ripple-button/index.js',
        format: 'es',
        banner: '/* eslint-disable */'
      }
    ]
  }
]
