window.onload = initAll;

function initAll() {
	document.getElementById("reload").onclick = getNewCard;
	getNewCard();
}

var usedNums = new Array(76);

function getNewCard() {
	for (var i = 0; i < usedNums.length; i++) {
		usedNums[i] = false;
	}
	for (var i = 0; i < 24; i++) {
		setSquare(i);
	}
	return false;
}

function setSquare(index) {
	var currSquare = "square" + index;
	var colPlace = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4);
	var newNum;
	do {
		newNum = colPlace[index] * 15 + Math.floor(Math.random() * 15) + 1;
	} while (usedNums[newNum]);
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
	document.getElementById(currSquare).className = "";
	document.getElementById(currSquare).onmousedown = toggleColor;
	document.getElementById(currSquare).onselectstart = function() {
		return false;
	}
}

function toggleColor(evt) {
	var thisSquare = evt.target;
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	} else {
		thisSquare.className = "";
	}
}