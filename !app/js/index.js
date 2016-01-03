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
    if(document.getElementById('nav-container'))
    	console.log(1);
    else
    	console.log(0);
    //Button Width and centralization
    if(window.innerWidth<=460&&window.innerWidth>=375){
        $('#nav-container').css({
            'width':window.innerWidth+'px'
        });
        $('.button').css({
            'width':window.innerWidth-24+'px'
        });
        $('.navin').css({
            'width':window.innerWidth-10+'px'
        });
    }
    if(window.innerWidth<375){
        $('#nav-container').css({
            'width':375+'px'
        });
        $('.button').css({
            'width':375-24+'px'
        });
        $('.navin').css({
            'width':375-10+'px'
        });
    }
    if(window.innerWidth>460){
        $('#nav-container').css({
            'width':parseInt(window.innerWidth/460)*(460)+10+'px'
        });
        $('.button').css({
            'width':436+'px'
        });
        $('.navin').css({
            'width':450+'px'
        });
    }
    console.log("ADAPTIVING");
}
adaptiveContent();
window.addEventListener("load", adaptiveContent);
window.addEventListener("resize", adaptiveContent);