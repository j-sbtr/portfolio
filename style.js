//Picture enlargement on certificate
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
    modal.classList.remove("hidden");
    modalImg.src = src;
}

modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});


//Hamburger menu
function toggleMenu() {
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}