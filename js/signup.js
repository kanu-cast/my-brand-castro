
// ================= SIGNUP FORM VALIDATION ===============

//// state 
let firstName = '';
let lastName = '';
let email = '';
let password = '';

/// name validation here
function validateName(name) {
    var regex = /^[a-zA-Z]{2,30}$/;
    return regex.test(name);
}

/// email validation here
const checkIsEmail = (email) =>{
    return String(email)
        .toLowerCase()
        .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

// ================== FORM VALIDATION ================
var emailForm = document.querySelector('.email');
var emailErrorBox = document.querySelector('.email-error-box');

var firstNameForm = document.querySelector('.first_name');
var firstNameErrorBox = document.querySelector('.firstName-error-box');

var lastNameForm = document.querySelector('.last_name');
var lastNameErrorBox = document.querySelector('.lastName-error-box');

//// eventlisteners
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
    return email = checkIsEmail(value)[0];
});

//// eventlisteners
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

//// eventlisteners
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

////// handing form submit and sending request

const myForm = document.querySelector("form[name=signupForm]");
var myBtn = document.querySelector(".signup-btn");

myForm.addEventListener('submit', async function(evt){
    evt.preventDefault();
    if(firstName && lastName && email && password){
        const response = await sendRequest();
        const { status, msg } = response;
        if(response && status == 201){
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

;})

const sendRequest = async()=>{
    try{
        const {data} = await axios.post(
            `https://mybrand-api-p02i.onrender.com/api/auth/signup`,
            {firstName, lastName, email, password },
            {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        alert(data.msg);
        return data;
    }catch(error){
        Toastify({
            text: error.response.data.error || error.message,
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