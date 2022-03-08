const menuList = document.getElementById("menu-list");
const hambergerMenu = document.getElementById("menu-icon");
const closingIcon = document.getElementById('menu-closing-icon');
const navLink = document.getElementById("menu-list");

hambergerMenu.addEventListener('click', (e)=>{
    menuList.classList.toggle("active");
    closingIcon.style.display = "block";
})

closingIcon.addEventListener("click", (e) => {
    menuList.classList.remove("active");
})

document.querySelectorAll(".menu-link").forEach(n => n.addEventListener("click", () => {
    menuList.classList.remove("active");
    hambergerMenu.classList.remove('active');
}))

