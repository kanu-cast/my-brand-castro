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
            changeImageSrc(file.name)
        }
    }
    if(file){
        reader.readAsDataURL(e.target.files[0])
    }
};
// imgInput.addEventListener('change', changePreview);