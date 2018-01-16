function login1() {
	var email=document.getElementById('email').value;
	var pass=document.getElementById('pass').value;
	if ((email.length==0) || pass.length==0) {
		alert("please enter email & pass");
	}
	else{
		alert ("success");
	}
}

function register1() {
	alert("working register");
	var username=document.getElementById('username').value;
	var email=document.getElementById('remail').value;
	var pass=document.getElementById('rpass').value;
	var conpass=document.getElementById('rconpass').value;
	
	if ((username.length==0) || email.length==0 || pass.length==0 || conpass.length==0) {
		alert("please fill the fields");
	}
	else if (conpass!=pass) {
		alert("entered comfirm pass doesnot match the pass");
	}
	else{
		alert ("you successfully registered. go and use login creditionals");
		window.location="#loginsection";
	}
}