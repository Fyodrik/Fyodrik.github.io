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

	for(var i = 0; i<oRouters.List.length; i++){
		alert(sUrlHash+" ?= "+oRouters.List[i].UrlHash);
		alert(location.pathname.slice(1)==oRouters.List[i].UrlHash);
		if(location.pathname.slice(1)==oRouters.List[i].UrlHash){
			alert("Fined!");
			if(sCurLoc!=oRouters.List[i].FromLoc){
				// exit_n();
			}
			else{}
				// exit();
			$('#content').load(oRouters.List[i].ContentLink);
			alert("Update is "+oRouters.List[i].ContentLink);
			return;
		}
	}
	var a = "https://fyodrik.github.io/"+sUrlHash;
	if(location!=a)
		location = a;
}

//изменение поля адреса

var update = function(){
	if(!err404) return;
	var sHashRef;
	if(sCurLoc!= "https://fyodrik.github.io/"&&location.hash.slice(1)==""){
		sHashRef = location.pathname.slice(1);
	}
	else{
		sHashRef = location.hash.slice(1);
	}
	var state ={
			page:sHashRef
		};
	alert(sHashRef);
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
	alert("Nav, ref = "+state.page);
	history.pushState(state,'',state.page);
	updateState(state);
	e.preventDefault();
});

window.addEventListener('popstate', function(e){updateState(e.state);});