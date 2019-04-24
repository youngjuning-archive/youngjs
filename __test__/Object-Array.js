/* eslint-disable no-console */
import young from '..'

console.log(young.differenceByKey(
  [{ name: '张三' }, { name: '李四' }, { name: '王五' }],
  [{ name: '张三' }, { name: '李四' }],
  'name'
))
console.log(young.reduced([1, 2, 3, [4, 5, 6, [7, 8, 9]], 10]))
