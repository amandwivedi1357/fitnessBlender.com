let form=document.querySelector("form");
let signupLS = JSON.parse(localStorage.getItem("signup"))||[];
form.addEventListener("submit",function(e){
    e.preventDefault();
//     login(signupLS);
// })

// function login(signupLS){
    
    console.log("hello")
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
    console.log("hello there")
       if(ele.uName==obj.username&&ele.password==obj.password){
         isSignedin=true;
         console.log("in if")
       }
 })   
 if(isSignedin==false)
 {
     alert("Wrong credentials");
 }
 else{
    localStorage.setItem("signin",JSON.stringify(signupLS));
    alert("signin successfull")
 }
})
