let blogsArr = [];

//capturing all blogs from localstorage
let storageBlogs = localStorage.getItem('blogs');
let allBlogsArr = JSON.parse(storageBlogs); 
blogsArr = allBlogsArr;
var currentId = (Number(blogsArr[blogsArr.length-1].id) + 1).toString();

// ===============  image preview before upload ==================
var imgInput = document.querySelector('.image-selector');
function changeImageSrc(newSrc) {
    var img = document.querySelector('.image-preview')
    img.src = `./assets/${newSrc}`;
}
const changePreview = (e)=>{
    const reader = new FileReader();
    
    let file = e.target.files[0];
    reader.onload = () => {
        if(reader.readyState == 2){
            console.log('this is reader', reader);
            console.log('this is reader result', reader.readyState);
            localStorage.setItem('uploadedImage', reader.result);
            blogImage = file;
            uploadedImage.src = reader.result;
            changeImageSrc(file.name)
        }
    }
    if(file){
        reader.readAsDataURL(e.target.files[0])
    }
};
imgInput.addEventListener('change', changePreview);


// ================= form validation ===========================

const myForm = document.querySelector("form[name=blogForm]");
var titleInput = document.querySelector('.title');
var titleErrorBox = document.querySelector('.title-error-box');

var imagePreview = document.querySelector('.img-cont');
var imageErrorBox = document.querySelector('.image-error-box');
var uploadedImage = document.querySelector('.image-preview');
var textArea = document.querySelector('.rte-modern')
var textAreaErrorBox = document.querySelector('.textarea-error-box');

myForm.addEventListener('submit', function(e){
	e.preventDefault();
	const data = new FormData(e.target);
    const blogTitle = data.get('blogTitle');
    const blogImage = data.get('blogImage');

    const blogBody = editor1.getHTMLCode();

    if(!blogTitle){
        titleInput.classList.add('b-2px-red');
        titleErrorBox.classList.remove('d-lg-none');
       
    }if(!blogImage.name){
        imagePreview.classList.add('b-2px-red');
        imageErrorBox.classList.remove('d-lg-none');

    }if(blogBody.length <=  10){
        textArea.classList.add('b-2px-red');
        textAreaErrorBox.classList.remove('d-lg-none');
    }
    if(blogTitle && blogImage.name && blogBody.length > 10){
        const newBlog = {};
        newBlog.id = currentId;
        newBlog.title = blogTitle;
        newBlog.imagePath = localStorage.getItem('uploadedImage');
        newBlog.body = blogBody
        newBlog.published = Date.now();
        newBlog.comments = []
        newBlog.likes = []
        newBlog.author = {firstName:'Munyaneza', lastName:'Castro'}

        blogsArr.push(newBlog);
        const stringBlogs = JSON.stringify(blogsArr);
        localStorage.setItem('blogs', stringBlogs);
        window.location.href =`./read-blog.html?id=${currentId}`
    }	
});
