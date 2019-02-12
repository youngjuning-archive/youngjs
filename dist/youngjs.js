(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.myBundle = {}));
}(this, function (exports) { 'use strict';

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

  exports.YArray = YArray;
  exports.YDate = YDate;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91bmdqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL1lBcnJheS5qcyIsIi4uL3NyYy9ZRGF0ZS5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiog57uf6K6h5pWw57uE5q+P5LiA6aG555qE5pWw6YePXG4qIEBwYXJhbSAge1thcnJheV19IGFycmF5IFvpnIDopoHnu5/orqHnmoTmlbDnu4RdXG4qIEByZXR1cm4ge1thcnJheV19ICAgICAgIFvnu5/orqHlkI7nmoTmlbDnu4RdXG4qL1xuY29uc3QgY291bnRJdGVtID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IG9iaiA9IHt9XG4gIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAvLyDmiorlvZPliY3pobnlvZPlgZrlsZ7mgKflkI1cbiAgICBjb25zdCBhdHRyID0gaXRlbVxuICAgIGlmICghb2JqW2F0dHJdKSB7IC8vIOWmguaenOWvueixoeS4reS4jeWtmOWcqOivpeWxnuaAp++8jOWImee7meWvueixoea3u+WKoOivpeWxnuaAp+W5tui1i+WAvOS4ujFcbiAgICAgIG9ialthdHRyXSA9IDFcbiAgICB9IGVsc2UgeyAvLyDlpoLmnpzlrZjlnKjor6XlsZ7mgKfvvIzlsLHliqAxXG4gICAgICBvYmpbYXR0cl0gKz0gMVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG9ialxufVxuXG4vKipcbiog5qC55o2u5a+56LGh5pWw57uE55qE5p+Q5Liqa2V55o6S5bqP77yI5pSv5oyB5Y2H5bqP5ZKM6ZmN5bqP77yJXG4qIHRydWUg5Li65Y2H5bqP77yMZmFsc2Ug5Li66ZmN5bqP77yb6buY6K6k5Li65Y2H5bqPXG4qIEB1cmwgaHR0cDovL3QuY24vejhTRFpwQ1xuKi9cbmNvbnN0IHNvcnRCeUtleSA9IChhcnJheSwga2V5LCBhc2NlbmQgPSB0cnVlKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHsgcmV0dXJuICfnrKzkuIDkuKrlj4LmlbDlv4XpobvmmK/mlbDnu4QnIH1cbiAgaWYgKCh0eXBlb2Yga2V5KSAhPT0gJ3N0cmluZycpIHsgcmV0dXJuICfnrKzkuozkuKrlj4LmlbDlv4XpobvmmK/lrZfnrKbkuLInIH1cbiAgaWYgKCh0eXBlb2YgYXNjZW5kKSAhPT0gJ2Jvb2xlYW4nKSB7IHJldHVybiAn56ys5LiJ5Liq5Y+C5pWw5b+F6aG75piv5biD5bCU5YC8JyB9XG4gIGlmIChhc2NlbmQpIHtcbiAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGFba2V5XSA+IGJba2V5XSkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfVxuICAgICAgaWYgKGFba2V5XSA8IGJba2V5XSkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIHJldHVybiAwXG4gICAgfSlcbiAgfVxuICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhW2tleV0gPCBiW2tleV0pIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICAgIGlmIChhW2tleV0gPiBiW2tleV0pIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9KVxufVxuXG4vKipcbiAqIOWQiOW5tuaVsOe7hOS4reavj+S4quWvueixoeS4reeahOaMh+WumuaVsOe7hFxuICpcbiAqIEBwYXJhbSAge1thcnJheV19IGFycmF5ICBb5pWw57uEXVxuICogQHBhcmFtICB7W3N0cmluZ119IGtleSAgIFvlsZ7mgKfplK5dXG4gKlxuICogQHJldHVybiB7W2FycmF5XX0gICAgICAgIFvmlbDnu4RdXG4gKi9cbmNvbnN0IGNvbmNhdEJ5S2V5ID0gKGFycmF5LCBrZXkpID0+IHtcbiAgY29uc3QgdGVtcEFyciA9IFtdXG4gIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICB0ZW1wQXJyLnB1c2goLi4uaXRlbVtrZXldKVxuICB9KVxuICByZXR1cm4gdGVtcEFyclxufVxuXG5leHBvcnQge1xuICBjb3VudEl0ZW0sXG4gIHNvcnRCeUtleSxcbiAgY29uY2F0QnlLZXksXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY291bnRJdGVtLFxuICBzb3J0QnlLZXksXG4gIGNvbmNhdEJ5S2V5LFxufVxuIiwiY29uc3QgZm9ybWF0Q291bnRlclRpbWUgPSAoc2Vjb25kcykgPT4ge1xuICBsZXQgaG91ciA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApXG4gIGxldCBtaW51dGUgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MClcbiAgbGV0IHNlY29uZCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAtIG1pbnV0ZSAqIDYwKVxuICBob3VyID0gKGhvdXIgPj0gMTApID8gaG91ciA6IGAwJHtob3VyfWBcbiAgbWludXRlID0gKG1pbnV0ZSA+PSAxMCkgPyBtaW51dGUgOiBgMCR7bWludXRlfWBcbiAgc2Vjb25kID0gKHNlY29uZCA+PSAxMCkgPyBzZWNvbmQgOiBgMCR7c2Vjb25kfWBcbiAgcmV0dXJuIGAke2hvdXJ9OiR7bWludXRlfToke3NlY29uZH1gXG59XG5cbmV4cG9ydCB7XG4gIGZvcm1hdENvdW50ZXJUaW1lLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZvcm1hdENvdW50ZXJUaW1lLFxufVxuIiwiaW1wb3J0IFlBcnJheSBmcm9tICcuL1lBcnJheSdcbmltcG9ydCBZRGF0ZSBmcm9tICcuL1lEYXRlJ1xuXG5leHBvcnQge1xuICBZQXJyYXksXG4gIFlEYXRlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFlBcnJheSxcbiAgWURhdGUsXG59XG4iXSwibmFtZXMiOlsiY291bnRJdGVtIiwiYXJyYXkiLCJvYmoiLCJmb3JFYWNoIiwiaXRlbSIsImF0dHIiLCJzb3J0QnlLZXkiLCJrZXkiLCJhc2NlbmQiLCJBcnJheSIsImlzQXJyYXkiLCJzb3J0IiwiYSIsImIiLCJjb25jYXRCeUtleSIsInRlbXBBcnIiLCJwdXNoIiwiZm9ybWF0Q291bnRlclRpbWUiLCJzZWNvbmRzIiwiaG91ciIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZSIsInNl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
