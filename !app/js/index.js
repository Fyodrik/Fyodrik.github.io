//Adaptive
function adaptiveContentHeight(){
    if(window.innerHeight-52<=480)
        $('#content').css({
            'height':'480px'
        });
    else
        $('#content').css({
            'height':window.innerHeight-53+'px'
        });
    $('#content').css({
            'opacity':1
        });
}

window.addEventListener("load", adaptiveContentHeight);
window.addEventListener("resize", adaptiveContentHeight);