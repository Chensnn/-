$("#upload_img").change(function () {

    readURL(this);   // this代表<input id="upload_img">

});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            //console.log('file', e.target.result); //測試檔案有無傳上來
            $("#showImg").attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// 上傳廠商刊登需POST的方法
function PostMessage(){
    const submit = document.querySelector('#submit')
    const title = document.querySelector('#title')
    const time = document.querySelector('#time')
    const price = document.querySelector('#price')
    const area = document.querySelector('#area')
    const text= document.querySelector('#text') //內容

    submit.addEventListener('click',()=>{

            //測試有無抓到值
            //alert(title.value)
            //alert(time.value)
            //alert(price.value)
            //alert(area.value)
            //alert(text.value)

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
            "eName": "",
            "eStartTime": "",
            "ePrice": "",
            "vArea": "",
            "eIntroduce": "",

        }
        
        fetch(url, {
            method: "POST",
            headers: headers,
            //別忘了把主體参數轉成字串，否則資料會變成[object Object]，它無法被成功儲存在後台
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(json => console.log(json));
        
        
        window.addEventListener('load',  PostMessage)
