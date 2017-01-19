window.onload = init;

var imgPath = ["img1.jpg", "img2.jpg", "img3.jpg"];
var index = 0;

function init() {
	preNode = document.getElementsByClassName("pre")[0];
	nextNode = document.getElementsByClassName("next")[0];
	preNode.onclick = function() {
		if (timer) clearInterval(timer);
		slidePre();
		timer = setInterval(slideNext, 2000);
	}
	nextNode.onclick = function() {
		if (timer) clearInterval(timer);
		slideNext();
		timer = setInterval(slideNext, 2000);
	}

	navNode = document.getElementById("page_nav");
	for (var i = 0; i < imgPath.length; i++) {
		navNode.appendChild(document.createElement("li"));
		(function(id) {
			navNode.children[id].onclick = function() {
				if (timer) clearInterval(timer);
				index = id;
				slideNext();
				timer = setInterval(slideNext, 2000);
			}
		}(i));
	}

	slideNext();
	timer = setInterval(slideNext, 2000);
}

function gotoIndex() {
	var imgNode = document.getElementById("content");
	imgNode.src = imgPath[index];
	for (var i = 0; i < imgPath.length; i++) {
		navNode.children[i].className = i == index ? "active" : "";
	}
}

function slideNext() {
	gotoIndex();
	index++;
	if (index >= imgPath.length) index = 0;
}

function slidePre() {
	gotoIndex()
	index--;
	if (index < 0) index = imgPath.length - 1;
}