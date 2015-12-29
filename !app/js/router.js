// (C) 2015 Dmitry Fyodorov (aka Fyodrik)
// Router.js - браузерная маршрутизация для AJAX-подзагрузки
// Венгерская нотация
; var strCurLoc = location.toString(), strSiteDomen = "https://fyodrik.github.io/";

//Обновление состояния

var updateState = function(state){
    //AJAx LOADING
    document.getElementById('content').innerHTML = "
    <style type='text/css'> width: 100%;
    @-webkit-keyframes uil-ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0 0 0 0;
      }
      33% {
        width: 44%;
        height: 44%;
        margin: -22% 0 0 -22%;
        opacity: 1;
      }
      100% {
        width: 88%;
        height: 88%;
        margin: -44% 0 0 -44%;
        opacity: 0;
      }
    }
    @-webkit-keyframes uil-ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0 0 0 0;
      }
      33% {
        width: 44%;
        height: 44%;
        margin: -22% 0 0 -22%;
        opacity: 1;
      }
      100% {
        width: 88%;
        height: 88%;
        margin: -44% 0 0 -44%;
        opacity: 0;
      }
    }
    @-moz-keyframes uil-ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0 0 0 0;
      }
      33% {
        width: 44%;
        height: 44%;
        margin: -22% 0 0 -22%;
        opacity: 1;
      }
      100% {
        width: 88%;
        height: 88%;
        margin: -44% 0 0 -44%;
        opacity: 0;
      }
    }
    @-ms-keyframes uil-ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0 0 0 0;
      }
      33% {
        width: 44%;
        height: 44%;
        margin: -22% 0 0 -22%;
        opacity: 1;
      }
      100% {
        width: 88%;
        height: 88%;
        margin: -44% 0 0 -44%;
        opacity: 0;
      }
    }
    @-moz-keyframes uil-ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0 0 0 0;
      }
      33% {
        width: 44%;
        height: 44%;
        margin: -22% 0 0 -22%;
        opacity: 1;
      }
      100% {
        width: 88%;
        height: 88%;
        margin: -44% 0 0 -44%;
        opacity: 0;
      }
    }
    @-webkit-keyframes uil-ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0 0 0 0;
      }
      33% {
        width: 44%;
        height: 44%;
        margin: -22% 0 0 -22%;
        opacity: 1;
      }
      100% {
        width: 88%;
        height: 88%;
        margin: -44% 0 0 -44%;
        opacity: 0;
      }
    }
    @-o-keyframes uil-ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0 0 0 0;
      }
      33% {
        width: 44%;
        height: 44%;
        margin: -22% 0 0 -22%;
        opacity: 1;
      }
      100% {
        width: 88%;
        height: 88%;
        margin: -44% 0 0 -44%;
        opacity: 0;
      }
    }
    @keyframes uil-ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0 0 0 0;
      }
      33% {
        width: 44%;
        height: 44%;
        margin: -22% 0 0 -22%;
        opacity: 1;
      }
      100% {
        width: 88%;
        height: 88%;
        margin: -44% 0 0 -44%;
        opacity: 0;
      }
    }
    .uil-ripple-css {
      background: none;
      position: relative;
      width: 200px;
      height: 200px;
    }
    .uil-ripple-css div {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: 0;
      width: 0;
      height: 0;
      opacity: 0;
      border-radius: 50%;
      border-width: 12px;
      border-style: solid;
      -ms-animation: uil-ripple 2s ease-out infinite;
      -moz-animation: uil-ripple 2s ease-out infinite;
      -webkit-animation: uil-ripple 2s ease-out infinite;
      -o-animation: uil-ripple 2s ease-out infinite;
      animation: uil-ripple 2s ease-out infinite;
    }
    .uil-ripple-css div:nth-of-type(1) {
      border-color: #1d1d1d;
    }
    .uil-ripple-css div:nth-of-type(2) {
      border-color: #ff1900;
      -ms-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -webkit-animation-delay: 1s;
      -o-animation-delay: 1s;
      animation-delay: 1s;
    }
     </style> <div class='uil-ripple-css' style='transform:scale(1);'><div></div><div></div></div>

    ";
    (LoadingMarginTop = function(){
        $('#loading').css({
            'marginTop': ($('#content').height() - $('#loading').height())/2+'px'
        });
    })();
    window.addEventListener("load", LoadingMarginTop);
    window.addEventListener("resize", LoadingMarginTop);

    var strUrlHash;
    //Проверка на якорь
    if(!state)
        if(location.hash.slice(1)=="")
            strUrlHash = null;
        else
            return;
    else strUrlHash = state.page;
    //Проход по таблице маршрутизации
/*    $.getJSON("!app/js/routersDB.json", function(jsonRouters){
        for(var i = 0; i<jsonRouters.List.length; i++)
            if(location.pathname.slice(1)==jsonRouters.List[i].UrlHash){
                //if(strCurLoc!=jsonRouters.List[i].FromLoc){
                //   exit_n();
                //}
                //else{}
                //  exit();
                document.querySelector('title').innerHTML = jsonRouters.List[i].Title;
                $('#content').css({
                    'filter': 'grayscale(0%)',
                    '-webkitFilter':'grayscale(0%)'
                });
                $('#content').load(jsonRouters.List[i].ContentLink);
            }
    });*/
}

//изменение поля адреса

var update = function(){
    var strHashRef;
    //Проверка на якорь
    if(strCurLoc!= strSiteDomen && location.hash.slice(1)=="")
        strHashRef = location.pathname.slice(1);
    else
        strHashRef = location.hash.slice(1);
    var state = {
        page:strHashRef
    };
    history.pushState(state,'',state.page);
    updateState(state);
}

window.addEventListener("hashchange", update);
window.addEventListener("load", update);

//Ссылки навигации и переходы по истории

$('a.nav').bind("click", function(e){
    var state = {
        page: e.target.getAttribute("href")
    };
    history.pushState(state,'',state.page);
    updateState(state);
    e.preventDefault();
});

window.addEventListener('popstate', function(e){updateState(e.state);});