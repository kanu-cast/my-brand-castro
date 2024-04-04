
let userEmail="";
let password = '';

// ================== FORM VALIDATION ================

var signinForm = document.querySelector('.email');
var errorBox = document.querySelector('.error-box');

var passswordForm = document.querySelector('.password');
var passswordErrorBox = document.querySelector('.password-error-box');

/// validation here
const checkIsEmail = (userEmail)=>{
    return String(userEmail)
        .toLowerCase()
        .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}
function validatePassword(passsword){
    var regex = /^[a-zA-Z\s]{2,15}$/;
    return String(passsword).match(regex);
}
//// eventlistener
signinForm.addEventListener('keyup', function(evt){
    const { value } = evt.target;
    if(!checkIsEmail(value)){
        signinForm.classList.add('b-2px-red');
        errorBox.classList.remove('d-lg-none');
        return emailError = "That's not a valid Email sebo";
    }
    signinForm.classList.remove('b-2px-red');
    errorBox.classList.add('d-lg-none');
    return userEmail = checkIsEmail(value)[0];
});

/// eventlistener
passswordForm.addEventListener('keyup', function(evt){
    const { value } = evt.target;
    if(!validatePassword(value)){
        passswordForm.classList.add('b-2px-red');
        passswordErrorBox.classList.remove('d-lg-none');
    }
    passswordForm.classList.remove('b-2px-red');
    passswordErrorBox.classList.add('d-lg-none');
    return password = value;

})

////// handing form submit and sending request

const signinForm = document.querySelector("form[name=signinForm]");
var myBtn = document.querySelector(".signup-btn");

signinForm.addEventListener('submit', async function(evt){
    evt.preventDefault();
    if(checkIsEmail(userEmail) && password.length > 3){
        const response = await sendRequest();
        const { status, msg } = response;
        if(response.msg && response.token){
            localStorage.setItem('token', response.token);
            localStorage.setItem('currentUser', response.user._id);
            localStorage.setItem('role', response.user.role);
            localStorage.setItem('firstName', response.user.firstName);
            localStorage.setItem('lastName', response.user.lastName);
            Toastify({
                text: msg,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                background: "#FFFFF"
                },
                onClick: function(){}
            }).showToast();
            setTimeout(()=>{
                if(response.user.role == 'admin'){
                    window.location.href = './dashboard.html';
                }else{
                    window.location.href = './blogs.html';      
                }
            }, 3000)
        }
    }else{
        Toastify({
            text: 'Please Fill in all require fields',
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
            background: "#e84949"
            },
            onClick: function(){}
        }).showToast();
    }   

});

const sendRequest = async()=>{
    try{
        const {data} = await axios.post(
            `https://mybrand-api-p02i.onrender.com/api/auth/signin`,
            {email:userEmail, password },
            {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        return data;
    }catch(error){
        console.log(error.response.data.error);
        Toastify({
            text: error.response.data.error || error.response.data.error.details[0].message,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
            background: "#e84949"
            },
            onClick: function(){}
        }).showToast();
        
    }
}