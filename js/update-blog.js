
// get div where blog will be displayed
const formBlock = document.querySelector('.form-block');
const btns = document.querySelector('.btns');

// get id from the url
const searchParams = new URLSearchParams(window.location.search);
const currentId = searchParams.get('id');

/// get current user from local storage
const currentUser = localStorage.getItem('currentUser');
const token = localStorage.getItem('token');
const userRole = localStorage.getItem('role');
if(!currentUser || userRole !== 'admin' || !token){
  window.location.href = './login.html';
}
var logoutBtn = document.querySelectorAll('.logout');
logoutBtn.forEach((btn, idx)=>{
  btn.addEventListener('click', ()=>{  
      localStorage.clear();
      window.location.href = './login.html';
  });
});
// fetch blog from backend api
(async function getBlog(){
    const response = await axios.get(`https://mybrand-api-p02i.onrender.com/api/blogs/${currentId}`);   
    const blog = response.data.blog;    
    console.log('this is fetched blog', blog);

    // authorize user to edit or redirect
    if(currentUser !== blog.author._id || !token || userRole !== 'admin'){
        window.history.back();
    }
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
            <input type="file" name="blogImage" class="image-selector opacity-0 absolute pointer" style="height: 100%; width: 100%;" value="${blog.imageObj.url}"/>
            <img src="${blog.imageObj.url}"
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
    var imgInput = document.querySelector('.image-selector');
    imgInput.addEventListener('change', changePreview);

})();
// ===============  image preview before upload ==================
function changeImageSrc(newSrc) {
    var img = document.querySelector('.image-preview')
    img.src = newSrc;
}
const changePreview = (e)=>{
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onload = () => {
        if(reader.readyState == 2){
            localStorage.setItem('uploadedImage', reader.result);
            // uploadedImage.src = reader.result;
            blogImage = file;
            changeImageSrc(reader.result);
        }
    }
    if(file){
        reader.readAsDataURL(e.target.files[0])
    }
};

// ================= form validation ===========================

const form = document.querySelector("form[name=blogForm]");
var titleInput = document.querySelector('.title');
var titleErrorBox = document.querySelector('.title-error-box');

var imagePreview = document.querySelector('.img-cont');
var imageErrorBox = document.querySelector('.image-error-box');
var uploadedImage = document.querySelector('.image-preview');

var textArea = document.querySelector('.rte-modern')
var textAreaErrorBox = document.querySelector('.textarea-error-box');


const updateBlog = async (payload)=>{
    try{
        const { data } = await axios.put(
            `https://mybrand-api-p02i.onrender.com/api/blogs/${currentId}`,
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
        if(data.status == 200 && data.blog){
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
        console.log('this is responseData', data);
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


form.addEventListener('submit', function(e){
	e.preventDefault();
	const data = new FormData(e.target);
    const blogTitle = data.get('blogTitle');
    const blogImage = data.get('blogImage');
    const blogBody = editor1.getText();

    const payload = {
        title: blogTitle,
        body: blogBody,
        uploadedImage: blogImage
    }
    console.log('this is payload', payload);
    console.log('this is blogImage', blogImage.name);
    if(!blogTitle){
        titleInput.classList.add('b-2px-red');
        titleErrorBox.classList.remove('d-lg-none');
       
    }if(blogBody.length <=  10){
        textArea.classList.add('b-2px-red');
        textAreaErrorBox.classList.remove('d-lg-none');
    }
    if(blogTitle.length && blogBody.length > 10){
        const response = updateBlog(payload);
        console.log('this is response v', response);
    }
});