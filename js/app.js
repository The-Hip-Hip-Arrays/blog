/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").className = "opensidenav";
    document.getElementById("main").className = "mainopensidenav";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").className = "closedsidenav";
    document.getElementById("main").className = "mainclosedsidenav";
    document.body.style.backgroundColor = "white";
}
