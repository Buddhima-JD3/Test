//upon clicking not having account
function toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	document.getElementById('login').style.display='block'	
	var login = document.getElementById('login');
	login.classList.toggle('active');
}

//upon submission checking the entered passwords
function checkPassword(){
	if(document.getElementById("pwd").value != document.getElementById("rpwd").value){
		alert("Passwords mismateched!!!");
		return false;
	}
	else{
		alert("Passwords matched, Submition Successful!!!");
		window.location="../html/WorkwithUs.html"
		return true;
	}
}
//to enable submit button
function enableButton(){
		if(document.getElementById("policy").checked){
			document.getElementById("btn1").disabled =false;
		}
		else{
			document.getElementById("btn1").disabled =true;
		}
}

function Submission(){
	alert("Submition Successful!!!");
}

function trypassword(){
	var pw1 = document.getElementById("pw").value;
	if(pw1 === "admin"){
		window.location.href = "../Admin.php";
		alert("correct Login");
		
	}
	else{
	alert("Incorrect Login");
	}
}