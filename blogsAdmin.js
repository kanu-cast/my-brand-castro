// =========== Delete button modal ================
const deleteButton = document.querySelector('.delete-blog');
const cancelButton = document.querySelector('.cancel');
const modal = document.querySelector('.modal');

// open modal
const openModal = () =>{
    modal.style.display = 'grid';
}
// close modal
const closeModal = (e) =>{
    if(e.target.classList.contains('modal') || e.target.classList.contains('cancel') ){
        modal.style.display = 'none';
    }
}
modal.addEventListener('click', closeModal);
cancelButton.addEventListener('click', closeModal);
deleteButton.addEventListener('click', openModal);