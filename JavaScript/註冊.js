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

        
        let imgSrc = $('#showImg')[0].src
        var path =  $('#upload_img').attr('src');
        
        
        alert(imgSrc);
        

        


        //    alert(mName.value)
        //    alert(date.value)
        //    alert(phone.value)
        //    alert(address.value)
        //    alert(email.value)
        //    alert(account.value)
        //    alert(pwd.value)


        // let _data = {
        //     "mId": "36",
        //     "mName": mName.value,
        //     "mGmder":gender,
        //     "mAddress": address.value,
        //     "mEmail": email.value,
        //     "mPhone": phone.value,
        //     "mBirthday": date.value,
        //     "mAccount": account.value,
        //     "mPassword": pwd.value,
        //     "mImage": "一直失敗抓不到會跳出亂碼",
        // }

        // fetch('http://20.249.62.237/api/Member', {
        //     method: "POST",
        //     body: JSON.stringify(_data),
        //     headers: { "Content-type": "application/json; charset=UTF-8" }
        // })
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        //     .catch(err => console.log(err));



    })





