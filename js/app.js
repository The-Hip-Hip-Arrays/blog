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

function closeImage() {
      this.style.display = 'none';
}


var openMenuBtn = document.querySelector('.js-open-btn'),
closeMenuBtn = document.querySelector('.js-close-btn');
closeImageBtn = document.querySelector('.img-circle');


openMenuBtn.addEventListener('click', openNav);
closeMenuBtn.addEventListener('click', closeNav);
closeImageBtn.addEventListener('click', closeImage);
