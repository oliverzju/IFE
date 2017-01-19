window.onload = initForms;

function initForms() {
	for (var i = 0; i < document.forms.length; i++) {
		document.forms[i].onsubmit = validForms;
	}
}

function validForms() {
	var allGood = true;
	var allTags = document.getElementsByTagName("*");

	for (var i = 0; i < allTags.length; i++) {
		if (!validTag(allTags[i])) {
			allGood = false;
		}
	}

	return allGood;

	function validTag(thisTag) {
		var outClass = "";
		var allClasses = thisTag.className.split(" ");

		for (var j = 0; j < allClasses.length; j++) {
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}

		thisTag.className = outClass;

		if (outClass.indexOf("invalid") > -1) {
			thisTag.focus();
			if (thisTag.nodeName == "INPUT") {
				thisTag.select();
			}
			return false;
		}

		return true;

		function validBasedOnClass(thisClass) {
			var classBack = "";

			switch (thisClass) {
				case "":
				case "invalid":
					break;
				case "reqd":
					if (allGood && thisTag.value == "") {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "email":
					if(allGood && !validEmail(thisTag.value))
						classBack = "invalid";
					break;
				default:
					classBack += thisClass;
					break;
			}
			return classBack;
		}

		function validEmail (email) {
			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return re.test(email);
					}
	}
}