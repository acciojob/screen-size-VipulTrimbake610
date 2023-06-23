//your JS code here. If required.
const body = document.body;
const w = window.getComputedStyle(body);
console.log(w.width);

body.addEventListener("resize",function(){
	console.log("hello");
})


