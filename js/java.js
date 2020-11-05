function burger_open_close() {
  var x = document.getElementById("navMenuBurger");
  var y = document.getElementById("burgerIcon");
  var z = document.getElementById("burgerTitle");
  var w = document.getElementById("menuBurger");
  if (x.className === "navbar_burger") {
    x.className += " responsive";
    y.className += " invert";
    window.setTimeout(opacityAddTitle, 500);
    window.setTimeout(opacityAddMenu, 1000);
  } else {
    x.className = "navbar_burger";
    y.className = "burger_icon";
    z.className = "title";
    w.className = "nav_menu_burger";
  }
}

function opacityAddTitle() {
  var z = document.getElementById("burgerTitle");
  z.className += " opacity";
}
function opacityAddMenu() {
  var w = document.getElementById("menuBurger");
  w.className += " opacity";
}
