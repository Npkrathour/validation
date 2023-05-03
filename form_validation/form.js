function validation() {
    var fname= document.getElementById("fname").value;
    var lname= document.getElementById("lname").value;
    var email= document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var address= document.getElementById("address").value;

    if (fname == "") {
        document.getElementById("firstName").innerHTML="** Please Enter your FirstName";
        return false;
    }
    if ((fname.length<=2) || (fname.lenght>20)) {
        document.getElementById("firstName").innerHTML="** Please Enter 2 and 20 character";
        return false;
    }
    if(!isNaN(fname)){
        document.getElementById('firstname').innerHTML =" ** only characters are allowed";
        return false;
    }
    if (lname == "") {
        document.getElementById("LastName").innerHTML="** Please Enter your LastName";
        return false;
    }
    if ((lname.length<=2) || (lname.lenght>20)) {
        document.getElementById("LaststName").innerHTML="** Please Enter 2 and 20 character";
        return false;
    }
    if(!isNaN(lname)){
        document.getElementById('Lastname').innerHTML =" ** only characters are allowed";
        return false;
    }
    // Email Validation
    if(email == ""){
        document.getElementById('userEmail').innerHTML =" ** Please fill the email idx` field";
        return false;
    }
    if(email.indexOf('@') <= 0 ){
        document.getElementById('userEmail').innerHTML =" ** @ Invalid Position";
        return false;
    }

    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('userEmail').innerHTML =" ** . Invalid Position";
        return false;
    }
      //  Password validation
     if (pass == "") {
        document.getElementById("password").innerHTML="** Please Enter your password";
        return false;
    }
    if ((pass.length<=5) || (pass.lenght>20)) {
        document.getElementById("password").innerHTML="** minimum length of 5 character";
        return false;
    } 
   
    if (pass!=cpass) {
        document.getElementById("password").innerHTML="** Password are not matching";
        return false;
    }
    // confrim password
    if (cpass == "") {
        document.getElementById("cpassword").innerHTML="** Please Enter your password";
        return false;
    }
    // Mobile NUmber
    
	if(mobileNumber == ""){
		document.getElementById('Number').innerHTML =" ** Please fill the mobile NUmber field";
		return false;
	}
	if(isNaN(mobileNumber)){
		document.getElementById('Number').innerHTML =" ** user must write digits only not characters";
		return false;
	}
	if(mobileNumber.length!=10){
		document.getElementById('Number').innerHTML =" ** Mobile Number must be 10 digits only";
		return false;
	}
    // Address validation
    if (address == "") {
        document.getElementById("userAddress").innerHTML="required feild";
        return false;
    }
    if (message == "") {
        document.getElementById("Message").innerHTML="required feild";
        return false;
    }

   
}