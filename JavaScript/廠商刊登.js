// $("#upload_img").change(function () {

//     readURL(this);   // this代表<input id="upload_img">

// });
// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             //console.log('file', e.target.result); //測試檔案有無傳上來
//             $("#showImg").attr('src', e.target.result);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }

// // 上傳廠商刊登需POST的方法
// function PostMessage(){
//     const submit = document.querySelector('#submit')
//     const title = document.querySelector('#title')
//     const time = document.querySelector('#time')
//     const price = document.querySelector('#price')
//     const area = document.querySelector('#area')
//     const text= document.querySelector('#text') //內容

//     submit.addEventListener('click',()=>{

//             //測試有無抓到值
//             //alert(title.value)
//             //alert(time.value)
//             //alert(price.value)
//             //alert(area.value)
//             //alert(text.value)

//            })

//            upload_img.addEventListener('change',()=>{
//             console.log(upload_img.value);
//            })

//         }


//         const url = ``
//         let headers = {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         }

//         //以下是API文件中提及必寫的主體参數。而以下這個產品資料是六角學院提供的。
//         let body = {
//             "eName": "",
//             "eStartTime": "",
//             "ePrice": "",
//             "vArea": "",
//             "eIntroduce": "",

//         }

//         fetch(url, {
//             method: "POST",
//             headers: headers,
//             //別忘了把主體参數轉成字串，否則資料會變成[object Object]，它無法被成功儲存在後台
//             body: JSON.stringify(body)
//         })
//             .then(response => response.json())
//             .then(json => console.log(json));


//         window.addEventListener('load',  PostMessage)

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


const submit = document.querySelector('#submit')
const title = document.querySelector('#title')
const time = document.querySelector('#time')
const price = document.querySelector('#price')
const area = document.querySelector('#area')
const content = document.querySelector('#content')
const upload_img = document.querySelector('#upload_img')



submit.addEventListener('click', () => {

    const eImage = $('#upload_img').get(0).files[0].name;

    //    alert(mName.value)
    //    alert(date.value)
    //    alert(phone.value)
    //    alert(address.value)
    //    alert(email.value)
    //    alert(account.value)
    //    alert(pwd.value)


    let _data = {
        "mName": mName.value,
        "mGmder": gender,
        "mAddress": address.value,
        "mEmail": email.value,
        "mPhone": phone.value,
        "mBirthday": date.value,
        "mAccount": account.value,
        "mPassword": pwd.value,
        "mImage": mImage,
    }

    fetch('http://20.249.62.237/api/Member', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));

    alert('註冊成功')
    fetch("http://20.249.62.237/api/Member", {
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



})
