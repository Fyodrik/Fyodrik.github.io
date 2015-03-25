;var oRouters,
	sCurLoc = location.toString(),
	domNAV= document.querySelector(".nav");

(function(){
	$.getJSON("!app/js/routersDB.json",function(data){
		oRouters = data;
	});
})();

var updateState = function(state){
	if(!state) return;
	var sUrlHash = state.page;

	for(var i = 0; i<oRouters.List.length; i++)
		if(sUrlHash==oRouters.List[i].UrlHash){
			if(sCurLoc!=oRouters.List[i].FromLoc){
				// exit_n();
			}
			else
				// exit();
			$('#content').load(oRouters.List[i].ContentLink,function(){});
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

window.addEventListener("hashchange", update);
window.addEventListener("load", update);

domNAV.addEventListener("click", function(e){
	alert("test");
	var state;
	if (e.target.tagName !== 'A') return;
	state ={
		page:e.target.getAttribute("href")
	}
	history.pushState(state,'',state.page);
	updateState(state);
	e.preventDefault();
});