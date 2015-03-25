;var oRouters, sCurLoc = location.toString(),

(function(){
	$.getJSON("https://fyodrik.github.io/!app/js/routersDB.json",function(data){
		oRouters = data;
	})
})();

for(var i = 0; i<oRouters.List.length; i++)
		if(sCurLoc==oRouters.Listc.FullLink){
			location = oRouters.List[i].FromLoc+"#"+oRouters.List[i].UrlHash;
		}
