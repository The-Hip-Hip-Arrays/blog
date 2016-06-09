
function $u(target){
  if (typeof target === 'string') {
    target = document.querySelectorAll(target);
    target = target.length === 1 ? target[0] : target;
  }

  var getClasses = function(){
    return target.className.split(/\s+/);
  };

  var classNameIndex = function(className) {
    return getClasses().indexOf(className);
  };

  var hasClass = function(className) {
    return classNameIndex(className) !== -1;
  };

  var removeClass = function(className) {
    var index = classNameIndex(className),
      classes = getClasses();
    target.className = classes.slice(0, index).concat(classes.slice(index + 1)).join(' ');
    return this;
  };

  var addClass = function(className) {
    if (hasClass(className)) return;
    target.className = [className].concat(getClasses()).join(' ');
    return this;
  };

  var toggleClass = function(className) {
    hasClass(className) ? removeClass(className) : addClass(className);
    return this;
  };

  var forEach = function(callback) {
    if (typeof callback !== 'function') return;
    if (target.length) [].forEach.call(target, callback);
    return this;
  };

  var click = function(callback) {
    if (typeof callback !== 'function') return;
    target.addEventListener('click', callback);
  };

  return {
    getClasses: getClasses,
    hasClass: hasClass,
    removeClass: removeClass,
    addClass: addClass,
    toggleClass: toggleClass,
    forEach: forEach,
    click: click
  };
}
