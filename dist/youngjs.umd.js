/*!
 * youngjs v0.5.4
 * (c) 2018-2019 youngjuning
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.youngjs = {}));
}(this, function (exports) { 'use strict';

  var version = "0.5.4";

  var union = function union() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return Array.from(new Set(a.concat(b)));
  };
  var index = {
    version: version,
    union: union
  };

  exports.union = union;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
/* follow me on weibo! @杨俊俊宁 */
//# sourceMappingURL=youngjs.umd.js.map
