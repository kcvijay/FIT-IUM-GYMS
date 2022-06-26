const menu = document.querySelector(".nav-menu");
const iconToggle = document.querySelector(".icon-toggle");

function toggleDisplay() {
  if ((menu.style.display = "none")) {
    menu.style.display = "block";
    menu.classList.add("active");
  } else {
    menu.style.display = "none";
  }
}

function hideMenu() {
  if ((menu.style.display = "block")) {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
