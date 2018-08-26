export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join('')
}

export function hasClass (el, className) {
  console.log(el, 'el')
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  console.log(reg.test(el.className), 'reg')
  return reg.test(el.className)
}
