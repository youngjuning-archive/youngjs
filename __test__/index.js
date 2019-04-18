/* eslint-disable no-console */
import young from '..'

const users = [
  {
    vip: true,
    name: '张三',
  },
  {
    vip: true,
    name: '李四',
  },
  {
    vip: true,
    name: '王五',
  }
]
const users1 = [
  {
    vip: true,
    name: '张三',
  },
  {
    vip: true,
    name: '李四',
  },
  {
    vip: false,
    name: '杨柳',
  },
  {
    vip: false,
    name: '赵六',
  },
]

console.log(young.unionByKey(users, users1, 'name'))
console.log(young.intersectionByKey(users, users1, 'name'))
console.log(young.differenceByKey(users, users1, 'name'))
