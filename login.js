function validate()
{
	var username=document.getElementById("ename").value;
	var password=document.getElementById("epwd").value;
	var pattern="[a-z A-Z 0-9.,%&+-*_]+@[a-z A-Z 0-9.,%&+-*_]+\.[a-z]{2,3}$";

	if(username.length==0 && password==0)
	{
		document.getElementById("error").value="username and password are mandatory";
		return false;
	}
	else if(username!=pattern)
	{
		alert("Username must be in a form of something@something.com");
	}

	else if(username== "shanisha@email.com" && password=="shanisha123")
		{
			alert("successfully logged in by " +username);
			window.location="home.html";
		}
		else{

			alert("Invalid username or password");
			window.location="login.html";
		}
}