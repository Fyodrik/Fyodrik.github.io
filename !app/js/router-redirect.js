;var oRouters, sCurLoc = location.toString();

(function(){
	$.getJSON("!app/js/routersDB.json",function(data){
		oRouters = data;
	})
})();

(function(){
	alert(oRouters.List);
	for(var i = 0; i<oRouters.List.length; i++)
			if(sCurLoc==oRouters.List[i].FullLink){
				alert("YE!");
				// location = oRouters.List[i].FromLoc+"#"+oRouters.List[i].UrlHash;
			}
})();
