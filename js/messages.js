var messageId = '';
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
//capturing all Messages from localstorage
(async function getMessages(){
    try{
        const response = await axios.get(
            `https://mybrand-api-p02i.onrender.com/api/messages`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token

                }
            }
        );
        const allMessages = response.data.messages;
        console.log('this is all messages ', allMessages)
        const messageList = document.querySelector('.messagesList');
        allMessages.forEach((message, idx)=>{
        const emailString = message.email > 20 ? message.email.substring(0,20)+'...' : message.email;
        const bodyString = message.body > 20 ? message.body.substring(0,20)+'...' : message.body;

        const messageContent =
        `   <div class=" block card br-2 px-lg-3 py-2 py-md-3 py-lg-3 mt-1 mt-md-1 mt-lg-2 box-shadow pointer" id="${message._id}">
                <div class="flex-centered-vertical"  style="width:100%;">
                    <div class="flex-centered-vertical-nospace credentials msg-card" style="width:40%;" id="${message._id}">
                        <div class="inline-block br-rnd b-1px-hue relative " 
                            style="width: 2.4rem; height: 2.4rem; background-image: url('./assets/ceo2.JPG'); background-position: top; background-size: cover;"
                        >
                            <span class="absolute online"> </span>
                        </div>
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
        })
        const deleteButton = document.querySelectorAll('.delete-message');
        deleteButton.forEach((button)=>{    
            button.addEventListener('click',function(e){
                e.preventDefault();
                openModal(e);
            });
        });
        const msgCards = document.querySelectorAll('.msg-card');
        msgCards.forEach((card)=>{    
            card.addEventListener('click', function(e){
                e.preventDefault();
                if(!e.target.classList.contains('delete-message')){
                    console.log('damn id', e.target.id)
                    fetchSingleMsg(e);
                }
            });
        });
    }catch(error){
        console.error(error);
    }
})();

/// delete logic here
const modal = document.querySelector('.modal');
const cancelButton = document.querySelector('.cancel');
const deleteMessageButton = document.querySelector('.delete-button');
// open modal
const openModal = (e) =>{
    e.preventDefault();
    console.log('did', e.target.id)
    modal.classList.remove('d-lg-none');
    deleteMessageButton.id = e.target.id;
    cancelButton.id = e.target.id;
    modal.id = e.target.id;
    messageId = e.target.id;
}
// read logic here
const msgModal = document.querySelector('.msg-modal');
const cancelReplyButton = document.querySelector('.cancel-reply');
const replyMessageButton = document.querySelector('.reply-button');
const messageEmail = document.querySelector('.messageEmail');
const messageBody = document.querySelector('.messageBody');

// open read message modal
const openReadModal = (e)=>{
    e.preventDefault();
    cancelReplyButton.id = e.target.id;
    msgModal.classList.remove('d-lg-none')
}
const fetchSingleMsg = async(e)=>{
    e.preventDefault();
    const {id} = e.target;
    console.log('destructur', id);
    try{
        const { data } = await axios.get(
          `https://mybrand-api-p02i.onrender.com/api/messages/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            } 
          }
        );
        if(data.status == 200){
            console.log('data', data)
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
                    <span class="block font-0 clr-white bold">Sent : ${data.message.createdAt}</span>    
                </span>
            `
            messageBody.innerHTML = `<p class="py-lg-4">${data.message.body}</p>`
           
        }

        }catch(error){
          console.log(error)
        }
}
const deleteMessage = async(id)=>{
    try{
    const { data } = await axios.delete(
      `https://mybrand-api-p02i.onrender.com/api/messages/${id}`,
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
    // setTimeout(()=>{
        window.location.reload();
    // },3000);
    }catch(error){
      console.log(error)
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
}

// close modal
const closeModal = (e) =>{
    if(e.target.classList.contains('modal') || e.target.classList.contains('cancel') || e.target.classList.contains('delete-button')){
        modal.classList.add('d-lg-none')
    }
    if(e.target.classList.contains('msg-modal') || e.target.classList.contains('cancel-reply') || e.target.classList.contains('reply-button')){
        msgModal.classList.add('d-lg-none')
    }
  }
modal.addEventListener('click', closeModal)
msgModal.addEventListener('click', closeModal);
cancelReplyButton.addEventListener('click', closeModal);

deleteMessageButton.addEventListener('click', function(e){
    e.preventDefault();
    deleteMessage(messageId);
    closeModal(e)
})