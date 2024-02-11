
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
   const blogTitleString = blog.title.length > 40 ? blog.title.substring(0,40)+'...': blog.title;
    const blogCard = `
        <li>
        <div class=" my-3 my-md-3 my-lg-4 py-lg-0 inline-block" style="width: 16rem;">
            <div class="card b-3px-hue br-3">
                <div class="card-img-holder" style="height: 8rem;">
                    <img src="${blog.imagePath}"
                    class="img-fit br-top-2"/>
                </div>
                <div class="card-body block px-lg-3 py-lg-2">
                    <div class="double-grid px-0">
                        <span class="block bold font-0">
                            <span class="f-left clr-red">                       
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                                </svg>
                                ${blog.likes.length}
                            </span>
                            <span class="clr-red">                              
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/>
                                </svg>
                                ${blog.comments.length}
                            </span>
                        </span>
                        <span class="block f-right clr-red font-0">
                            ${PublishedDateString}
                        </span>
                    </div>
                    <span class=" text-left block font-2-5 bold-1"  style="min-height: 4.4rem;" >
                        ${blogTitleString}
                    </span>
                    <div class="block text-center py-lg-2">
                        <button class="btn-red font-1 py-lg-3 px-lg-3 mt-lg-2 br-2">
                        <a href=${path}
                         class="style-none">Read More</a></button>
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

const paginationLimit = 3;
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
