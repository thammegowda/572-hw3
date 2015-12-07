function getQuery(_class, url){
	var search = window.location.search;
	$(_class).attr("src", $(_class).attr("src")+url);
	window._globalQuery = url;
	window.alert(window._globalQuery);
}


window.getQuery = getQuery;