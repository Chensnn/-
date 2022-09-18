
// 上傳註冊廠商Info 要post的Api


const submit = document.querySelector('#submit')
const oName = document.querySelector('#oName')
const phone = document.querySelector('#phone')
const address = document.querySelector('#address')
const email = document.querySelector('#email')
const account = document.querySelector('#account')
const pwd = document.querySelector('#pwd')


submit.addEventListener('click', () => {

    //    alert(oName.value)
    //    alert(phone.value)
    //    alert(address.value)
    //    alert(email.value)
    //    alert(account.value)
    //    alert(pwd.value)


    let _data = {
        "oName": oName.value,
        "oAddress": address.value,
        "oEmail": email.value,
        "oPhone": phone.value,
        "oAccount": account.value,
        "oPassword": pwd.value,
    }

    fetch('http://20.249.62.237/api/Organizer', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charet=UTF-8" }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));

    alert('廠商註冊成功')
    fetch("http://20.249.62.237/api/Organizer", {
        method: "GET",
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            myJson.forEach(element => {


                window.location.href = "./登入.html";
                window.localStorage.setItem('OrganizerID', element.oId);
                window.localStorage.setItem('Organizer', element.oName);
                window.localStorage.setItem('OrganizerPhone', element.oPhone);
                window.localStorage.setItem('OrganizerAddress', element.oAddress);
                window.localStorage.setItem('OrganizerEmail', element.oEmail);
                window.localStorage.setItem('OrganizerAccount', element.oAccount);
                window.localStorage.setItem('OrganizerPassword', element.oPassword);


            });

    })



})





