const showNav = document.getElementById("show-nav");
const ulList = document.getElementById("listing");
const closeNav = document.getElementById("close-nav");
showNav.addEventListener("click", () => {
  ulList.classList.toggle("showNav");
  closeNav.classList.add("add");
});
closeNav.addEventListener("click", () => {
  ulList.classList.toggle("showNav");
  closeNav.style.display("none");
});
