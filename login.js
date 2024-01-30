// ================== FORM VALIDATION ================
var signinForm = document.querySelector('.email');
var errorBox = document.querySelector('.error-box');

let emailError = '';
let passwordError = '';
let email = '';
let password = '';

/// validation here
const checkIsEmail = (email) =>{
    return String(email)
        .toLowerCase()
        .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

signinForm.addEventListener('change', function(evt){
    // alert('yup');
    console.log('this is log', evt.target.value);
    const { value } = evt.target;
    if(!checkIsEmail(value)){
        signinForm.classList.add('b-2px-red');
        errorBox.classList.remove('d-lg-none');
        return emailError = "That's not a valid Email sebo";
    }
    signinForm.classList.remove('b-2px-red');
    errorBox.classList.add('d-lg-none');
    return email = checkIsEmail(value)[0];
});
