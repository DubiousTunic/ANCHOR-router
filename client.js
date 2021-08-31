//open source lightweight jquery clientside router

$(document).ready(function(){
	$(".partial").hide();

	$(".anch_link").click(function(e){
		e.preventDefault()
		console.log($(this).attr("id"));
		var anchorClass = getAnchorClass($(this));
		router(anchorClass)
	})

})

function getAnchorClass(href){
	return href.attr("class").split(/\s+/)[1];
}

function router(anchorClass){
	$(".partial").hide();
	$("div." + anchorClass).show();
}
