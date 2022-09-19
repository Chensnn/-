// 右上角的會員名字和照片
const OrganizerName = document.querySelector('#OrganizerName')
OrganizerName.innerHTML = window.localStorage.getItem('OrganizerName') + ' 你好';
// const idPhoto = document.querySelector('#idPhoto')
// idPhoto.src = window.localStorage.getItem('userPhoto');



const name = document.querySelector('#oName') //input的廠商名稱
const date1 = document.querySelector('#date')
const phone1 = document.querySelector('#phone')
const address1 = document.querySelector('#address')
const email1 = document.querySelector('#email')
const account1 = document.querySelector('#account')
const pwd1 = document.querySelector('#pwd')

showOrganizerDeatails();


let oId = window.localStorage.getItem('OrganizerID');

//=========================================================以下做修改資料

const returnInfo = document.querySelector('#returnInfo')    //回復資料btn
const updateInfo = document.querySelector('#updateInfo')    //更新資料btn




// 更新資料
updateInfo.addEventListener('click', () => {



  const oName = document.querySelector('#oName')
  const oPhone = document.querySelector('#phone')
  const oAddress = document.querySelector('#address')
  const oEmail = document.querySelector('#email')
  const oAccount = document.querySelector('#account')
  const oPassword = document.querySelector('#pwd')


  let oId = window.localStorage.getItem('OrganizerID');
  let _data = {
    "oId": oId,
    "oName": oName.value,
    "oAddress": oAddress.value,
    "oEmail": oEmail.value,
    "oPhone": oPhone.value,
    "oAccount": oAccount.value,
    "oPassword": oPassword.value,
  }


  // 1.先put資料上去
  fetch(`http://20.249.62.237/api/Organizer/${oId}`, {
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
  fetch(`http://20.249.62.237/api/Organizer`, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      myJson.forEach(element => {


        window.location.href = "./登入.html";
        window.localStorage.setItem('OrganizerID', element.oId);
        window.localStorage.setItem('OrganizerName', element.oName);
        window.localStorage.setItem('OrganizerPhone', element.oPhone);
        window.localStorage.setItem('OrganizerAddress', element.oAddress);
        window.localStorage.setItem('OrganizerEmail', element.oEmail);
        window.localStorage.setItem('OrganizerAccount', element.oAccount);
        window.localStorage.setItem('OrganizerPassword', element.oPassword);

      });

    })


  name.value = window.localStorage.getItem('OrganizerName');
  phone1.value = window.localStorage.getItem('OrganizerPhone');
  address1.value = window.localStorage.getItem('OrganizerAddress');
  email1.value = window.localStorage.getItem('OrganizerEmail');
  account1.value = window.localStorage.getItem('OrganizerAccount');
  pwd1.value = window.localStorage.getItem('OrganizerPassword');


})



// click後重新抓一次資料
returnInfo.addEventListener('click', () => {
  showOrganizerDeatails()
})

function showOrganizerDeatails() {


  let oId = window.localStorage.getItem('OrganizerID');

  fetch(`http://20.249.62.237/api/Organizer/${oId}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      myJson.forEach(element => {


        window.localStorage.setItem('OrganizerID', element.oId);
        window.localStorage.setItem('OrganizerName', element.oName);
        window.localStorage.setItem('OrganizerPhone', element.oPhone);
        window.localStorage.setItem('OrganizerAddress', element.oAddress);
        window.localStorage.setItem('OrganizerEmail', element.oEmail);
        window.localStorage.setItem('OrganizerAccount', element.oAccount);
        window.localStorage.setItem('OrganizerPassword', element.oPassword);



      });

    })

  name.value = window.localStorage.getItem('OrganizerName');

  phone1.value = window.localStorage.getItem('OrganizerPhone');

  address1.value = window.localStorage.getItem('OrganizerAddress');

  email1.value = window.localStorage.getItem('OrganizerEmail');

  account1.value = window.localStorage.getItem('OrganizerAccount');

  pwd1.value = window.localStorage.getItem('OrganizerPassword');
}