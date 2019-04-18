// rollup.config.js
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { browser, main, module, version } from './package.json'

const banner = '/*!\n'
  + ` * youngjs v${version}\n`
  + ` * (c) 2018-${new Date().getFullYear()} youngjuning\n`
  + ' * Released under the MIT License.\n'
  + ' */'
const footer = '/* follow me on weibo! @杨俊俊宁 */'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      name: 'youngjs',
      file: browser,
      format: 'umd',
      exports: 'named',
      sourcemap: true,
      banner,
      footer
    },
    plugins: [
      json(),
      resolve(), // 告诉 Rollup 如何查找外部模块
      commonjs(), // 将 CommonJS 转换成 ES2015 模块
      typescript()
    ],
    // 指出应将哪些模块视为外部模块
    external: ['dayjs', 'deepcopy', 'fast-deep-equal', 'kind-of']
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.ts',
    output: [
      {
        file: main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        banner,
        footer
      },
      {
        file: module,
        format: 'es',
        sourcemap: true,
        banner,
        footer
      },
    ],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      typescript()
    ],
    external: ['dayjs', 'deepcopy', 'fast-deep-equal', 'kind-of']
  }
]
