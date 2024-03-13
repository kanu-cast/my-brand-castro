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
    var regex = /^[A-Za-z0-9 _.,!"'/$]/;
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
    return body = value;
});

let isLoading = false
myForm.addEventListener('submit', async function(evt){
    evt.preventDefault();
    if(isEmail(email) && body.length >= 12){
        const response = await sendMessage();
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
            text: 'Email and message must be valid',
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

})

const sendMessage = async()=>{
    try{
        const {data} = await axios.post(
            `https://mybrand-api-p02i.onrender.com/api/messages`,
            {email, body},
            {
            headers: {
              'Content-Type': 'application/json'
            }
        })
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
