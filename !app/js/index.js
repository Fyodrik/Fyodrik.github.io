var adaptiveContent = function(){
    //Content Height
    if(window.innerHeight-54<=500)
        $('#content').css({
            'height':'550px'
        });
    else
        $('#content').css({
            'height':window.innerHeight-54+'px'
        });
}
window.addEventListener("load", adaptiveContent);
window.addEventListener("resize", adaptiveContent);