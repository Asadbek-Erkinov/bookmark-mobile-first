var elSiteHeader = document.querySelector(".js-header");

var elShowMenuBtn = elSiteHeader.querySelector(".hambur-menu-btn");



elShowMenuBtn.addEventListener("click", function() {

elSiteHeader.classList.toggle("show-menu");

document.body.classList.toggle("no-scroll")

})