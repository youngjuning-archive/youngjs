import { author, version } from '../package.json'

// 数组并集
function union(a: any[] = [], b: any[]= []): any[] {
  return Array.from(new Set(a.concat(b)))
}

// 根据指定key，对数组对象进行合并去重
function unionByKey(a: object[] = [], b: object[] = [], key: string): object[] {
  const keys: any = {}
  const array = a.concat(b)
  const result: any[] = []

  array.forEach((item: any) => {
    if (!keys[item[key]]) {
      keys[item[key]] = `${item[key]}`
      result.push(item)
    }
  })
  return result
}

// 数组交集
function intersection(a: any[] = [], b: any[] = []): any[] {
  return Array.from(new Set(a.filter((v: any) => new Set(b).has(v))))
}

// 根据指定key，求对象数组的交集
function intersectionByKey(a: object[] = [], b: object[] = [], key: string): object[] {
  const unionArr = a.concat(b)
  const aMap = a.map((item: any) => item[key])
  const bMap = b.map((item: any) => item[key])
  const intersectionArr = intersection(aMap, bMap)
  const result: object[] = []

  console.log('unionArr:', unionArr)
  console.log('intersectionArr:', intersectionArr)

  unionArr.forEach((x: any) => {
    if (intersectionArr.some((y: any) => x[key] === y)) {
      result.push(x)
    }
  })

  return result
}

// 数组差集
function difference(a: any[]= [], b: any[]= []): any[] {
  const aSet = new Set(a)
  const bSet = new Set(b)
  return Array.from(new Set(a.concat(b).filter((v) => !aSet.has(v) || !bSet.has(v))))
}

// 根据指定key，求对象数组的差集
function differenceByKey(a: object[] = [], b: object[] = [], key: string): object[] {
  const unionArr = a.concat(b)
  const aMap = a.map((item: any) => item[key])
  const bMap = b.map((item: any) => item[key])
  const differenceArr = difference(aMap, bMap)
  const result: object[] = []

  unionArr.forEach((x: any) => {
    if (differenceArr.some((y: any) => x[key] === y)) {
      result.push(x)
    }
  })
  return result
}

export {
  version,
  author,
  union,
  unionByKey,
  intersection,
  intersectionByKey,
  differenceByKey,
  difference
}

export default {
  version,
  author,
  union,
  unionByKey,
  intersection,
  intersectionByKey,
  differenceByKey,
  difference,
}
