var oRouters, sCurLoc = location.toString();

function getJSON(oRouters){
	$.getJSON("!app/js/routersDB.json",function(data){
		oRouters = data;
	})
}

function locRedirect(){
	alert(oRouters);
	alert(oRouters.List);
	alert(oRouters.List.length);
	alert(oRouters.List[0]);
	for(var i = 0; i<oRouters.List.length; i++)
			alert("REPEAT");
			alert(oRouters);
			alert(oRouters.List);
			alert(oRouters.List.length);
			alert(oRouters.List[0]);
			alert("iF");
			alert(sCurLoc==oRouters.List[i].FullLink);
			if(sCurLoc==oRouters.List[i].FullLink){
				alert("YE!");
				alert(oRouters.List[i].FullLink);
				// location = oRouters.List[i].FromLoc+"#"+oRouters.List[i].UrlHash;
			}
}

getJSON(oRouters);
alert(sCurLoc==oRouters.List[i].FullLink);
locRedirect();