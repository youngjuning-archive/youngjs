import { author, version } from '../package.json'

// 基本类型数组并集
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

// 基本类型数组交集
function intersection(a: any[] = [], b: any[] = []): any[] {
  return Array.from(new Set(a.filter((v: any) => new Set(b).has(v))))
}

// 根据指定key，求对象数组的交集
function intersectionByKey(a: object[] = [], b: object[] = [], key: string, unionKey: string = key): object[] {
  const unionArr = unionByKey(a, b, unionKey)
  const aMap = a.map((item: any) => item[key])
  const bMap = b.map((item: any) => item[key])
  const intersectionArr = intersection(aMap, bMap)
  const result: object[] = []

  unionArr.forEach((x: any) => {
    if (intersectionArr.some((y: any) => x[key] === y)) {
      result.push(x)
    }
  })

  return result
}

// 基本类型数组差集
function difference(a: any[]= [], b: any[]= []): any[] {
  return Array.from(new Set(a.concat(b).filter((v) => !new Set(a).has(v) || !new Set(b).has(v))))
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

// 根据对象的指定key进行分组
function groupByKey(array: object[] = [], key: string): object[] {
  const keys: any = {}
  const result: object[] = []

  array.forEach((item: any) => {
    if (!keys[item[key]]) {
      result.push({
        [key]: item[key],
        data: [item],
      })
      keys[item[key]] = `${item[key]}`
    } else {
      result.forEach((tempItem: any) => {
        if (tempItem[key] === item[key]) {
          tempItem.data.push(item)
        }
      })
    }
  })
  return result
}

// 根据值删除普通数组指定项
function removeItemByItem(array: any[] = [], rItem: any) {
  return array.filter((item) => item !== rItem)
}

// 根据索引删除普通数组指定项
function removeItemByIndex(array: any[] = [], rIndex: any) {
  return array.filter((item, index) => index !== rIndex)
}

// 根据指定key和value，删除对象数组指定项
function removeItemByKey(array: any[] = [], key: string, value: string) {
  return array.filter((item) => item[key] !== value)
}

// fit antd picker Data
function fitAntdPickerData(array: object[] = [], label: any, value: any) {
  return array.map((item: any) => ({
    value: item[value],
    label: item[label],
  }))
}

// 对普通数组排序
function sort(array: any[], ascend: boolean = true) {
  if (ascend) {
    return array.sort((a: any, b: any) => {
      if (a > b) {
        return 1
      }
      if (a < b) {
        return -1
      }
      return 0
    })
  }
  return array.sort((a: any, b: any) => {
    if (a > b) {
      return -1
    }
    if (a < b) {
      return 1
    }
    return 0
  })
}

// 根据指定key对对象数组排序（默认为升序）
function sortByKey(array: object[] = [], key: string, ascend: boolean = true) {
  if (ascend) {
    return array.sort((a: any, b: any) => {
      if (a[key] > b[key]) {
        return 1
      }
      if (a[key] < b[key]) {
        return -1 // a[key] < b[key], a 会被排列到 b 之前
      }
      return 0
    })
  }
  return array.sort((a: any, b: any) => {
    if (a[key] > b[key]) {
      return -1 // a[key] > b[key], a 会被排列到 b 之前
    }
    if (a[key] < b[key]) {
      return 1
    }
    return 0
  })
}

// 多维数组转一维数组
function reduced(array: any[] = []) {
  const newArr: any = []

  function fun(arr: any[]) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        fun(item)
      } else {
        newArr.push(item)
      }
    })
  }
  fun(array)
  return newArr
}

export {
  version,
  author,
  union,
  unionByKey,
  intersection,
  intersectionByKey,
  difference,
  differenceByKey,
  groupByKey,
  removeItemByItem,
  removeItemByIndex,
  removeItemByKey,
  fitAntdPickerData,
  sort,
  sortByKey,
  reduced
}

export default {
  version,
  author,
  union,
  unionByKey,
  intersection,
  intersectionByKey,
  difference,
  differenceByKey,
  groupByKey,
  removeItemByItem,
  removeItemByIndex,
  removeItemByKey,
  fitAntdPickerData,
  sort,
  sortByKey,
  reduced
}
