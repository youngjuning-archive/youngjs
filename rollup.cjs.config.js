// rollup.config.js
// https://juejin.im/post/5c073d86f265da615a419989
// https://segmentfault.com/a/1190000010628352

export default {
  input: 'src/index.js',
  output: {
    file: './dist/youngjs.cjs.js',
    format: 'cjs', // amd,cjs,es,iife,umd
    sourcemap: true,
    exports: 'named',
  },
}
