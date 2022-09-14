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

// 上傳註冊會員Info 要post的Api
function doFirst() {
   const submit = document.querySelector('#submit')
   const mName = document.querySelector('#mName')
   let gender=''
   const male = document.querySelector('#male')
   const women = document.querySelector('#women')
   const date = document.querySelector('#date')
   const phone = document.querySelector('#phone')
   const address = document.querySelector('#address')
   const email = document.querySelector('#email')
   const account = document.querySelector('#account')
   const pwd = document.querySelector('#pwd')
   const upload_img = document.querySelector('#upload_img')

   submit.addEventListener('click',()=>{

   
//    alert(mName.value)
//    alert(male.value)
//   if(male.checked){
//     gender = male.value
//     alert(gender)
//   }
//   else{
//     gender = women.value
//     alert(gender)
//   }
//    alert(typeof date.value)
//    alert(phone.value)
//    alert(address.value)
//    alert(email.value)
//    alert(account.value)
//    alert(pwd.value)

   })

   upload_img.addEventListener('change',()=>{
    console.log(upload_img.value);
   })
   
}




const url = ``
let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}

//以下是API文件中提及必寫的主體参數。而以下這個產品資料是六角學院提供的。
let body = {
    "mName": "",
    "mGmder": "",
    "mAddress": "",
    "mEmail": "",
    "mPhone": "",
    "mBirthday": "",
    "mAccount": "",
    "mPassword": "",
    "imageUrl": ["https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"]
}

fetch(url, {
    method: "POST",
    headers: headers,
    //別忘了把主體参數轉成字串，否則資料會變成[object Object]，它無法被成功儲存在後台
    body: JSON.stringify(body)
})
    .then(response => response.json())
    .then(json => console.log(json));


window.addEventListener('load', doFirst)