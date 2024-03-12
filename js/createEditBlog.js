const token = localStorage.getItem('token');
const currentUser = localStorage.getItem('currentUser');
const isAdmin = localStorage.getItem('role');
if(!currentUser || isAdmin !== 'admin' || !token){
  window.location.href = './login.html';
}
var logoutBtn = document.querySelectorAll('.logout');
logoutBtn.forEach((btn, idx)=>{
  btn.addEventListener('click', ()=>{  
      localStorage.clear();
      window.location.href = './login.html';
  });
});

// ===============  image preview before upload ==================


var imgInput = document.querySelector('.image-selector');
function changeImageSrc(newSrc) {
    var img = document.querySelector('.image-preview')
    img.src = newSrc;
}
const changePreview = (e)=>{
    const reader = new FileReader();
    
    let file = e.target.files[0];
    reader.onload = () => {
        if(reader.readyState == 2){
            localStorage.setItem('uploadedImage', reader.result);
            blogImage = file;
            uploadedImage.src = reader.result;
            changeImageSrc(reader.result)
        }
    }
    if(file){
        reader.readAsDataURL(e.target.files[0])
    }
};
imgInput.addEventListener('change', changePreview);


// ================= form validation ===========================

const blogForm = document.querySelector("form[name=blogForm]");
var titleInput = document.querySelector('.title');
var titleErrorBox = document.querySelector('.title-error-box');

var imagePreview = document.querySelector('.img-cont');
var imageErrorBox = document.querySelector('.image-error-box');
var uploadedImage = document.querySelector('.image-preview');
var textArea = document.querySelector('.rte-modern')
var textAreaErrorBox = document.querySelector('.textarea-error-box');

const createBlog = async (payload)=>{
    try{
        const { data } = await axios.post(  
            `https://mybrand-api-p02i.onrender.com/api/blogs`,
            {
                title: payload.title,
                body: payload.body,
                uploadedImage: payload.uploadedImage
            },
            {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        })
        if(data.status == 201 && data.blog){
            Toastify({
                text: data.msg,
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
            setTimeout(()=>{
                window.location.href =`./read-blog.html?id=${data.blog._id}`
            }, 2000)
        }
        // console.log('this is responseData', data);
        return data;
    }catch(error){
        console.log(error);
        Toastify({
            text: error.response.data.error.details[0].message ||  error.response.data.error || error.response.data ||  error.message,
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

blogForm.addEventListener('submit', async function(e){
	e.preventDefault();
	const data = new FormData(e.target);
    const blogTitle = data.get('blogTitle');
    const blogImage = data.get('blogImage');
    const blogBody = editor1.getHTMLCode();

    const payload = {
        title: blogTitle,
        body: blogBody,
        uploadedImage: blogImage
    }
    // console.log('this is data', payload);
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
        const response = await createBlog(payload);
        // console.log('this is response3', response);
    }	
});
