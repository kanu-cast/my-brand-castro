// =============== BACKGROUND CUSTOMIZATION ==================

const Bg1 = document.querySelector('.switcher .bg-1');
const Bg2 = document.querySelector('.switcher .bg-2');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);

}

Bg1.addEventListener('click', () =>{
    localStorage.setItem('theme', 'light');
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';
    // add active class
    Bg1.classList.add('active');
    // remove active class from the other button
    Bg2.classList.remove('active');
    changeBg();

});

Bg2.addEventListener('click', () =>{
    localStorage.setItem('theme', 'dark');
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    // add active class
    Bg2.classList.add('active');
    // remove active class from the other button
    Bg1.classList.remove('active');
    changeBg();

});
// =============== HAMBURGER AND NAV TOGGLE ==================

var root = document.querySelector(':root');
var menu = document.querySelector('.hamburger');
var hiddenMenu = document.querySelector('.hidden-menu');
var menuItems = document.querySelectorAll('.hoverable-link');
let show = false;

// remove active class from all menu items
const changeActiveItem = () =>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

const toggleMenu = ()=>{
    show = !show
    if(show){
        showMenu();
    }else{
        hideMenu();
    }
}
const hideMenu=()=>{
    hiddenMenu.classList.remove('d-block');
    hiddenMenu.classList.add('d-none');
}
const showMenu=()=>{
    hiddenMenu.classList.remove('d-none');
    hiddenMenu.classList.add('d-block');
}
menu.addEventListener('click', ()=>{
    toggleMenu();
});
menuItems.forEach(item =>{
    item.addEventListener('click', ()=>{
        show = false;
        changeActiveItem();
        item.classList.add('active');
        hideMenu();
    });
});

// =========================== tracking background theme via local storage and invoking ============================

(function () {
    const strorageTheme = localStorage.getItem('theme');
    if(strorageTheme == 'light'){
        darkColorLightness = '17%';
        whiteColorLightness = '100%';
        lightColorLightness = '95%';
        // add active class
        Bg1.classList.add('active');
        // remove active class from the other button
        Bg2.classList.remove('active');
        changeBg();
    }else{
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';
        // add active class
        Bg2.classList.add('active');
        // remove active class from the other button
        Bg1.classList.remove('active');
        changeBg();
    }
})();


// ===================== CONTACT FORM VALIDATION ============================
let email = "";
let body = "";
// message body validation
function validateBody(body){
    var regex = /^[a-zA-Z\s]{12,1000}$/;
    return String(body).match(regex);
}

/// email validation here
const isEmail = (email) =>{
    return String(email)
        .toLowerCase()
        .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

var emailForm = document.querySelector('.email');
var emailErrorBox = document.querySelector('.email-error-box');
var messageForm = document.querySelector('.message');
var messageErrorBox = document.querySelector('.message-error-box');
const myForm = document.querySelector("form[name=messageForm]");
var myBtn = document.querySelector(".msg-btn");
//// eventlisteners
emailForm.addEventListener('keyup', function(evt){
    const { value } = evt.target;
    if(!isEmail(value)){
        emailForm.classList.add('b-2px-red');
        emailErrorBox.classList.remove('d-lg-none');
        return;
    }
    emailForm.classList.remove('b-2px-red');
    emailErrorBox.classList.add('d-lg-none');
    return email = isEmail(value)[0];
});

//// eventlisteners
messageForm.addEventListener('keyup', function(evt){
    const { value } = evt.target;
    if(!validateBody(value)){
        messageForm.classList.add('b-2px-red');
        messageErrorBox.classList.remove('d-lg-none');
        return;
    }
    messageForm.classList.remove('b-2px-red');
    messageErrorBox.classList.add('d-lg-none');
    return body = validateBody(value)[0];
});

let isLoading = false
myForm.addEventListener('submit', async function(evt){
    evt.preventDefault();
    isLoading = true;
    if(email && body){
        console.log('sending...')
        const response = await sendMessage();
        console.log('this is respnse', response);
        const { status, msg } = response;
        if(response && status == 201){
            Toastify({
                text: msg,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right",
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                background: "#FFFFF"
                },
                onClick: function(){} // Callback after click
            }).showToast();
        }
    }else{
        Toastify({
            text: 'Email and message must be valid',
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "#e84949"
            },
            onClick: function(){} // Callback after click
        }).showToast();
    }   

})

const sendMessage = async()=>{
    try{
        const {data} = await axios.post(
            `http://localhost:3000/api/messages/`, 
            {email, body},
            {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        alert(data.msg);
        return data;
    }catch(error){
        console.log(error);
        Toastify({
            text: error.response.data.error || error.message,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "#e84949"
            },
            onClick: function(){} // Callback after click
        }).showToast();
        
    }
}

if(isLoading){
    const inner = `
    <img src='./assets/spinnerTrans.gif' class="inline" style="height:1rem; width:1rem;"/>`
    myBtn.innerHTML = inner;
}else{
    const inner = `Send Message
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 15 15">
        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>    
    </svg>`
    myBtn.innerHTML += inner;
}