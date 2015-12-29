;
(A = function(){
    $('#nav-container').css({
        'width': parseInt(window.innerWidth/398)*398+'px'
    });
})();

window.addEventListener("load", A);
window.addEventListener("resize", A);