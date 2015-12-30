// (C) 2015 Dmitry Fyodorov (aka Fyodrik)
// Router.js - браузерная маршрутизация для AJAX-подзагрузки
// Венгерская нотация
; var strCurLoc = location.toString(), strSiteDomen = "https://fyodrik.github.io/";

//Обновление состояния

var updateState = function(state){
    var strUrlHash = state.page;

    //Выделение пункта меню
    $('#nav-filter-menu li a').removeClass("nav-focus");
    $('#'+strUrlHash).addClass("nav-focus");

    //AJAX LOADING
    $('#content').load("!app/loading.html");

    
    //Проверка на якорь
    if(!state)
        if(location.hash.slice(1)=="")
            strUrlHash = null;
        else
            return;

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
                return;
            }
        document.querySelector('title').innerHTML = "404 Error";
        $('body').css({
            'filter': 'grayscale(100%)',
            '-webkitFilter':'grayscale(100%)'
        });
        document.getElementById("content").innerHTML = '<h1 class="title" style="text-align:center;width:100%;">Error 404. This resource is not available on the site.</h1>';
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
    var state = {
        page: e.target.getAttribute("href")
    };
    history.pushState(state,'',state.page);
    updateState(state);
    e.preventDefault();
});

window.addEventListener('popstate', function(e){updateState(e.state);});