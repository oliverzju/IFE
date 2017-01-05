function posterOnHover(obj) {
	obj.getElementsByTagName("img")[0].style.top = "52px";
	obj.getElementsByTagName("p")[0].style.top = "-352px";
	obj.getElementsByTagName("p")[0].style.left = "15px";
	obj.getElementsByTagName("p")[0].style.fontWeight = "bold";
	obj.getElementsByTagName("p")[0].style.letterSpacing = "41px";
	obj.getElementsByTagName("p")[1].style.top = "-352px";
}

function posterReset(obj) {
	obj.getElementsByTagName("img")[0].style.top = "0";
	obj.getElementsByTagName("p")[0].style.top = "0";
	obj.getElementsByTagName("p")[1].style.top = "0";
	obj.getElementsByTagName("p")[0].style.left = "0";
	obj.getElementsByTagName("p")[0].style.fontWeight = "normal";
	obj.getElementsByTagName("p")[0].style.letterSpacing = "0";
	obj.getElementsByTagName("p")[1].style.top = "0";
}