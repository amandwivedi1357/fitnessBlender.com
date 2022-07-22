let form = document.querySelector("form");
   let signupLS=JSON.parse(localStorage.getItem("signup"))||[];
   form.addEventListener("submit",function(e){
    e.preventDefault();
        obj={
            fname:form.firstname.value,
            lname:form.lastname.value,
            email:form.email.value,
            uName:form.username.value,
            password:form.password.value,
            cPassword:form.confirm.value
        }
        if(obj.fname==""||obj.email==""||obj.password==""){
            alert("field empty")
            return
        }
        else{
        signupLS.push(obj);
        localStorage.setItem("signup",JSON.stringify(signupLS))
        alert("signup successfull");
        // location.href="Login.html"
        }
   })