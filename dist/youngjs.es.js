function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/**
* 统计数组每一项的数量
* @param  {[array]} array [需要统计的数组]
* @return {[array]}       [统计后的数组]
*/
var countItem = function countItem(array) {
  var obj = {};
  array.forEach(function (item) {
    // 把当前项当做属性名
    var attr = item;

    if (!obj[attr]) {
      // 如果对象中不存在该属性，则给对象添加该属性并赋值为1
      obj[attr] = 1;
    } else {
      // 如果存在该属性，就加1
      obj[attr] += 1;
    }
  });
  return obj;
};
/**
* 根据对象数组的某个key排序（支持升序和降序）
* true 为升序，false 为降序；默认为升序
* @url http://t.cn/z8SDZpC
*/


var sortByKey = function sortByKey(array, key) {
  var ascend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!Array.isArray(array)) {
    return '第一个参数必须是数组';
  }

  if (typeof key !== 'string') {
    return '第二个参数必须是字符串';
  }

  if (typeof ascend !== 'boolean') {
    return '第三个参数必须是布尔值';
  }

  if (ascend) {
    return array.sort(function (a, b) {
      if (a[key] > b[key]) {
        return 1;
      }

      if (a[key] < b[key]) {
        return -1;
      }

      return 0;
    });
  }

  return array.sort(function (a, b) {
    if (a[key] < b[key]) {
      return 1;
    }

    if (a[key] > b[key]) {
      return -1;
    }

    return 0;
  });
};
/**
 * 合并数组中每个对象中的指定数组
 *
 * @param  {[array]} array  [数组]
 * @param  {[string]} key   [属性键]
 *
 * @return {[array]}        [数组]
 */


var concatByKey = function concatByKey(array, key) {
  var tempArr = [];
  array.forEach(function (item) {
    tempArr.push.apply(tempArr, _toConsumableArray(item[key]));
  });
  return tempArr;
};
var YArray = {
  countItem: countItem,
  sortByKey: sortByKey,
  concatByKey: concatByKey
};

var index = {
  YArray: YArray
};

export default index;
export { YArray };
//# sourceMappingURL=youngjs.es.js.map
