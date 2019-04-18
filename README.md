# youngjs

> 实用前端数据处理工具函数

## 安装

```sh
$ yarn add @youngjs/youngjs
```

## 函数声明？ 文档？

> 本库源码使用 typescript 编写，利用typescript**类型注解**的特性实现代码即文档的效果。
> 下面是本库的声明文件，声明了期望的参数类型和返回值类型。

```ts
// 库的版本、库的作者
import { author, version } from '../package.json';
// 数组数集操作
// 基本类型数组并集（也可用作数组去重操作）
declare function union(a?: any[], b?: any[]): any[];
// 根据指定key，对数组对象进行合并去重
declare function unionByKey(a: object[] | undefined, b: object[] | undefined, key: string): object[];
// 基本类型数组交集
declare function intersection(a?: any[], b?: any[]): any[];
// 根据指定key，求对象数组的交集
// unionKey 是对象的唯一标示，一般为objectId、id之类的
declare function intersectionByKey(a: object[] | undefined, b: object[] | undefined, key: string, unionKey?: string): object[];
// 基本类型数组差集
declare function difference(a?: any[], b?: any[]): any[];
// 根据指定key，求对象数组的差集
declare function differenceByKey(a: object[] | undefined, b: object[] | undefined, key: string): object[];
```

## Demo

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
