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
// Fetching Users From Server
(async function getUsers(){
    try{
        const response = await axios.get(
            `https://mybrand-api-p02i.onrender.com/api/users`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token

                }
            }
        );
        const allUsers = response.data.users;
        const userList = document.querySelector('.userList');
        allUsers.forEach((user, idx)=>{
        const fullNames = user.firstName +" "+ user.lastName;
        const userContent =
            `
            <div class="user-card block card br-2 px-lg-3 py-2 py-md-3 py-lg-3 mt-1 mt-md-1 mt-lg-2 box-shadow">
                <div class="flex-centered-vertical"  style="width:100%;">
                    <div class="flex-centered-vertical-nospace credentials" style="width:40%;" id="${user._id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <div class="inline-block bold px-3 px-md-3 px-lg-3 font-2 author-names">
                            ${fullNames > 24 ? fullNames.substring(0,24)+'...' : fullNames}
                        </div>
                    </div>
                    <span class="d-none font-1" style="width:50%;" id="${user._id}">${user.email}</span>
                    <span class="font-1 d-block d-md-none d-lg-none" style="width:50%;" id="${user._id}">${user.email > 20 ? user.email.substring(0,20)+'...' : user.email}</span>
                    <span style="width:10%;">
                        <span class="clr-red inline-block pointer px-2 px-md-3 px-lg-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </span>
                        <span class="pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                        </span>
                    </span>
                </div>
            </div>
                `
        userList.innerHTML += userContent;
        })
    }catch(error){
        console.error(error);
    }
})();