const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



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

	console.log(`${mAccount} ${mPassword}`)

	// ==========================================================

	fetch("./text會員.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			myJson.forEach(element => {

				if(mAccount == element.mAccount && mPassword == element.mPassword){
					
					// window.location.href="./登入後的畫面.html";
					window.location.href="./登入後的畫面.html";
					// alert(`${element.mName}`)
					window.localStorage.setItem('user',element.mName);

				}else{
					// alert('帳號密碼錯誤')
				}


			});
		})

}
mButtonClick.addEventListener('click', msubmitBtn)



