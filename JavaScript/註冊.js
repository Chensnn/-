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
const mName = document.querySelector('#mName')
const date = document.querySelector('#date')
const phone = document.querySelector('#phone')
const address = document.querySelector('#address')
const email = document.querySelector('#email')
const account = document.querySelector('#account')
const pwd = document.querySelector('#pwd')
const upload_img = document.querySelector('#upload_img')



submit.addEventListener('click', () => {

    let gender = $("[name='gender']:checked").val()
    const mImage = $('#upload_img').get(0).files[0].name;





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





