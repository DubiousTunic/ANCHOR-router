# ANCHORED-Router
Lightweight jquery clientside router

1) Set the class of <a> to anch_link
2) Add another class to <a>, name it the same as your div partial
3) Create a div partial with that same second class name as the <a> (see sample)

to change the params change the "rel" tag of the a element
$(".poison_dart_frog").attr("rel", "?param1=a&param2=b&param3=c")

params can come from the server
$.post("/serverRoute", function(res){
  $(".poison_dart_frog").attr("rel", res.params)	
})
