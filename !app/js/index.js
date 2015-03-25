//Adaptive
function adaptiveContentHeight(){
    if(window.innerHeight-119<=480)
        $('#content').css({
            'height':'480px'
        });
    else
        $('#content').css({
            'height':window.innerHeight-119+'px'
        });
    $('#content').css({
            'opacity':1
        });
    $('#footer').css({
            'opacity':1
        });
}

window.addEventListener("load", adaptiveContentHeight);
window.addEventListener("resize", adaptiveContentHeight);

function CircleMarginTop(){
    $('#circle').css({
        'marginTop': ($('#content').height() - $('#circle').height())/2+'px'
    });
}
window.addEventListener("load", CircleMarginTop);
window.addEventListener("resize", CircleMarginTop);

// Yandex.Metrika counter
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter28359591 = new Ya.Metrika({id:28359591,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    trackHash:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");