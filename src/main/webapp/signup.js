/**
 * 
 */

 document.addEventListener("DOMContentLoaded",function (e)
{
	e.preventDefault()
var namespan = document.getElementById("namespan");
var mailspan = document.getElementById("mailspan");
var passspan = document.getElementById("pass-span");
var confirmspan = document.getElementById("confirm-span");

document.getElementById("submit-details").addEventListener("click", function (e) {
  e.preventDefault()
    //Name Validataion
    let reg = /^[a-zA-Z0-9]+$/;
    let ename = document.getElementById("name").value.trim();
    if (ename == "") {
      namespan.textContent = "*Please enter your username";
      namespan.style.color = "orange";
      namespan.style.fontSize = "12px";
    } else if (!reg.test(ename)) {
      namespan.textContent = "**Please Enter a valid user name";
      namespan.style.color = "orange";
      namespan.style.fontSize = "12px";
    } else {
      namespan.textContent = "";
    }

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
  ename != "" &&
  reg.test(ename) &&
  mail != "" &&
  reg1.test(mail) &&
  password1 != "" &&
  reg2.test(password1) &&
  password1 === confirmpassword
) {
  alert("SignUp Successful!!!");
  document.getElementById("login-form").submit(); // <- Important
}

    
  });


})