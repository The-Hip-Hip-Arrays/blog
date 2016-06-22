/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  $u('#mySidenav')
    .addClass('opensidenav');
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  $u('#mySidenav')
    .removeClass('opensidenav');
}

function toggleMenu(event){
  $u('#mySidenav').toggleClass('opensidenav');
}

function toggleImage(event) {
  var target = event.currentTarget;

  if ($u(target).hasClass('teamperson')) {
    console.log(target);
    $u(target).toggleClass('toggle');
  }
}

$u('.teamperson').forEach(function(el){
  $u(el).click(toggleImage);
});

$u('#mySidenav a').forEach(function(el){
  $u(el).click(closeNav);
});

$u('.js-open-btn').click(toggleMenu);
