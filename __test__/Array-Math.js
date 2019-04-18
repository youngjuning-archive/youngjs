/* eslint-disable no-console */
import young from '..'

const a = [1,2,3]
const b = [1,2,3,4]

const unionData = young.union(a,b)
const intersectionData = young.intersection(a,b)

console.log('unionData:', unionData)
console.log('intersectionData:', intersectionData)
