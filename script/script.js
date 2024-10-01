addEventListener("click", function (event) {
    const navIcon = document.querySelector(".mobile-nav-icon");
    const navMenu = document.getElementById("navbar");
    console.log(navIcon)

    if (navIcon.contains(event.target)) {
        navMenu.classList.toggle("active");
    }
});


function handleClick() {
    const nameInput = document.getElementById("name")
    const numberInput = document.getElementById("mobile")
    const messageInput = document.getElementById("message")

    // if(nameInput && numberInput )
}