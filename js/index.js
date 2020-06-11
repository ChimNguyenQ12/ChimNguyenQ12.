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
function giaynu() {
    window.location.href = ("/HTML/giaynu+filter.html");
}

function DangNhap() {
    window.location.href = ("../HTML/index_login.html")
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
