const memberName = document.querySelector('#memberName')
memberName.innerHTML = window.localStorage.getItem('user') + '會員 你好';

const idPhoto = document.querySelector('#idPhoto')
idPhoto.src = window.localStorage.getItem('userPhoto');

const showImg = document.querySelector('#showImg')
showImg.src = window.localStorage.getItem('userPhoto');

const name = document.querySelector('#name')
name.value = window.localStorage.getItem('user');



const male = document.querySelector('#male')
const women = document.querySelector('#women')

if (window.localStorage.getItem('userGender') == '男') {
  male.checked = window.localStorage.getItem('userGender')
} else {
  women.checked = window.localStorage.getItem('userGender')
}

const date = document.querySelector('#date')
date.value = window.localStorage.getItem('userBirthDate').slice(0,10);

const phone = document.querySelector('#phone')
phone.value = window.localStorage.getItem('userPhone');

const address = document.querySelector('#address')
address.value = window.localStorage.getItem('userAddress');

const email = document.querySelector('#email')
email.value = window.localStorage.getItem('userEmail');


const account = document.querySelector('#account')
account.value = window.localStorage.getItem('userAccount');

const pwd = document.querySelector('#pwd')
pwd.value = window.localStorage.getItem('userPassword');

