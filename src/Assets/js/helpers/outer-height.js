// http://youmightnotneedjquery.com/

export const outerHeight = (el) => {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}
