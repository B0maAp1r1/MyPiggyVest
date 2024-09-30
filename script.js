var pikin = document.querySelectorAll(".pikin");

pikin.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        var lastChild = item.lastElementChild;
        lastChild.style.marginLeft = "20px"
    })

    item.addEventListener("mouseleave", function() {
        var lastChild = item.lastElementChild;
        lastChild.style.marginLeft = "0"
    })
})

var navBar = document.querySelector(".navBar");
var resNav = document.querySelector(".resNav");
var resNavBar = document.querySelector(".resNavBar");
var header = document.querySelector(".header");

navBar.onclick = function() {
    resNav.style.top = "0";
    resNavBar.style.display = "block"
}

resNavBar.onclick = function() {
    resNav.style.top = "-450px";
    this.style.display = "none";
}

document.onscroll = function () {
    if(window.scrollY > 50){
        header.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";
    }else{
        header.style.boxShadow = "";
    }
}