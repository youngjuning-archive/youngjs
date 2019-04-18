# youngjs

> 实用前端数据处理工具函数

## 安装

```sh
$ yarn add @youngjs/youngjs
```

## 函数声明

本库源码使用 typescript 编写，利用typescript**类型注解**的特性实现代码即文档的效果。

![](https://i.loli.net/2019/04/18/5cb89c5730341.png)

![](https://i.loli.net/2019/04/18/5cb89c8ba8266.png)

## 示例

### 库基本信息

```js
import young from '@youngjs/youngjs'

const version = young.version // *.*.*
const author = young.author // youngjuning <youngjuning@aliyun.com>
```

### 基础类型数组的数集操作

```js
import young from '@youngjs/youngjs'

const a = [1,2,3]
const b = [1,2,3,4]

const unionData = young.union(a,b) // [1,2,3,4]
const intersectionData = young.intersection(a,b) // [1,2,3]
const differenceData = young.difference(a,b) // [4]
```

### 对象数组的数集操作

```js
import young from '@youngjs/youngjs'

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
// 根据name求并集
const unionByName = young.unionByKey(users, users1, 'name')
/**
[
  { vip: true, name: '张三' }, 
  { vip: true, name: '李四' }, 
  { vip: true, name: '王五' }, 
  { vip: false, name: '赵六' }
] 
**/
// 根据name求并集，然后根据vip求交集
const intersectionByVip = young.intersectionByKey(users, users1, 'vip','name')
/**
[
  { vip: true, name: '张三' }, 
  { vip: true, name: '李四' }, 
  { vip: true, name: '王五' }
] 
**/
// 根据vip求差集
const differenceByVip = young.differenceByKey(users, users1, 'vip')
/**
[
  { vip: false, name: '赵六' }
] 
**/
```

### 数组分组

**数据:**

```js
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
```

**groupByKey:**

```js
import young from '@youngjs/youngjs'
young.groupByKey(array,"province")
```

**结果:**

```js
[
  {
    province: '河南', 
    data: [
      { name: '杨俊宁', province: '河南' }, 
      { name: '宋光刚', province: '河南' }, 
      { name: '李珂威', province: '河南' }
    ]
  }, 
  {
    province: '江苏',
    data: [
      { name: '谢晧曜', province: '江苏' }
    ]
  }
]
```

## 删除数组项

```js
import young from '@youngjs/youngjs'
young.removeItemByItem(['张三', '李四', '王五'], '王五')
/*
['张三', '李四']
*/
young.removeItemByIndex(['张三', '李四', '王五'], 1)
/*
['张三', '王五']
*/
young.removeItemByKey(
  [
    {name: '张三'},
    {name: '李四'},
    {name: '王五'}
  ],
  'name',
  '张三'
)
/*
[
  { name: '李四' },
  { name: '王五' }
] 
*/
```

### 数组排序

```js
import young from '@youngjs/youngjs'
young.sort([1, 100, 1000, 99, 80]) // [ 1, 80, 99, 100, 1000 ] 
young.sort([1, 100, 1000, 99, 80], false) // [ 1000, 100, 99, 80, 1 ] 
young.sortByKey([
  { name: '张三', age: 16 }, { name: '李四', age: 26 }, { name: '王五', age: 13 }
], 'age')
/*
[
  { name: '王五', age: 13 }, 
  { name: '张三', age: 16 }, 
  { name: '李四', age: 26 }
] 
*/
```
