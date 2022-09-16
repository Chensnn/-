fetch("http://20.249.62.237/api/Member")
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			myJson.forEach(element => {

				
					
					window.localStorage.setItem('userID', element.mId);
					window.localStorage.setItem('user', element.mName);
					window.localStorage.setItem('userPhoto', element.mImage);
					window.localStorage.setItem('userGender', element.mGmder);
					window.localStorage.setItem('userBirthDate', element.mBirthday);
					window.localStorage.setItem('userPhone', element.mPhone);
					window.localStorage.setItem('userAddress', element.mAddress);
					window.localStorage.setItem('userEmail', element.mEmail);
					window.localStorage.setItem('userAccount', element.mAccount);
					window.localStorage.setItem('userPassword', element.mPassword);
					window.localStorage.setItem('userFavorite', element.eName);
				
			});
		})









const showImg = document.querySelector('#showImg')
showImg.src = window.localStorage.getItem('userPhoto');

const name = document.querySelector('#name')
name.value = window.localStorage.getItem('user');



const male = document.querySelector('#male')
const women = document.querySelector('#women')

if (window.localStorage.getItem('userGender') == 'male') {
  male.checked = window.localStorage.getItem('userGender')
} else {
  women.checked = window.localStorage.getItem('userGender')
}

const date = document.querySelector('#date')
date.value = window.localStorage.getItem('userBirthDate');

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