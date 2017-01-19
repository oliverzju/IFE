window.onload = initAll;

var adImages = ["1.jpg", "2.jpg", "3.jpg"];
var urls = ["baidu", "sina", "qq"]
var adIndex = 0;

function rotate() {
	if (adIndex == adImages.length) {
		adIndex = 0;
	}
	document.images["banner"].src = adImages[adIndex++];
	setTimeout(rotate, 3000);
}

function initAll() {
	document.images["banner"].parentNode.onclick = newLocation;
	adIndex = Math.floor(Math.random() * adImages.length);
	rotate();
}

function newLocation() {
	document.location.href = "http://" + urls[adIndex] + ".com";
	return false;
}