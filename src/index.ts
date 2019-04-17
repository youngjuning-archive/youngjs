import { version } from '../package.json'

// 数组并集
const union = (a = [], b = []) => Array.from(new Set(a.concat(b)))

export {
  union
}

export default {
  version,
  union
}
