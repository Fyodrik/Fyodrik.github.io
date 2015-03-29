;var oRouters, sCurLoc = location.toString(), hostdomen = "https://fyodrik.github.io/";

(function(){
	$.getJSON("!app/js/routersDB.json",function(data){
		oRouters = data;
	});
})();

//Обновление состояния

var updateState = function(state){
	var sUrlHash;
	if(!state)
		if(location.hash.slice(1)=="")
			sUrlHash = null;
		else
			return;
	else sUrlHash = state.page;
	do{
		if(oRouters)
			for(var i = 0; i<oRouters.List.length; i++){
				if(location.pathname.slice(1)==oRouters.List[i].UrlHash){
					if(sCurLoc!=oRouters.List[i].FromLoc){
						// exit_n();
					}
					else{}
						// exit();
					err404=false;
					document.querySelector('title').innerHTML = oRouters.List[i].Title;
					$('#content').load(oRouters.List[i].ContentLink);
					return;
				}
			}
		else{}
	}while(!oRouters)
	if(!err404)
		location = a = hostdomen+location.pathname.slice(1);
}

//изменение поля адреса

var update = function(){
	if(err404) return;
	var sHashRef;
	if(sCurLoc!= hostdomen && location.hash.slice(1)==""){
		sHashRef = location.pathname.slice(1);
	}
	else{
		sHashRef = location.hash.slice(1);
	}
	var state ={
			page:sHashRef
		};
	history.pushState(state,'',state.page);
	updateState(state);
}

window.addEventListener("hashchange", update);
window.addEventListener("load", update);



//Ссылки навигации и переходы по истории

$('a.nav').bind("click", function(e){
	var state ={
		page:e.target.getAttribute("href")
	}
	history.pushState(state,'',state.page);
	updateState(state);
	e.preventDefault();
});

window.addEventListener('popstate', function(e){updateState(e.state);});