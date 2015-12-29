// (C) 2015 Dmitry Fyodorov (aka Fyodrik)
// Router.js - браузерная маршрутизация для AJAX-подзагрузки
// Венгерская нотация
; var strCurLoc = location.toString(), strSiteDomen = "https://fyodrik.github.io/";

//Обновление состояния

var updateState = function(state){
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
				/*if(strCurLoc!=jsonRouters.List[i].FromLoc){
					// exit_n();
				}
				else{}
					// exit();
				err404=false;*/
				document.querySelector('title').innerHTML = jsonRouters.List[i].Title;
				$('#content').load(jsonRouters.List[i].ContentLink);
				return;return;
			}
	});
	//
	if(!err404)
		location = a = strSiteDomen+location.pathname.slice(1);
}

//изменение поля адреса

var update = function(){
	if(err404){
		updateState(state);
		return;
	} 
	var sHashRef;
	//Проверка на якорь
	if(strCurLoc!= strSiteDomen && location.hash.slice(1)=="")
		sHashRef = location.pathname.slice(1);
	else
		sHashRef = location.hash.slice(1);
	var state = {
		page:sHashRef;
	};
	history.pushState(state,'',state.page);
	updateState(state);
}

window.addEventListener("hashchange", update);
window.addEventListener("load", update);



//Ссылки навигации и переходы по истории

$('a.nav').bind("click", function(e){
	var state =	{
		page: e.target.getAttribute("href");
	};
	history.pushState(state,'',state.page);
	updateState(state);
	e.preventDefault();
});

window.addEventListener('popstate', function(e){updateState(e.state);});