//your JS code here. If required.
const div = document.getElementById("sizeInfo");
const h1 = document.getElementsByTagName("h1")[0];


window.addEventListener("resize",function(){
	div.style.width = window.innerWidth;
	div.style.height = window.innerHeight;
	
	h1.innerHTML = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
})


