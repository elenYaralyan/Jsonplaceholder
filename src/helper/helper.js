export function createElement(type, className, innerText) {
  const element = document.createElement(type)
  className && (element.className = className)
  innerText && (element.innerText = innerText)
  return element
}


export function createStyle(href) {
  let link = createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.append(link)
}