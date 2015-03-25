function locRedirect(oRouters){
	for(var i = 0; i<oRouters.List.length; i++)
		if(sCurLoc==oRouters.List[i].FullLink){
			document.getElementById('err404Title').innerHTML = "Redirecting...";
			var a = oRouters.List[i].FromLoc+"#"+oRouters.List[i].UrlHash;
			location = a;
		}
}
alert(oRouters.List[0].UrlHash);
$.getJSON("!app/js/routersDB.json",function(data){
		locRedirect(data)
	})