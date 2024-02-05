/////// state
let blogTitle = '';
let blogImage = '';
let blogBody = '';

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

var imagePreview = document.querySelector('.image-cont');
var imageErrorBox = document.querySelector('.image-error-box');

var textArea = document.querySelector('.tox-tinymce');
var textAreaErrorBox = document.querySelector('.textarea-error-box');

myForm.addEventListener('submit', onFormSubmit);
textArea.classList.add('b-2px-red');
textAreaErrorBox.classList.remove('d-lg-none');

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
    var content = tinymce.activeEditor.getContent("mytextarea");
    const dataObject = Object.fromEntries(data.entries());
    dataObject.blogBody = content;
    console.log('this is content', content);
	console.log('this is dataObject', dataObject);

    if(!dataObject.blogTitle){
        titleInput.classList.add('b-2px-red');
        titleErrorBox.classList.remove('d-lg-none');

    }if(!content){
        textArea.classList.add('b-2px-red');
        textAreaErrorBox.classList.remove('d-lg-none');
    }if(dataObject.blogImage.name == ""){
      
        imagePreview.classList.remove('b-2px-dashed-hue')
        imagePreview.classList.add('b-2px-red');
    }

}