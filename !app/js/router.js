;var oRouters, sCurLoc = location.toString();

(function(){
	$.getJSON("!app/js/routersDB.json",function(data){
		oRouters = data;
	});
})();

var updateState = function(state){
	if(!state) return;
	var sUrlHash = state.page;
	alert("Update state!");
	for(var i = 0; i<oRouters.List.length; i++)
		if(sUrlHash==oRouters.List[i].UrlHash){
			if(sCurLoc!=oRouters.List[i].FromLoc){
				// exit_n();
			}
			else
				// exit();
			$('#content').load(oRouters.List[i].ContentLink,function(){});
			return;
		}
}

window.addEventListener('popstate', function(e){updateState(e.state);});

var update = function(){
	var sHashRef = location.hash.slice(1),
		state ={
			page:sHashRef
		};
	history.pushState(state,'',state.page);
	updateState(state);
}

// window.addEventListener("hashchange", update);
// window.addEventListener("load", update);

$('a.nav').bind("click", function(e){
	var state ={
		page:e.target.getAttribute("href")
	}
	alert("Nav, ref = "+state.page);
	history.pushState(state,'',state.page);
	updateState(state);
	e.preventDefault();
});