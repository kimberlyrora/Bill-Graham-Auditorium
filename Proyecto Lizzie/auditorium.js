document.getElementById("email").style.display = "none";
document.getElementById("lastName").style.display = "none";
document.getElementById("secondBtn").style.display = "none";
document.getElementById("lastNameId").style.display = "none";
document.getElementById("emailId").style.display = "none";
document.getElementById("thirdId").style.display = "none";

document.getElementById("secondAlert").style.display = "none";
document.getElementById("thirdAlert").style.display = "none";
document.getElementById("fourthAlert").style.display = "none";
document.getElementById("firstBtn").addEventListener("click", () => {
	document.getElementById("name").style.display = "none";
	document.getElementById("firstBtn").style.display = "none";
	document.getElementById("lastName").style.display = "inline";
	document.getElementById("secondBtn").style.display = "inline";
	document.getElementById("lastNameId").style.display = "inline";
	document.getElementById("nameCompleted").innerHTML = document.getElementById("nameId").value;

});
document.getElementById("secondBtn").addEventListener("click", () => {
	document.getElementById("lastName").style.display = "none";
	document.getElementById("email").style.display = "inline";
	document.getElementById("alertName").style.display = "none";
	document.getElementById("emailId").style.display = "inline";
	document.getElementById("thirdId").style.display = "inline";
	document.getElementById("secondAlert").style.display = "block";
	document.getElementById("thirdAlert").style.display = "block";
	document.getElementById("fourthAlert").style.display = "block";
});
document.getElementById("blockNone").style.display = "none";
document.getElementById("thirdId").addEventListener("click", () => {
	document.getElementById("blockNone").style.display = "block";
	document.getElementById("blockOne").style.display = "none";
});