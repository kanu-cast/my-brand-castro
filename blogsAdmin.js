  //state
  let blogId ='';
  //capturing all blogs from localstorage
  let storageBlogs = localStorage.getItem('blogs');
  const allBlogs = JSON.parse(storageBlogs); 
  console.log('this is allBlogs', allBlogs);
  const blogsList = document.querySelector('.blogs-list')

  allBlogs.forEach((blog , idx)=>{
    const path = `./read-blog.html?id=${blog.id}`
    path.trim();
    // handling Dates
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
    const publishedDate = new Date(blog.published);
    const PublishedDateString = `${publishedDate.getDate()} ${months[publishedDate.getMonth()].substring(0,3)} ${publishedDate.getFullYear()}`
   //displaying blog on UI
   const btns = document.querySelector('.btns');
    const blogCard = `
        <li>
        <div class="my-3 my-md-3 my-lg-4 py-lg-0 inline-block relative" style="width: 16rem;">
            <div id="${blog.id}" class="flex-centered br-rnd clr-white pointer absolute delete-blog" style=" width: 2rem; height:2rem; right: 4px; top: 4px; background-color: black; opacity: 0.8;">
                <svg xmlns="http://www.w3.org/2000/svg" id="${blog.id}" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path id="${blog.id}" d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path id="${blog.id}" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </div>
            <div class="card b-3px-hue br-3">
                <div class="card-img-holder" style="height: 8rem;">
                    <img src="${blog.imagePath}"
                     class="img-fit br-top-2"/>
                </div>
                <div class="card-body block px-lg-3 py-lg-3 py-3 py-md-3">
                    <span class=" text-left block font-2 bold-2"  style="min-height: 4rem;" >
                        ${blog.title}
                    </span>
                    <div class="block text-center py-lg-2">
                        <button class="inline-block mx-2 mx-md-2 mx-lg-2 b-2px-white font-1 card-body py-lg-2 px-lg-3 mt-lg-2 br-2"><a href="./read-blog.html?id=${blog.id}" class="style-none py-lg-1 inline-block">Read More</a></button>
                        <button class="inline-block mx-2 mx-md-2 mx-lg-2 b-2px-red btn-red font-1 py-2 py-md-2 py-lg-2 px-lg-3 mt-lg-2 br-2"><a href="./update-blog.html?id=${blog.id}" class="style-none py-lg-1 inline-block">Edit Blog</a></button>
                    </div>
                </div>
            </div>
        </div>
        </li>`
    blogsList.innerHTML += blogCard;
  });
  
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 6;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  })

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

// =========== Delete button modal ================
const modal = document.querySelector('.modal');
// open modal
const openModal = (e) =>{
    modal.classList.remove('d-lg-none');
    console.log('id', e.target.id);
    blogId = e.target.id;
}

// close modal
const closeModal = (e) =>{
    if(e.target.classList.contains('modal') || e.target.classList.contains('cancel') || e.target.classList.contains('delete-button')){
        console.log('id', e.target.id);
        modal.classList.add('d-lg-none')
    }
}
modal.addEventListener('click', closeModal);
const deleteButton = document.querySelectorAll('.delete-blog');
deleteButton.forEach((button)=>{
    button.addEventListener('click', openModal)
});

const deleteBlog = (id) =>{
    const newBlogs = allBlogs.filter(item => item.id.toString() != id.toString())
    localStorage.setItem('blogs', JSON.stringify(newBlogs));
    window.location.reload();
    return;
}
const cancelButton = document.querySelector('.cancel');
const deleteBlogButton = document.querySelector('.delete-button');
deleteBlogButton.addEventListener('click', function(e){
    e.preventDefault();
    deleteBlog(blogId);
    closeModal()
})