function openMenu() {
    var aside = document.querySelector("aside");
    var filter = document.getElementById("blurfilter");
    aside.style.right = 0
    filter.style.left = 0
}

function closeMenu() {
    var aside = document.querySelector("aside");
    var filter = document.getElementById("blurfilter");
    aside.style.right = '-50%'
    filter.style.left = '-50%'
}