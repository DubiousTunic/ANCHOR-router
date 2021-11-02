# ANCHOR-router
Lightweight jquery clientside router

With this you can make an entire SPA using a single HTML file plus an optional [nodejs] server file

Include Jquery (tested as low as 1.12.4)

1) Set the class of a to ANCHOR (make sure it is the first class)
2) Add another class to a, name it the same as your div partial (make sure it is the second class)
3) Create a div partial with that same second class name as the a (see sample)
4) Add class "ANCHOR_partial" to div partial(s)<br>
Now clicking the links changes the "page" (hides/shows the partials)! 

on page load:
ANCHOR.load();

manually route<br>
ANCHOR.route("#tree_frog" + "?param1=x")

check page<br>
if(ANCHOR.page() === "tree_frog){
}

//TODO: handling params, for now use ANCHOR.getParams()

route can come from the server<br>
$.post("/update", function(res){
  ANCHOR_route("#tree_frog" + "?param1=" + res.x)
})
  
for dynamically added ANCHOR links, use ANCHOR.buffer() after they are added...

See it here:
<a href="https://dubioustunic.github.io/ANCHORED/sample.html">Sample</a>
