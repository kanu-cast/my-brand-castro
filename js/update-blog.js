
let storageBlogs = localStorage.getItem('blogs');
var allBlogs = JSON.parse(storageBlogs);
// get div where blog will be displayed
const formBlock = document.querySelector('.form-block');
const btns = document.querySelector('.btns');
// get id from the url
const searchParams = new URLSearchParams(window.location.search);
const currentId = searchParams.get('id');
// filtering blogs to only display one with id in url
var blog = allBlogs.filter(item => item.id == currentId)[0];

const formContent = `
        <div class="block">
            <label class="font-1 bold">Title:*</label>
            <input type="text" name="blogTitle" class="font-3 bold-1 br-2 form-control py-lg-3 px-lg-3 title" style="height: 2rem;" value="${blog.title}"/>
            <div class="block text-right pt-lg-2 mb-lg-4" style="height: 14px;">
                <div class="font-0 clr-red d-lg-none title-error-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                    </svg>
                    Title can't be Empty
                </div>
            </div>
        </div>
        <div class="block b-2px-dashed-hue o-hidden mt-lg-0 relative py-lg-0 img-cont" style="height:auto; width:100%">
            <input type="file" name="blogImage" class="image-selector opacity-0 absolute pointer" style="height: 100%; width: 100%;" value="${blog.imagePath}"/>
            <img src="${blog.imagePath}"
            class="image-preview img-fit block " style="height: auto; width: 100%;"/>
        </div>
        <div class="block text-right pt-lg-2 mb-lg-4" style="height: 14px;">
            <div class="font-0 clr-red d-lg-none image-error-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>
                Image can't be Empty
            </div>
        </div>
    `

formBlock.innerHTML += formContent;
editor1.setHTMLCode(blog.body);

// ===============  image preview before upload ==================
var imgInput = document.querySelector('.image-selector');
function changeImageSrc(newSrc) {
    var img = document.querySelector('.image-preview')
    img.src = `./assets/${newSrc}`;
}
const changePreview = (e)=>{
    let reader = new FileReader();
      let file = e.target.files[0];
      console.log('this is file', file);
    reader.onload = () => {
        if(reader.readyState == 2){
            localStorage.setItem('uploadedImage', reader.result);
            uploadedImage.src = reader.result;
            blogImage = file;
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
    const blogBody = editor1.getText();
    console.log('this is blogImage', blogImage.name);
    if(!blogTitle){
        titleInput.classList.add('b-2px-red');
        titleErrorBox.classList.remove('d-lg-none');
       
    }if(blogBody.length <=  10){
        textArea.classList.add('b-2px-red');
        textAreaErrorBox.classList.remove('d-lg-none');
    }
    if(blogTitle.length && blogBody.length > 10){
        allBlogs.map(item =>{
            if(item.id == blog.id){
                console.log('inside map')
                item.title = blogTitle;
                item.imagePath = localStorage.getItem('uploadedImage');
                item.body = blogBody
                item.published = Date.now();
                item.author = {firstName:'Munyaneza', lastName:'Castro'}
            }
        })
        console.log('this is allBlogs after map', allBlogs);
        const stringBlogs = JSON.stringify(allBlogs);
        localStorage.setItem('blogs', stringBlogs);

        window.location.href =`./read-blog.html?id=${blog.id}`;
    }	
});