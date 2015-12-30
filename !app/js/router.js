// (C) 2015 Dmitry Fyodorov (aka Fyodrik)
// Router.js - браузерная маршрутизация для AJAX-подзагрузки
// Венгерская нотация
; var strCurLoc = location.toString(), strSiteDomen = "https://fyodrik.github.io/";

//Обновление состояния

var updateState = function(state){
    //AJAx LOADING
    $('#content').load("!app/loading.html");

    var strUrlHash;
    //Проверка на якорь
    if(!state)
        if(location.hash.slice(1)=="")
            strUrlHash = null;
        else
            return;
    else strUrlHash = state.page;
    //Проход по таблице маршрутизации
    $.getJSON("!app/js/routersDB.json", function(jsonRouters){
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
    });
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
    id = e.target.getAttribute("href");
    $('a.nav').css({
       'color': '#FFF'
    });
    $('#'+id).css({
       'color': 'rgb(255,25,0)'
    });
    var state = {
        page: id
    };
    history.pushState(state,'',state.page);
    updateState(state);
    e.preventDefault();
});

window.addEventListener('popstate', function(e){updateState(e.state);});