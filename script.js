addEventListener("click", function (event) {
  const navIcon = document.querySelector(".mobile-nav-icon");
  const navMenu = document.getElementById("navbar");
  console.log(navIcon)



  if (navIcon.contains(event.target)) {
    navMenu.classList.toggle("active");
  }
});
