let btn_ham = document.getElementById("menu_ham");
let btn_x = document.getElementById("menu_x");
let nav_ls = document.getElementById("nav_ls");

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
