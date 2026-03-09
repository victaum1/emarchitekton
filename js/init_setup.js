let body = document.body;
let btn_ham = document.getElementById("menu_ham");
let btn_x = document.getElementById("menu_x");
let btn_bright = document.getElementById("btn_bright");
let btn_dark = document.getElementById("btn_dark");
let logos = document.getElementsByClassName("logo_img");

let nav_ls = document.getElementById("nav_ls");

let dark_mode =
  "color: white;background-color: black;background-image: url(./imgs/world-dark.svg)";
let bright_mode =
  "color: black;background-color: white;background-image: url(./imgs/world-bright.svg)";

let displayElem = (display, elem) => {
  if (display) {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
};

btn_ham.addEventListener("click", () => {
  displayElem(true, btn_x);
  displayElem(true, nav_ls);
  displayElem(false, btn_ham);
});

btn_x.addEventListener("click", () => {
  displayElem(false, btn_x);
  displayElem(false, nav_ls);
  displayElem(true, btn_ham);
});

btn_bright.addEventListener("click", () => {
  displayElem(false, btn_bright);
  displayElem(true, btn_dark);
  body.setAttribute("style", bright_mode);
  logos["0"].setAttribute("src", "./imgs/logo-bright.png");
  logos["1"].setAttribute("src", "./imgs/logo-bright.png");
});

btn_dark.addEventListener("click", () => {
  displayElem(false, btn_dark);
  displayElem(true, btn_bright);
  body.setAttribute("style", dark_mode);
  logos["0"].setAttribute("src", "./imgs/logo-dark.png");
  logos["1"].setAttribute("src", "./imgs/logo-dark.png");
});
