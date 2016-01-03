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
    //Content Opacity
    $('#content').css({
        'opacity':1
    });
    //AJAX LOADING
    $('#content').load(strSiteDomen+"!app/loading.html");
}
window.addEventListener("load", adaptiveContent);
window.addEventListener("resize", adaptiveContent);