/* eslint-disable no-console */
import young from '..'

const users = [
  { vip: true, name: '张三' },
  { vip: true, name: '李四' },
  { vip: true, name: '王五' }
]
const users1 = [
  { vip: true, name: '张三' },
  { vip: true, name: '李四' },
  { vip: true, name: '王五' },
  { vip: false, name: '赵六' }
]

const unionByName = young.unionByKey(users, users1, 'name')
const intersectionByVip = young.intersectionByKey(users, users1, 'vip', 'name')
const differenceByVip = young.differenceByKey(users, users1, 'vip')

console.log('unionByName:', unionByName)
console.log('intersectionByVip:', intersectionByVip)
console.log('differenceByVip:', differenceByVip)
