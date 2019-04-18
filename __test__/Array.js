/* eslint-disable no-console */
import young from '..'

const a = [1, 2, 3]
const b = [1, 2, 3, 4]

const unionData = young.union(a, b)
const intersectionData = young.intersection(a, b)
const differenceData = young.difference(a, b)

console.log('unionData:', unionData)
console.log('intersectionData:', intersectionData)
console.log('differenceData:', differenceData)
console.log(young.removeItemByItem(['张三', '李四', '王五'], '王五'))
console.log(young.removeItemByIndex(['张三', '李四', '王五'], 1))
console.log(young.sort([1, 100, 1000, 99, 80]))
console.log(young.sort([1, 100, 1000, 99, 80], false))
