function getQuery(){
	var search = window.location.search;
	$(".iFramePage").attr("src", $(".iFramePage").attr("src")+search);
	window._globalQuery = search
}


window.getQuery = getQuery;