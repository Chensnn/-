
// 上傳我要刊登需POST的方法
function PostMessage(){
    const submit = document.querySelector('#submit')
    const title = document.querySelector('#title')
    const name = document.querySelector('#name')
    const activity = document.querySelector('#activity')
    const area = document.querySelector('#area')
    const state = document.querySelector('#state') 
    const content = document.querySelector('#content') 

    submit.addEventListener('click',()=>{

            //測試有無抓到值
            // alert(title.value)
            // alert(name.value)
            // alert(activity.value)
            // alert(area.value)
            // alert(state.value)
            // alert(content.value)

           })
        
        }
        
        
        const url = ``
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        
        //以下是API文件中提及必寫的主體参數。而以下這個產品資料是六角學院提供的。
        let body = {
            "TName": "",
            "mName":"",
            "Ttitle": "",
            "TArea": "",
            "TContent": "",
            "TState": "",
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