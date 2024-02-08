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
const initialAllBlogs = [
    {   
        id:'1',
        title: 'The best coding practices and conventions in the industry today',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.
        `,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    },
    {
        id:'2',
        title: 'Nestjs vs Expressjs, which one is considered better and why?!',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.
        `,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`,
                
            },
        ]
    },
    {
        id:'3',
        title: "All there's to know about progressive web applications(PWA).",
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.`,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    },
    {
        id:'4',
        title: 'What should a good backend developer keep in mind when building an API',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.`,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    },
    {
        id:'5',
        title: 'Bootstrap vs Tailwind, which one is better and why?!',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.`,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    },
    {
        id:'6',
        title: 'React vs Angular, which one is better and why?!',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.`,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    },
    {   
        id:'7',
        title: 'The best coding practices and conventions in the industry today',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.
        `,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    },
    {
        id:'8',
        title: 'Nestjs vs Expressjs, which one is considered better and why?!',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.
        `,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`,
                
            },
        ]
    },
    {
        id:'9',
        title: "All there's to know about progressive web applications(PWA).",
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.`,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    },
    {
        id:'10',
        title: 'What should a good backend developer keep in mind when building an API',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.`,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    },
    {
        id:'11',
        title: 'Bootstrap vs Tailwind, which one is better and why?!',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.`,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'2',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    },
    {
        id:'12',
        title: 'React vs Angular, which one is better and why?!',
        imagePath:'./assets/coder.jpg',
        body:`Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i 
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.

        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled i
        t to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of 
        type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the 
        printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.`,
        author:{
            firstName: 'Munyaneza',
            lastName: 'castro'
        },
        published:'12/jan/2024',
        likes:[
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
            {id: '1', firstName:'munyaneza', lastName:'castro'},
        ],
        comments:[
            {
                id:'1',
                author:{
                    firstName:'munyaneza',
                    lastName:'castro',
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'12',
                author:{
                    firstName:'ntirushwa',
                    lastName:'Brice'
                },
                published:'15/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'3',
                author:{
                    firstName:'mwamikazi',
                    lastName:'davina'
                },
                published:'16/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
            {
                id:'4',
                author:{
                    firstName:'hirwa',
                    lastName:'eli'
                },
                published:'14/jan/2024',
                body:`lorem dolor sit amet consectitum lorem ipsum is simply dummy
                text of the typesetting industry that has been in use since 1905`
            },
        ]
    }
];

(function () {
    console.log(toString(null))
    if(JSON.parse(localStorage.getItem('blogs')).length == 0){
        let stringfied = JSON.stringify(initialAllBlogs)
        localStorage.setItem('blogs', stringfied);
    }
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

/// email validation here
const isEmail = (email) =>{
    return String(email)
        .toLowerCase()
        .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

var emailForm = document.querySelector('.email');
var emailErrorBox = document.querySelector('.email-error-box');

//// eventlisteners
emailForm.addEventListener('keyup', function(evt){
    console.log('this is log', evt.target.value);
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


