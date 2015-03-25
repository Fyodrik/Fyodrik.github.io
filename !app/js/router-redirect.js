var sCurLoc = location.toString();

function locRedirect(oRouters){
	for(var i = 0; i<oRouters.List.length; i++)
		if(sCurLoc==oRouters.List[i].FullLink){
			location = oRouters.List[i].FromLoc+"#"+oRouters.List[i].UrlHash;
		}
}

$.getJSON("!app/js/routersDB.json",function(data){
		locRedirect(data)
	})