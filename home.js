// ================== homepage navigation ================
var home = document.querySelector('.home');
var skills = document.querySelector('.skills');
var aboutMe = document.querySelector('.aboutMe');
var contactMe = document.querySelector('.contactMe');

home.addEventListener('click', function(){
    skills.classList.remove('active');
    aboutMe.classList.remove('active');
    contactMe.classList.remove('active');
    home.classList.add('active');
    window.scrollTo( 0, 100);
});