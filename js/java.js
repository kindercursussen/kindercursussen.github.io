function burger_open_close() {
  var x = document.getElementById("navMenuBurger");
  var y = document.getElementById("burgerIcon");
  if (x.className === "navbar_burger") {
    x.className += " responsive";
    y.className += " invert";
  } else {
    x.className = "navbar_burger";
    y.className = "burger_icon";
  }
}
