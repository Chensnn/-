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


mButtonClick.addEventListener('click', () => {
	// 先測試是否抓得到值

	let mAccount = "";
	let mPassword = "";

	let submitAccount = mAccountInput.value;  //得到輸入的帳號
	let submitPassword = mPasswordInput.value; //得到輸入的密碼

	mAccount = submitAccount;
	mPassword = submitPassword;

	// console.log(`${mAccount} ${mPassword}`)
	//==========================================================


	// ==========================================================
	//會員API  http://20.249.62.237/api/Member
	fetch("http://20.249.62.237/api/Member")
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			myJson.forEach(element => {

				if (mAccount == element.mAccount && mPassword == element.mPassword && mAccount !== "" && mPassword !== "") {


					window.location.href = "./登入後的畫面.html";
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

					return false;

				}
				else if (mAccount == "" || mPassword == "") {
					Swal.fire({
						text: '請輸入帳號及密碼',
					})
				}
				else if (mAccount !== element.mAccount && mPassword !== element.mPassword) {

					Swal.fire({
						text: '帳號或密碼錯誤，請重新輸入',
					})
					$("#mAccount").val("");
					$("#mPassword").val("");
				}


			});
		})






})



//==============================測試廠商登入===================================
const oAccountInput = document.querySelector('#oAccount')
const oPasswordInput = document.querySelector('#oPassword')
const oButtonClick = document.querySelector('#oButtonClick')

// 先測試是否抓得到值
function osubmitBtn() {
	let oAccount = "";
	let oPassword = "";

	let submitAccount = oAccountInput.value;  //得到輸入的帳號
	let submitPassword = oPasswordInput.value; //得到輸入的密碼

	oAccount = submitAccount;
	oPassword = submitPassword;

	 console.log(`${oAccount} ${oPassword}`)

	// ==========================================================

	fetch("http://20.249.62.237/api/Organizer")
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			myJson.forEach(element => {

				if(oAccount == element.oAccount && oPassword == element.oPassword){
					
					
					window.location.href="./廠商刊登.html";
					window.localStorage.setItem('oName',element.oName);
					window.localStorage.setItem('oPhone',element.oPhone);
					window.localStorage.setItem('oAddress',element.oAddress);
					window.localStorage.setItem('oEmail',element.oEmail);
					window.localStorage.setItem('oAccount',element.oAccount);
					window.localStorage.setItem('oPassword',element.oPassword);

				
				}
				
				
				else if(oAccount != element.oAccount || oPassword != element.oPassword)
				{
					
					Swal.fire({
						text: '帳號或密碼錯誤，請重新輸入',
					})
				}

			});
		})
		
}
oButtonClick.addEventListener('click', osubmitBtn)