
document.addEventListener("DOMContentLoaded",function (e)
		{
			e.preventDefault()
		var mailspan = document.getElementById("mailspan");
		var passspan = document.getElementById("passspan");
		var confirmspan = document.getElementById("confirmspan");

		document.getElementById("submit-details").addEventListener("click", function (e) {
		  e.preventDefault()
		    //Name Validataion
		    

		    //Email id Validation
		    let reg1 = /^[a-zA-Z0-9]+@gmail\.com$/;
		    let mail = document.getElementById("mail").value.trim();

		    if (mail == "") {
		      mailspan.textContent = "**Please enter your Email Id";
		      mailspan.style.color = "orange";
		      mailspan.style.fontSize = "12px";
		    } else if (!reg1.test(mail)) {
		      mailspan.textContent = "**Please enter valid  Email Id";
		      mailspan.style.color = "orange";
		      mailspan.style.fontSize = "12px";
		    } else {
		      mailspan.textContent = "";
		    }

		    //Password Validation
		    let reg2 = /^[a-zA-Z0-9]+$/;
		    let password1 = document.getElementById("password").value.trim();
		    if (password1 == "") {
		      passspan.textContent = "*Please enter your Password";
		      passspan.style.color = "orange";
		      passspan.style.fontSize = "12px";
		    } else if (!reg2.test(password1)) {
		      passspan.textContent = "**Please Enter a valid password";
		      passspan.style.color = "red";
		      passspan.style.fontSize = "12px";
		    } else {
		      passspan.textContent = "";
		    }

		    //Confirm password validation
		    let confirmpassword = document
		      .getElementById("confirmpassword")
		      .value.trim();

		    if (password1 != confirmpassword) {
		      confirmspan.textContent = "**Password mismatch";
		      confirmspan.style.color = "orange";
		      confirmspan.style.fontSize = "12px";
		    } else {
		      confirmspan.textContent = "";
		    }
		    if (
		    		  mail != "" &&
		    		  reg1.test(mail) &&
		    		  password1 != "" &&
		    		  reg2.test(password1) &&
		    		  password1 === confirmpassword
		    		) {
		    		  alert("Password Updates SuccessFully");
		    		  document.getElementById("login-form").submit(); // <- Important
		    		}

		   

		    
		  });


		})




 