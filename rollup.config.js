// rollup.config.js
// https://juejin.im/post/5c073d86f265da615a419989
// https://juejin.im/entry/57e159cd67f3560056bd2ba5
// https://segmentfault.com/a/1190000010628352
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: './dist/youngjs.js',
    format: 'es', // amd,cjs,es,iife,umd
    sourcemap: 'inline',
    exports: 'named',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
