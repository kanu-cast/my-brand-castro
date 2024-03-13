//fetch from local storage
const userToken = localStorage.getItem('token');
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
// get for document
const authStatus = document.querySelector('.auth-status');
const loginBtn = document.querySelector('.login-btn');
var logoutBtn = document.querySelectorAll('.logout');
const accountBtn = document.querySelector('.account');
const loginSmallStatus = document.querySelector('.login-sm-btn loginSmallStatus');
const userCredentials = document.querySelectorAll('.user-cred');
const userNames = document.querySelector('.user-names')
const accountPopup = document.querySelector('.account-popup');
// check if user is logged in
if(userToken){
    loginBtn.classList.add('d-lg-none');
    accountBtn.classList.remove('d-lg-none');
}else{
    loginBtn.classList.remove('d-lg-none');
    accountBtn.classList.add('d-lg-none');
}
// DOM manipulation
const fullNames = `${firstName +" " + lastName}`
userNames.innerHTML = fullNames.length > 20 ? fullNames.substring(0,20)+'...' : fullNames;
userCredentials.forEach((user, idx)=>{
    user.innerHTML = firstName.charAt(0)+lastName.charAt(0);
})

//  toggle account ppopup
authStatus.addEventListener('click', function(e){
    e.preventDefault();
    if(accountPopup.classList.contains('d-lg-none')){
        accountPopup.classList.remove('d-lg-none'); 
    }else{
        accountPopup.classList.add('d-lg-none'); 
    }
});
// logout functionality
logoutBtn.forEach((btn, idx)=>{
    btn.addEventListener('click', ()=>{  
        localStorage.clear();
        window.location.href = './login.html';
    });
  });