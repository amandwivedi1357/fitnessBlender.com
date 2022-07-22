let form=document.querySelector("form");
let signupLS = JSON.parse(localStorage.getItem("signup"))||[];
form.addEventListener("submit",function(e){
 e.preventDefault();
 if(signupLS.length==0){
     alert("No user exist");
     return
 }
 let obj ={
     username:form.username.value,
     password:form.password.value
 }
 let isSignedin=false;
 signupLS.forEach(function(ele){
       if(ele.username===obj.username&&ele.password===obj.password){
         isSignedin=true;
         localStorage.setItem("signin",JSON.stringify(ele));
         alert("signin successfull")
       }
 })   
 if(isSignedin==false)
 {
     alert("Wrong credentials");
 }
       
 });