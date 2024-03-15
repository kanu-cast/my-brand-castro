// Tracking Current User Information
const adminToken = localStorage.getItem('token');
const currentAdmin = localStorage.getItem('currentUser');
const adminRole = localStorage.getItem('role');
const adminFirstName = localStorage.getItem('firstName');
const adminLastName = localStorage.getItem('lastName');
// Security Check
if(!currentAdmin|| adminRole !== 'admin' || !adminToken){
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


const adminFullName = adminFirstName+" "+adminLastName;

const adminInitials = document.querySelector('.admin-initials');
const adminNames = document.querySelector('.admin-names');

adminInitials.innerHTML = `${adminFirstName.charAt(0)+adminLastName.charAt(0)}`;
adminNames.innerHTML = `${adminFullName > 30 ? adminFullName.substring(0,30)+'...':adminFullName}`