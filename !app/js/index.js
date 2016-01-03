function adaptiveContent(){
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
    //Button Width and centralization
    if(window.innerWidth<=460&&window.innerWidth>=375){
        $('#nav-container').css({
            'width':window.innerWidth-40+'px'
        });
        $('.button').css({
            'width':window.innerWidth-40+'px'
        });
        $('.navin').css({
            'width':window.innerWidth-26+'px'
        });
    }
    else{
        if(window.innerWidth<375){
            $('#nav-container').css({
                'width':375-40+'px'
            });
            $('.button').css({
                'width':375-40+'px'
            });
            $('.navin').css({
                'width':375-26+'px'
            });
        }
        else{
            $('#nav-container').css({
                'width':parseInt(window.innerWidth/436)*(436)+'px'
            });
            $('.button').css({
                'width':436+'px'
            });
            $('.navin').css({
                'width':436+'px'
            });
        }
    }
}

window.addEventListener("load", adaptiveContent);
window.addEventListener("resize", adaptiveContent);