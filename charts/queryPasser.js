function getQuery(url){
	var search = window.location.search;
	$(".iFramePage").attr("src", $(".iFramePage").attr("src")+search);
	window._globalQuery = search;
	window.alert(url);
}


window.getQuery = getQuery;