var sCurLoc = location.toString();

function locRedirect(oRouters){
	for(var i = 0; i<oRouters.List.length; i++)
		alert(sCurLoc==oRouters.List[i].FullLink);
		if(sCurLoc==oRouters.List[i].FullLin){
			alert("YE!");
			// location.href = oRouters.List[i].FromLoc+"#"+oRouters.List[i].UrlHash;
		}
}

$.getJSON("!app/js/routersDB.json",function(data){
		locRedirect(data)
	})