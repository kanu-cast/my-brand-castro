var messageId = '';
// Tracking Current User Information
const token = localStorage.getItem('token');
const currentUser = localStorage.getItem('currentUser');
const isAdmin = localStorage.getItem('role');
// Security Check
if(!currentUser || isAdmin !== 'admin' || !token){
  window.location.href = './login.html';
}
// Logout Option
var logoutBtn = document.querySelectorAll('.logout');
logoutBtn.forEach((btn, idx)=>{
  btn.addEventListener('click', ()=>{  
      localStorage.clear();
      window.location.href = './login.html';
  });
});
// Fetching Messages From Server
(async function getMessages(){
    try{
        const response = await axios.get(
            `https://mybrand-api-eaxe.onrender.com/api/messages`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token

                }
            }
        );
        const allMessages = response.data.messages;
        // Iterating Through Returned Data From The Server
        const messageList = document.querySelector('.messagesList');
        allMessages.forEach((message, idx)=>{
        const messageContent =
        `   <div class=" block card br-2 px-lg-3 py-2 py-md-3 py-lg-3 mt-1 mt-md-1 mt-lg-2 box-shadow pointer" id="${message._id}">
                <div class="flex-centered-vertical"  style="width:100%;">
                    <div class="flex-centered-vertical-nospace credentials msg-card" style="width:40%;" id="${message._id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <div class="inline-block bold px-3 px-md-3 px-lg-3 font-2 author-names f-left">
                            <span class="d-none font-1"> ${message.email > 30 ? message.email.substring(0,30)+'...' : message.email}</span>
                            <span class="font-1 d-block d-md-none d-lg-none">${message.email > 20 ? message.email.substring(0,20)+'...' : message.email}</span>
                        </div>
                    </div>
                    <span class="d-none font-1 text-left msg-card" style="width:50%;" id="${message._id}"> ${message.body > 30 ? message.body.substring(0,30)+'...' : message.body}</span>
                    <span class="font-1 d-block d-md-none d-lg-none text-left" style="width:50%;"> ${message.body > 20 ? message.body.substring(0,20)+'...' : message.body}</span>
                    <span style="width:10%;">
                        <span class="inline-block pointer px-1 px-md-3 px-lg-3"  id="${message._id}">
                            <svg  id="${message._id}" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path  id="${message._id}" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                            </svg>
                        </span>
                        <span class="pointer delete-message" id="${message._id}">
                            <svg  id="${message._id}" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path  id="${message._id}" d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path  id="${message._id}" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </span>
                    </span>
                </div>
            </div>
        `
        messageList.innerHTML += messageContent;
        });
        // Adding Event Listener to Delete Message
        const deleteButton = document.querySelectorAll('.delete-message');
        deleteButton.forEach((button)=>{    
            button.addEventListener('click',function(e){
                e.preventDefault();
                openModal(e);
            });
        });
        // Adding Event Listener to Message Card
        const msgCards = document.querySelectorAll('.msg-card');
        msgCards.forEach((card)=>{    
            card.addEventListener('click', function(e){
                e.preventDefault();
                if(!e.target.classList.contains('delete-message')){
                    fetchSingleMsg(e);
                }
            });
        });
    }catch(error){
        console.error(error);
    }
})();

/// Delete Logic Here
const modal = document.querySelector('.modal');
const cancelButton = document.querySelector('.cancel');
const deleteMessageButton = document.querySelector('.delete-button');
// Open Modal
const openModal = (e) =>{
    e.preventDefault();
    console.log('did', e.target.id)
    modal.classList.remove('d-lg-none');
    deleteMessageButton.id = e.target.id;
    cancelButton.id = e.target.id;
    modal.id = e.target.id;
    messageId = e.target.id;
};
// Read Logic Here CreatedAt
const msgModal = document.querySelector('.msg-modal');
const cancelReplyButton = document.querySelector('.cancel-reply');
const replyMessageButton = document.querySelector('.reply-button');
const messageEmail = document.querySelector('.messageEmail');
const messageBody = document.querySelector('.messageBody');

// Open Read Message Modal
const openReadModal = (e)=>{
    e.preventDefault();
    cancelReplyButton.id = e.target.id;
    msgModal.classList.remove('d-lg-none')
};
// Fetching Single Message From Server
const fetchSingleMsg = async(e)=>{
    e.preventDefault();
    const {id} = e.target;
    try{
        const { data } = await axios.get(
          `https://mybrand-api-eaxe.onrender.com/api/messages/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            } 
          }
        );
        if(data.status == 200){
            // Handling Dates
            const days =['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];      
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            // Adding Value Surfix
            const nthValue =(date)=>{
            if (date.toString().length > 2 || date.toString().length == 0) return 'undefined';
            if (Number(date) > 10 && Number(date) >= 20) return 'th';
            if(date.toString().length > 1 && Number(date) > 20){
                const newDate = Number(date.toString().split('')[1]);
                return newDate > 3 ? 'th' : newDate == 0 ? 'th' : newDate == 1 ? 'st' : newDate == 2 ? 'nd' : 'rd';
            };
            const newDate = Number(date)
                return newDate > 3 ? 'th' : newDate == 0 ? 'th' : newDate == 1 ? 'st' : newDate == 2 ? 'nd' : 'rd';
            };
            // Setting Date Strings
            const publishedDate = new Date(data.message.createdAt);
            const PublishedDateString = `${days[publishedDate.getDay()]}, The ${publishedDate.getDate() + nthValue(publishedDate.getDate())} ${months[publishedDate.getMonth()]} ${publishedDate.getFullYear()}`
            openReadModal(e);
            messageEmail.innerHTML = `
                <span class="block clr-red my-lg-4 font-3-5">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </span>
                    <span> ${data.message.email}</span>
                    <span class="block font-0 clr-white bold">Sent : ${PublishedDateString}</span>    
                </span>
            `
            messageBody.innerHTML = `<p class="py-lg-4">${data.message.body}</p>`
           
        }

    }catch(error){
        console.error(error);
    }
};
const deleteMessage = async(id)=>{
    try{
        const { data } = await axios.delete(
        `https://mybrand-api-eaxe.onrender.com/api/messages/${id}`,
            {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
                } 
            }
        );
        if(data.status == 204){
            Toastify({
                text: 'Message deleted successfully',
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
        
        }
            window.location.reload();
        }catch(error){
            console.error(error)
            Toastify({
                text: error.data,
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
};

// close modal
const closeModal = (e) =>{
    if(e.target.classList.contains('modal') || e.target.classList.contains('cancel') || e.target.classList.contains('delete-button')){
        modal.classList.add('d-lg-none')
    }
    if(e.target.classList.contains('msg-modal') || e.target.classList.contains('cancel-reply') || e.target.classList.contains('reply-button')){
        msgModal.classList.add('d-lg-none')
    }
};
// More Event Listeners
modal.addEventListener('click', closeModal);
msgModal.addEventListener('click', closeModal);
cancelReplyButton.addEventListener('click', closeModal);
// Deleting Message
deleteMessageButton.addEventListener('click', function(e){
    e.preventDefault();
    deleteMessage(messageId);
    closeModal(e);
})