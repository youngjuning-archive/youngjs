import { author, version } from '../package.json'

// 数组并集
function union(a: any[], b: any[]): any[] {
  return Array.from(new Set(a.concat(b)))
}

// 根据指定key，对数组对象进行合并去重
function unionByKey(a: object[], b: object[], key: string): object[] {
  const keys: any = {}
  const array = a.concat(b)
  const result: any[] = []
  array.forEach((item: any) => {
    if (!keys[item[key]]) {
      keys[item[key]] = item[key]
      result.push(item)
    }
  })
  return result
}

// 数组交集
function intersection(a: any[], b: any[]): any[] {
  const aSet = new Set(a)
  const bSet = new Set(b)
  return Array.from(new Set(a.filter((v: any) => bSet.has(v))))
}

// 数组差集
function difference(a: any[], b: any[]): any[] {
  const aSet = new Set(a)
  const bSet = new Set(b)
  return Array.from(new Set(a.concat(b).filter((v) => !aSet.has(v) || !bSet.has(v))))
}

export {
  version,
  author,
  union,
  unionByKey,
  intersection,
  difference
}

export default {
  version,
  author,
  union,
  unionByKey,
  intersection,
  difference,
}
