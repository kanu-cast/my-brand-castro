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
emailForm.addEventListener('change', function(evt){
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
firstNameForm.addEventListener('change', function(evt){
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
lastNameForm.addEventListener('change', function(evt){
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