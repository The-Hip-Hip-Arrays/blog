
function $u(target){
  if (typeof target === 'string') {
    target = document.querySelectorAll(target);
    if (target.length === 1) target = target[0];
  }

  var getClasses = function(){
    return target.classList;
  };

  var classNameIndex = function(className) {
    return getClasses().indexOf(className);
  };

  var hasClass = function(className) {
    return target.classList.contains(className);
  };

  var removeClass = function(className) {
    target.classList.remove(className);
    return this;
  };

  var addClass = function(className) {
    target.classList.add(className);
    return this;
  };

  var toggleClass = function(className) {
    target.classList.toggle(className);
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
