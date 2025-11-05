let txt1=document.getElementById("txt1");
let email=document.getElementById("email");
let number=document.getElementById("number");
let pass=document.getElementById("password");
let confirmPassword=document.getElementById("confirm-password");
const submitBtn=document.getElementById("submit-btn");
const horSpan=document.getElementById("hor");
const varSpan=document.getElementById("ver");
const hor1Span=document.getElementById("hor1");
const var1Span=document.getElementById("ver1");

varSpan.style.display="none";
horSpan.style.display="none";
var1Span.style.display="none";
hor1Span.style.display="none";

const regexNum=/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;
submitBtn.addEventListener("click",function(){
    if (pass.value.length < 8){
        window.alert("Minimum length for password is 8.");
    }
    else if(pass.value !== confirmPassword.value){
        window.alert("Both password and confirm password should be same");
    }
    else if(!regexNum.test(pass.value)){
        window.alert("password should contain min one capital letter and min 1 special character");
    }
    else{
        varSpan.style.display="block";
        horSpan.style.display="block";
        var1Span.style.display="block";
        hor1Span.style.display="block";
    }
});
