
// ================= SIGNUP FORM VALIDATION ===============

//// state 
let firstName = '';
let lastName = '';
let userEmail ='';
let password = '';

/// name validation here
function validateName(name) {
    var regex = /^[a-zA-Z]{2,30}$/;
    return regex.test(name);
}

/// email validation here
const checkIsEmail = (userEmail)=>{
    return String(userEmail)
        .toLowerCase()
        .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

function validatePassword(passsword){
    var regex = /^[a-zA-Z\s]{2,15}$/;
    return String(passsword).match(regex);
}
// ================== FORM VALIDATION ================
var emailForm = document.querySelector('.email');
var emailErrorBox = document.querySelector('.email-error-box');

var firstNameForm = document.querySelector('.first_name');
var firstNameErrorBox = document.querySelector('.firstName-error-box');

var lastNameForm = document.querySelector('.last_name');
var lastNameErrorBox = document.querySelector('.lastName-error-box');

var passswordForm = document.querySelector('.password');
var passswordErrorBox = document.querySelector('.password-error-box');

//// Event Listeners
emailForm.addEventListener('keyup', function(evt){
    console.log('this is log', evt.target.value);
    const { value } = evt.target;
    if(!checkIsEmail(value)){
        emailForm.classList.add('b-2px-red');
        emailErrorBox.classList.remove('d-lg-none');
        return;
    }
    emailForm.classList.remove('b-2px-red');
    emailErrorBox.classList.add('d-lg-none');
    return userEmail = checkIsEmail(value)[0];
});
//// Event Listeners
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
//// Event Listeners
firstNameForm.addEventListener('keyup', function(evt){
    console.log('this is log', evt.target.value);
    const { value } = evt.target;
    if(!validateName(value)){
        firstNameForm.classList.add('b-2px-red');
        firstNameErrorBox.classList.remove('d-lg-none');
        return;
    }
    firstNameForm.classList.remove('b-2px-red');
    firstNameErrorBox.classList.add('d-lg-none');
    return firstName = value;
});
//// Event Listeners
lastNameForm.addEventListener('keyup', function(evt){
    console.log('this is log', evt.target.value);
    const { value } = evt.target;
    if(!validateName(value)){
        lastNameForm.classList.add('b-2px-red');
        lastNameErrorBox.classList.remove('d-lg-none');
        return;
    }
    lastNameForm.classList.remove('b-2px-red');
    lastNameErrorBox.classList.add('d-lg-none');
    return lastName = value;
});

////// Handing Form Submit & Sending Request
const signupForm = document.querySelector("form[name=signupForm]");
var myBtn = document.querySelector(".signup-btn");

signupForm.addEventListener('submit', async function(evt){
    evt.preventDefault();
    if(validateName(firstName) && validateName(lastName) && checkIsEmail(userEmail) && password.length > 3){
        const response = await sendRequest();
        const { status, msg } = response;
        if(response.msg && response.token){
            // Setting User Tracking Info
            localStorage.setItem('token', response.token);
            localStorage.setItem('currentUser', response.user._id);
            localStorage.setItem('role', response.user.role);
            localStorage.setItem('firstName', response.user.firstName);
            localStorage.setItem('lastName', response.user.lastName);
            // Diplaying Toast Message 
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
                window.location.href = './blogs.html';
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
            `https://mybrand-api-p02i.onrender.com/api/auth/signup`,
            {firstName, lastName, password, email:userEmail},
            {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        return data;
    }catch(error){
        console.error(error);
        Toastify({
            text: error.response.data.error.details[0].message || "Email already in use",
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
};