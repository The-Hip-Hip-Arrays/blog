/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").className = "sidenav opensidenav";
    document.getElementById("main").className = "mainopensidenav";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").className = "sidenav closedsidenav";
    document.getElementById("main").className = "mainclosedsidenav";
    document.body.style.backgroundColor = "white";
}

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
    var index = classNameIndex(className);
    return target.className = getClasses().slice(0, index).concat(getClasses().slice(index + 1)).join(' ');
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

function toggleImage(event) {
    var target = event.currentTarget;

    if (!$u(target).hasClass('teamperson')) return;
    $u(target).toggleClass('toggle');
}

var openMenuBtn = document.querySelector('.js-open-btn'),
 closeMenuBtn = document.querySelector('.js-close-btn'),
 toggleImageBtns = document.querySelectorAll('.teamperson');

for (var i = 0; i < toggleImageBtns.length; i++){
  toggleImageBtns[i].addEventListener('click', toggleImage);
}

openMenuBtn.addEventListener('click', openNav);
closeMenuBtn.addEventListener('click', closeNav);
