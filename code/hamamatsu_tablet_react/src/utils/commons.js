// ======================================================================
// ======================================================================
// ========================= private functions ==========================
// ======================================================================
// ======================================================================

const getIndexAutoIncreament = function * () {
  let index = 0
  while (true) yield index++
}

const getDateNow = ({ type = 'raw' }) => {
  const d = new Date()

  const yyyy = d.getFullYear()
  const mm = ('0' + (d.getMonth() + 1)).slice(-2)
  const dd = ('0' + d.getDate()).slice(-2)

  const typeDateNowArr = {
    raw: yyyy + mm + dd,
    string: yyyy + '-' + mm + '-' + dd
  }

  const today = typeDateNowArr[type] || typeDateNowArr['raw']

  return today
}

// ======================================================================
// ======================================================================
// ========================== public functions ==========================
// ======================================================================
// ======================================================================

export const getID = () => {
  return 'global-index-unique-' + getIndexAutoIncreament().next().value
}

export const getDateNowString = () => {
  const today = getDateNow({ type: 'string' })

  return today
}

export const getDateNowRaw = () => {
  const today = getDateNow({ type: 'raw' })

  return today
}

export const clone = item => {
  if (!item) {
    return item
  }

  var types = [Number, String, Boolean],
    result

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach(function (type) {
    if (item instanceof type) {
      result = type(item)
    }
  })

  if (typeof result == 'undefined') {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      result = []
      item.forEach(function (child, index, array) {
        result[index] = clone(child)
      })
    } else if (typeof item == 'object') {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode == 'function') {
        result = item.cloneNode(true)
      } else if (!item.prototype) {
        // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item)
        } else {
          // it is an object literal
          result = {}
          for (var i in item) {
            result[i] = clone(item[i])
          }
        }
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        if (false && item.constructor) {
          // would not advice to do that, reason? Read below
          result = new item.constructor()
        } else {
          result = item
        }
      }
    } else {
      result = item
    }
  }

  return result
}

export const deepEqual = (a, b) => {
  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (Object.keys(a).length != Object.keys(b).length) return false
    for (var key in a) if (!deepEqual(a[key], b[key])) return false
    return true
  } else return a === b
}
