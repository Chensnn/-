// 右上角的會員名字和照片
const memberName = document.querySelector('#memberName')
memberName.innerHTML = window.localStorage.getItem('user') + '會員 你好';
const idPhoto = document.querySelector('#idPhoto')
idPhoto.src = window.localStorage.getItem('userPhoto');



const showImg = document.querySelector('#showImg')
const name = document.querySelector('#name')
const male = document.querySelector('#male')
const women = document.querySelector('#women')
const date1 = document.querySelector('#date')
const phone1 = document.querySelector('#phone')
const address1 = document.querySelector('#address')
const email1 = document.querySelector('#email')
const account1 = document.querySelector('#account')
const pwd1 = document.querySelector('#pwd')

showMemberDeatails();





let mId = window.localStorage.getItem('userID');
// fetch(`http://20.249.62.237/api/Member/${mId}`, {
//   method: "GET",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (myJson) {
//     myJson.forEach(element => {

//       window.localStorage.setItem('userID', element.mId);
//       window.localStorage.setItem('user', element.mName);
//       window.localStorage.setItem('userPhoto', element.mImage);
//       window.localStorage.setItem('userGender', element.mGmder);
//       window.localStorage.setItem('userBirthDate', element.mBirthday);
//       window.localStorage.setItem('userPhone', element.mPhone);
//       window.localStorage.setItem('userAddress', element.mAddress);
//       window.localStorage.setItem('userEmail', element.mEmail);
//       window.localStorage.setItem('userAccount', element.mAccount);
//       window.localStorage.setItem('userPassword', element.mPassword);
//       window.localStorage.setItem('userFavorite', element.eName);

//     });

//   })

//=========================================================以下做修改資料

const returnInfo = document.querySelector('#returnInfo')    //回復資料btn
const updateInfo = document.querySelector('#updateInfo')    //更新資料btn




// 更新資料
updateInfo.addEventListener('click', () => {

  
  const mName = document.querySelector('#name')
  let mGmder = $("[name='gender']:checked").val()
  const mBirthday = document.querySelector('#date')
  const mPhone = document.querySelector('#phone')
  const mAddress = document.querySelector('#address')
  const mEmail = document.querySelector('#email')
  const mAccount = document.querySelector('#account')
  const mPassword = document.querySelector('#pwd')
  const mImage = $('#upload_img').get(0).files[0].name;


  let mId = window.localStorage.getItem('userID');
  let _data = {
    "mId": mId,
    "mName": mName.value,
    "mGmder": mGmder,
    "mAddress": mAddress.value,
    "mEmail": mEmail.value,
    "mPhone": mPhone.value,
    "mBirthday": mBirthday.value,
    "mAccount": mAccount.value,
    "mPassword": mPassword.value,
    "mImage": mImage,
  }


  // 1.先put資料上去
  fetch(`http://20.249.62.237/api/Member/${mId}`, {
    method: "PUT",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(function (response) {

      return response.json()
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));



  // 2.抓取最新資料
  fetch(`http://20.249.62.237/api/Member`, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      myJson.forEach(element => {


        window.location.href = "./登入.html";
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



  showImg.src = window.localStorage.getItem('userPhoto');

  name.value = window.localStorage.getItem('user');

  if (window.localStorage.getItem('userGender') == '男') {
    male.checked = window.localStorage.getItem('userGender')
  } else {
    women.checked = window.localStorage.getItem('userGender')
  }

  date1.value = window.localStorage.getItem('userBirthDate').slice(0, 10);
  phone1.value = window.localStorage.getItem('userPhone');
  address1.value = window.localStorage.getItem('userAddress');
  email1.value = window.localStorage.getItem('userEmail');
  account1.value = window.localStorage.getItem('userAccount');
  pwd1.value = window.localStorage.getItem('userPassword');


})









// click後重新抓一次資料
returnInfo.addEventListener('click', () => {
  showMemberDeatails()
})

function showMemberDeatails() {


  let mId = window.localStorage.getItem('userID');

  fetch(`http://20.249.62.237/api/Member/${mId}`)
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


  showImg.src = window.localStorage.getItem('userPhoto');

  name.value = window.localStorage.getItem('user');

  if (window.localStorage.getItem('userGender') == '男') {
    male.checked = window.localStorage.getItem('userGender')
  } else {
    women.checked = window.localStorage.getItem('userGender')
  }

  date1.value = window.localStorage.getItem('userBirthDate').slice(0, 10);

  phone1.value = window.localStorage.getItem('userPhone');

  address1.value = window.localStorage.getItem('userAddress');

  email1.value = window.localStorage.getItem('userEmail');

  account1.value = window.localStorage.getItem('userAccount');

  pwd1.value = window.localStorage.getItem('userPassword');
}



// 選取照片
$("#upload_img").change(function () {

  readURL(this);   // this代表<input id="upload_img">

});
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#showImg").attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
