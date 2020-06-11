// v cái này dành cho span down tree
let dropTree = document.getElementById("stickyDrop");
dropTree.addEventListener("click", () => {
    document.querySelector(".stickyElement").classList.toggle("active");
    // document.classList.toggle("stickyDrop-down");
})

//^ cái này dành cho span down tree

function node() {
    document.querySelector(".stickyElement").classList.toggle("active");
}
function search() {
    alert("Không tìm thấy :D");
}


// Hiệu ứng slidebar 
var lstImg = ["", "slideshow.jpg", "slideshow1.jpg", "slideshow2.jpg",];
var i = 1;
window.onload = function () {
    setInterval(function () {
        i++;
        ChonAnh(i);
    }, 2500);
}

function ChonAnh(viTri) {
    i = viTri;
    if (i <= 0) {
        i = lstImg.length - 1;
    }
    if (i >= lstImg.length) {
        i = 1;
    }
    document.getElementById("imgSlider").src = "img/" + lstImg[i];
}


// button xem thêm + quay lại
function nam_more() {
    window.location.href = "../HTML/nam_more.html"
}
function nu_more() {
    window.location.href = "../HTML/nu_more.html"
}
function nu_back() {
    window.location.href = "../HTML/giaynu.html"
}
function aokhoac_more() {
    window.location.href = "../HTML/aokhoac_more.html"
}
function nam_back() {
    window.location.href = "../HTML/giaynam.html"
}
function aokhoac_back() {
    window.location.href = "../HTML/aokhoac.html"
}