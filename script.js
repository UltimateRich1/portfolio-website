// header variables
const sideMenu = document.getElementById("side-menu");

// about me variables
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

// --------------- header ---------------
function openMenu() {
  sideMenu.style.right = "0px";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

// --------------- about me ---------------
function openTab(event, tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
