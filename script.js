var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("LI");
var deleteBtns = document.getElementsByClassName("delete");
function listLength() {
	console.log(listItems.length);
	return listItems.length
}
function deleteBtn() {
	var btn  = document.createElement("BUTTON");
	var t = document.createTextNode("Delete");
    btn.appendChild(t);
    document.body.appendChild(btn);
}
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}
function checked(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}
for (i = 0; i < listLength(); i++ ) {
    var btn = document.createElement("button");
 		    btn.appendChild(document.createTextNode("Delete!"));
 		    listItems[i].appendChild(btn);
 		    btn.onclick = removeParent;
  	}

function inputLength() {
	return input.value.length;
}
function inputLength() {
	return input.value.length;
};

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value ="";
	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete!"));
		 li.appendChild(btn);
		 btn.onclick = removeParent;
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
	}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
ul.addEventListener("click", checked);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);