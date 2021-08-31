//open source lightweight jquery clientside router

$(document).ready(function(){
	$(".partial").hide();

	//routes the path on load
	route(window.location.pathname + window.location.hash + window.location.search)

	$(".anch_link").click(function(e){
		e.preventDefault();
		route("#" + anchorPath($(this)) + anchorParams($(this)))
	})

})

function hidePartial(){
	$(".partial").hide();
}

function getLink(origin){
	var params = origin.split("?")
	var path = params[0].split("#");
	return {
		path : path[1],
		params : params
	}
}

function route(origin){
	console.log("INITIALIZE ORIGIN " + origin);
	hidePartial();
	var link = getLink(origin);			
	history.pushState(origin, '', origin)
	router(link.path, link.params)			
}

window.addEventListener('popstate', function(event){
	var origin = event.state;

	//route(path);
	if(origin !== null){	
		var link = getLink(origin);
		hidePartial();
		router(link.path, link.params);		
	}									
})

function anchorPath(href){
	return href.attr("class").split(/\s+/)[1];
}

function anchorParams(href){
	return href.attr("rel");
}

//make back/forward work

//main router fn
function router(path, params){
	$("div." + path).show();

	//display path, params in url
}
