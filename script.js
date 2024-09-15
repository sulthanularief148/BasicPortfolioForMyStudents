addEventListener("click", function (event) {
  const navIcon = document.querySelector(".mobile-nav-icon");
  const navMenu = document.getElementById("navbar");
  console.log(navIcon)



  if (navIcon.contains(event.target)) {
    navMenu.classList.toggle("active");
  }
});
console.log(1);
const number = [1, 2, 3, 45];
const [a, b] = number;
console.log(a, b)

