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
    const submit = document.querySelector('#submit').value
    const mName = document.querySelector('#mName').value
    const gender = document.getElementsByName('gender').value
    const male = document.querySelector('#male').value
    const women = document.querySelector('#women').value
    const date = document.querySelector('#date').value
    const phone = document.querySelector('#phone').value
    const address = document.querySelector('#address').value
    const email = document.querySelector('#email').value
    const account = document.querySelector('#account').value
    const pwd = document.querySelector('#pwd').value
    const upload_img = document.querySelector('#upload_img').value

    submit.addEventListener('click', () => {


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

    upload_img.addEventListener('change', () => {
        console.log(upload_img);
    })

}

        // data to be sent to the POST request
        let _data = {
            Name: "mName",
            Gmder: "gender",
            Address: "address",
            Email: "email",
            Phone: "phone",
            Birthday: "date",
            Account: "account",
            Password: "pwd",
            Image: "upload_img",
        }

        fetch('http://20.249.62.237/api/Member', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));



// const url = 'http://20.249.62.237/api/Member';
// let headers = {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
// }

// //以下是API文件中提及必寫的主體参數。而以下這個產品資料是六角學院提供的。
// let body = {
//     "Name": mName,
//     "Gmder": gender,
//     "Address": address,
//     "Email": email,
//     "Phone": phone,
//     "Birthday": date,
//     "Account": account,
//     "Password": pwd,
//     "Image": upload_img,
// }

// fetch(url, {
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify(body)
// })
//     .then(response => response.json())
//     .then(json => console.log(json))



window.addEventListener('load', doFirst);

