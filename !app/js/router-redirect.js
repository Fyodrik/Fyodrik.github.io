;var oRouters, sCurLoc = location.toString();

(function(){
	$.getJSON("!app/js/routersDB.json",function(data){
		oRouters = data;
	})
})();

(function(){
	alert(oRouters.toString());
	alert(oRouters.List.toString());
	alert(oRouters.List.length);
	alert(oRouters.List[0].toString());
	for(var i = 0; i<oRouters.List.length; i++)
			if(sCurLoc==oRouters.List[i].FullLink){
				alert("YE!");
				// location = oRouters.List[i].FromLoc+"#"+oRouters.List[i].UrlHash;
			}
})();
