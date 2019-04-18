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

const students = [
  {
    name: '杨俊宁',
    province: '河南',
  },
  {
    name: '宋光刚',
    province: '河南',
  },
  {
    name: '谢晧曜',
    province: '江苏',
  },
  {
    name: '李珂威',
    province: '河南',
  }
]

const unionByName = young.unionByKey(users, users1, 'name')
const intersectionByVip = young.intersectionByKey(users, users1, 'vip', 'name')
const differenceByVip = young.differenceByKey(users, users1, 'vip')
const groupArray = young.groupByKey(students, 'province')

console.log('unionByName:', unionByName)
console.log('intersectionByVip:', intersectionByVip)
console.log('differenceByVip:', differenceByVip)
console.log('groupArray:', groupArray)
console.log(young.removeItemByKey([
  {name: '张三'}, {name: '李四'}, {name: '王五'}
], 'name', '张三'))
console.log(young.sortByKey([
  { name: '张三', age: 16 }, { name: '李四', age: 26 }, { name: '王五', age: 13 }
], 'age'))
