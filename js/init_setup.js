let body = document.body;
/*
let menu_ham = document.getElementById("menu_ham");
let menu_x = document.getElementById("menu_x");
let btn_bright = document.getElementById("btn_bright");
let btn_dark = document.getElementById("btn_dark");
let logos = document.getElementsByClassName("logo_img");
*/
let nav_ls = document.getElementById("nav_ls");

let menu_ham = null;
let menu_x = null;
let btn_bright = null;
let btn_dark = null;
let logos = null;

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

waitForElement("#menu_ham").then((element) => {
  menu_ham = element;
  element.addEventListener("click", () => {
    displayElem(false, menu_ham);
    displayElem(true, menu_x);
    displayElem(true, nav_ls);
  });
});

waitForElement("#menu_x").then((element) => {
  menu_x = element;
  element.addEventListener("click", () => {
    displayElem(false, menu_x);
    displayElem(false, nav_ls);
    displayElem(true, menu_ham);
  });
});

waitForElement("#btn_bright").then((element) => {
  btn_bright = element;
  logos = document.getElementsByClassName("logo_img");
  element.addEventListener("click", () => {
    displayElem(false, btn_bright);
    displayElem(true, btn_dark);
    body.setAttribute("style", bright_mode);
    logos["0"].setAttribute("src", "./imgs/logo-bright.png");
    logos["1"].setAttribute("src", "./imgs/logo-bright.png");
  });
});

waitForElement("#btn_dark").then((element) => {
  btn_dark = element;
  logos = document.getElementsByClassName("logo_img");
  element.addEventListener("click", () => {
    displayElem(false, btn_dark);
    displayElem(true, btn_bright);
    body.setAttribute("style", dark_mode);
    logos["0"].setAttribute("src", "./imgs/logo-dark.png");
    logos["1"].setAttribute("src", "./imgs/logo-dark.png");
  });
});

/*
btn_dark.addEventListener("click", () => {
  displayElem(false, btn_dark);
  displayElem(true, btn_bright);
  body.setAttribute("style", dark_mode);
  logos["0"].setAttribute("src", "./imgs/logo-dark.png");
  logos["1"].setAttribute("src", "./imgs/logo-dark.png");
});
*/
