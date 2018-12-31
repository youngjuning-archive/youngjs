/**
* 根据对象数组的某个key排序（支持升序和降序）
* true 为升序，false 为降序；默认为升序
* @url http://t.cn/z8SDZpC
*/
const sortArrayByKey = (array, key, ascend = true) => {
  if (!Array.isArray(array)) { return '第一个参数必须是数组' }
  if ((typeof key) !== 'string') { return '第二个参数必须是字符串' }
  if ((typeof ascend) !== 'boolean') { return '第三个参数必须是布尔值' }
  if (ascend) {
    return array.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1
      }
      if (a[key] < b[key]) {
        return -1
      }
      return 0
    })
  }
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return 1
    }
    if (a[key] > b[key]) {
      return -1
    }
    return 0
  })
}

export default {
  sortArrayByKey,
}
