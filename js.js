//~ alert("Вот!");

window.onload = start();

function start(){
	alert("Вот!");
	var obj = document.getElementById("s1");
	obj.classList.add("s1-move");

	var obj = document.getElementById("s2");
	obj.classList.add("s2-move");

	var obj = document.getElementById("s3");
	obj.classList.add("s3-move");

}

