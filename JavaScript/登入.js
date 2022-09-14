const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


//==============================測試登入===================================
const mAccountInput = document.querySelector('#mAccount')
const mPasswordInput = document.querySelector('#mPassword')
const mButtonClick = document.querySelector('#mButtonClick')

// 先測試是否抓得到值
function msubmitBtn() {
	let mAccount = "";
	let mPassword = "";

	let submitAccount = mAccountInput.value;  //得到輸入的帳號
	let submitPassword = mPasswordInput.value; //得到輸入的密碼

	mAccount = submitAccount;
	mPassword = submitPassword;

	// console.log(`${mAccount} ${mPassword}`)

	// ==========================================================
	//會員API  http://20.249.62.237/api/Member
	fetch("./text會員.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			myJson.forEach(element => {

				if(mAccount == element.mAccount && mPassword == element.mPassword){
					
					
					window.location.href="./登入後的畫面.html";
					window.localStorage.setItem('user',element.mName);
					window.localStorage.setItem('userPhoto',element.mImage);
					window.localStorage.setItem('userGender',element.mGmder);
					window.localStorage.setItem('userBirthDate',element.mBirthday);
					window.localStorage.setItem('userPhone',element.mPhone);
					window.localStorage.setItem('userAddress',element.mAddress);
					window.localStorage.setItem('userEmail',element.mEmail);
					window.localStorage.setItem('userAccount',element.mAccount);
					window.localStorage.setItem('userPassword',element.mPassword);
					window.localStorage.setItem('userFavorite',element.eName);

					

				}
				else if(mAccount != element.mAccount || mPassword != element.mPassword)
				{
					
					Swal.fire({
						text: '帳號或密碼錯誤，請重新輸入',
					})
				}


			});
		})
		
}
mButtonClick.addEventListener('click', msubmitBtn)



