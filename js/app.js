/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    $u('#mySidenav')
      .removeClass('closedsidenav')
      .addClass('opensidenav');

    $u('#main')
      .removeClass('mainclosedsidenav')
      .addClass('mainopensidenav');
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    $u('#mySidenav')
      .removeClass('opensidenav')
      .addClass('closedsidenav');

    $u('#main')
      .removeClass('mainopensidenav')
      .addClass('mainclosedsidenav');
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

$u('.js-open-btn').click(openNav);
$u('.js-close-btn').click(closeNav);
