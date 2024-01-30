
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

/// state

let email = '';
let message = '';

/// email validation here
const checkIsEmail = (email) =>{
    return String(email)
        .toLowerCase()
        .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

var emailForm = document.querySelector('.email');
var emailErrorBox = document.querySelector('.email-error-box');