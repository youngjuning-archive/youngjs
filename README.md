# youngjs

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
// 数组并集（也可用作数组去重操作）
declare function union(a?: any[], b?: any[]): any[];
// 根据指定key，对数组对象进行合并去重
declare function unionByKey(a: object[] | undefined, b: object[] | undefined, key: string): object[];
declare function intersection(a?: any[], b?: any[]): any[];
declare function intersectionByKey(a: object[] | undefined, b: object[] | undefined, key: string, unionKey?: string): object[];
declare function difference(a?: any[], b?: any[]): any[];
declare function differenceByKey(a: object[] | undefined, b: object[] | undefined, key: string): object[];
```
