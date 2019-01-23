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

var formatCounterTime = function formatCounterTime(seconds) {
  var hour = Math.floor(seconds / 3600);
  var minute = Math.floor(seconds / 60);
  var second = Math.floor(seconds - minute * 60);
  hour = hour >= 10 ? hour : "0".concat(hour);
  minute = minute >= 10 ? minute : "0".concat(minute);
  second = second >= 10 ? second : "0".concat(second);
  return "".concat(hour, ":").concat(minute, ":").concat(second);
};
var YDate = {
  formatCounterTime: formatCounterTime
};

var index = {
  YArray: YArray,
  YDate: YDate
};

export default index;
export { YArray, YDate };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91bmdqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1lBcnJheS5qcyIsIi4uL3NyYy9ZRGF0ZS5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiog57uf6K6h5pWw57uE5q+P5LiA6aG555qE5pWw6YePXG4qIEBwYXJhbSAge1thcnJheV19IGFycmF5IFvpnIDopoHnu5/orqHnmoTmlbDnu4RdXG4qIEByZXR1cm4ge1thcnJheV19ICAgICAgIFvnu5/orqHlkI7nmoTmlbDnu4RdXG4qL1xuY29uc3QgY291bnRJdGVtID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IG9iaiA9IHt9XG4gIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAvLyDmiorlvZPliY3pobnlvZPlgZrlsZ7mgKflkI1cbiAgICBjb25zdCBhdHRyID0gaXRlbVxuICAgIGlmICghb2JqW2F0dHJdKSB7IC8vIOWmguaenOWvueixoeS4reS4jeWtmOWcqOivpeWxnuaAp++8jOWImee7meWvueixoea3u+WKoOivpeWxnuaAp+W5tui1i+WAvOS4ujFcbiAgICAgIG9ialthdHRyXSA9IDFcbiAgICB9IGVsc2UgeyAvLyDlpoLmnpzlrZjlnKjor6XlsZ7mgKfvvIzlsLHliqAxXG4gICAgICBvYmpbYXR0cl0gKz0gMVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG9ialxufVxuXG4vKipcbiog5qC55o2u5a+56LGh5pWw57uE55qE5p+Q5Liqa2V55o6S5bqP77yI5pSv5oyB5Y2H5bqP5ZKM6ZmN5bqP77yJXG4qIHRydWUg5Li65Y2H5bqP77yMZmFsc2Ug5Li66ZmN5bqP77yb6buY6K6k5Li65Y2H5bqPXG4qIEB1cmwgaHR0cDovL3QuY24vejhTRFpwQ1xuKi9cbmNvbnN0IHNvcnRCeUtleSA9IChhcnJheSwga2V5LCBhc2NlbmQgPSB0cnVlKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHsgcmV0dXJuICfnrKzkuIDkuKrlj4LmlbDlv4XpobvmmK/mlbDnu4QnIH1cbiAgaWYgKCh0eXBlb2Yga2V5KSAhPT0gJ3N0cmluZycpIHsgcmV0dXJuICfnrKzkuozkuKrlj4LmlbDlv4XpobvmmK/lrZfnrKbkuLInIH1cbiAgaWYgKCh0eXBlb2YgYXNjZW5kKSAhPT0gJ2Jvb2xlYW4nKSB7IHJldHVybiAn56ys5LiJ5Liq5Y+C5pWw5b+F6aG75piv5biD5bCU5YC8JyB9XG4gIGlmIChhc2NlbmQpIHtcbiAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGFba2V5XSA+IGJba2V5XSkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfVxuICAgICAgaWYgKGFba2V5XSA8IGJba2V5XSkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIHJldHVybiAwXG4gICAgfSlcbiAgfVxuICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhW2tleV0gPCBiW2tleV0pIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGlmIChhW2tleV0gPiBiW2tleV0pIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9KVxufVxuXG4vKipcbiAqIOWQiOW5tuaVsOe7hOS4reavj+S4quWvueixoeS4reeahOaMh+WumuaVsOe7hFxuICpcbiAqIEBwYXJhbSAge1thcnJheV19IGFycmF5ICBb5pWw57uEXVxuICogQHBhcmFtICB7W3N0cmluZ119IGtleSAgIFvlsZ7mgKfplK5dXG4gKlxuICogQHJldHVybiB7W2FycmF5XX0gICAgICAgIFvmlbDnu4RdXG4gKi9cbmNvbnN0IGNvbmNhdEJ5S2V5ID0gKGFycmF5LCBrZXkpID0+IHtcbiAgY29uc3QgdGVtcEFyciA9IFtdXG4gIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICB0ZW1wQXJyLnB1c2goLi4uaXRlbVtrZXldKVxuICB9KVxuICByZXR1cm4gdGVtcEFyclxufVxuXG5leHBvcnQge1xuICBjb3VudEl0ZW0sXG4gIHNvcnRCeUtleSxcbiAgY29uY2F0QnlLZXksXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY291bnRJdGVtLFxuICBzb3J0QnlLZXksXG4gIGNvbmNhdEJ5S2V5LFxufVxuIiwiY29uc3QgZm9ybWF0Q291bnRlclRpbWUgPSAoc2Vjb25kcykgPT4ge1xuICBsZXQgaG91ciA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApXG4gIGxldCBtaW51dGUgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MClcbiAgbGV0IHNlY29uZCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAtIG1pbnV0ZSAqIDYwKVxuICBob3VyID0gKGhvdXIgPj0gMTApID8gaG91ciA6IGAwJHtob3VyfWBcbiAgbWludXRlID0gKG1pbnV0ZSA+PSAxMCkgPyBtaW51dGUgOiBgMCR7bWludXRlfWBcbiAgc2Vjb25kID0gKHNlY29uZCA+PSAxMCkgPyBzZWNvbmQgOiBgMCR7c2Vjb25kfWBcbiAgcmV0dXJuIGAke2hvdXJ9OiR7bWludXRlfToke3NlY29uZH1gXG59XG5cbmV4cG9ydCB7XG4gIGZvcm1hdENvdW50ZXJUaW1lLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZvcm1hdENvdW50ZXJUaW1lLFxufVxuIiwiaW1wb3J0IFlBcnJheSBmcm9tICcuL1lBcnJheSdcbmltcG9ydCBZRGF0ZSBmcm9tICcuL1lEYXRlJ1xuXG5leHBvcnQge1xuICBZQXJyYXksXG4gIFlEYXRlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFlBcnJheSxcbiAgWURhdGUsXG59XG4iXSwibmFtZXMiOlsiY291bnRJdGVtIiwiYXJyYXkiLCJvYmoiLCJmb3JFYWNoIiwiaXRlbSIsImF0dHIiLCJzb3J0QnlLZXkiLCJrZXkiLCJhc2NlbmQiLCJBcnJheSIsImlzQXJyYXkiLCJzb3J0IiwiYSIsImIiLCJjb25jYXRCeUtleSIsInRlbXBBcnIiLCJwdXNoIiwiZm9ybWF0Q291bnRlclRpbWUiLCJzZWNvbmRzIiwiaG91ciIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZSIsInNl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
