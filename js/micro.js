
function $u(target){
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
    return target.className = classes.slice(0, index).concat(classes.slice(index + 1)).join(' ');
  };

  var addClass = function(className) {
    if (hasClass(className)) return;
    return target.className = [className].concat(getClasses()).join(' ');
  };

  var toggleClass = function(className) {
    return hasClass(className) ? removeClass(className) : addClass(className);
  };

  return {
    getClasses: getClasses,
    hasClass: hasClass,
    removeClass: removeClass,
    addClass: addClass,
    toggleClass: toggleClass
  };
}
