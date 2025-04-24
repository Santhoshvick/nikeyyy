/**
 * 
 */
let mailspan=document.getElementById("mail-span")
let passwordspan=document.getElementById("password-span")


document.getElementById("login1").addEventListener("click",function(e){
    e.preventDefault();

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


      let reg2 = /^[a-zA-Z0-9]+$/;
      let password1 = document.getElementById("password").value.trim();
      if (password1 == "") {
        passwordspan.textContent = "*Please enter your Password";
        passwordspan.style.color = "orange";
        passwordspan.style.fontSize = "12px";
      } else if (!reg2.test(password1)) {
        passwordspan.textContent = "**Please Enter a valid password";
        passwordsspan.style.color = "orange";
        passwordsspan.style.fontSize = "12px";
      } else {
        passwordspan.textContent = "";
      }

      if (
        
        mail != "" &&
        reg1.test(mail) &&
        password1 != "" &&
        reg2.test(password1) ) {
        window.location.href = "index.html";
      }
})