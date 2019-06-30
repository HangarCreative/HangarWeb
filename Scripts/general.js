window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (window.pageYOffset > 10) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
};