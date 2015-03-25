;var oRouters, sCurLoc = location.toString();

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

	alert("Update state! = "+sUrlHash);

	for(var i = 0; i<oRouters.List.length; i++)
		if(sUrlHash==oRouters.List[i].UrlHash){
			if(sCurLoc!=oRouters.List[i].FromLoc){
				// exit_n();
			}
			else
				// exit();
			$('#content').load(oRouters.List[i].ContentLink);
			return;
		}
	// location = a = "https://fyodrik.github.io/"+sUrlHash;
}

//изменение поля адреса

var update = function(){
	var sHashRef = location.hash.slice(1),
		state ={
			page:sHashRef
		};
	alert(sHashRef);
	return;
	history.pushState(state,'',state.page);
	updateState(state);
}

// window.addEventListener("hashchange", update);
window.addEventListener("load", update);



//Ссылки навигации и переходы по истории

$('a.nav').bind("click", function(e){
	var state ={
		page:e.target.getAttribute("href")
	}
	alert("Nav, ref = "+state.page);
	history.pushState(state,'',state.page);
	updateState(state);
	e.preventDefault();
});

window.addEventListener('popstate', function(e){updateState(e.state);});