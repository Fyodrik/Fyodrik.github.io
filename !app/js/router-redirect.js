var sCurLoc = location.toString();

function locRedirect(oRouters){
	for(var i = 0; i<oRouters.List.length; i++)
		if(sCurLoc==oRouters.List[i].FullLink){
			var a = oRouters.List[i].FromLoc+"#"+oRouters.List[i].UrlHash;
			alert(a);
			location = a;
		}
}

$.getJSON("!app/js/routersDB.json",function(data){
		locRedirect(data)
	})