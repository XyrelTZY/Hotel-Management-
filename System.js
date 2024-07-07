window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
if (document.body.scrollTop > 4 || document.documentElement.scrollTop > 4) {

document.getElementById("nav").style.background = "#B80921";
} else {
document.getElementById("nav").style.background = "none";
}
}