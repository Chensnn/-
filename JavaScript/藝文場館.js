// ===================================================================================北部
// 網頁載入先跑出圖片圖片有加一個click事件
fetch('./text場館.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        const showVenueNorth = document.querySelector('#showVenueNorth')
        let html = ''
        myJson.forEach(element => {

            // 在這邊先找出第幾張照片被點擊
            html += `
            <div class="col-lg-2">
                <button class="openBox" onclick="OpenModal(${element.場館編號})">
                    <img src="${element.場館圖片}" title="${element.場館名稱}">
                    <p>${element.場館名稱}</p>
                </button>
            </div>
            `;
        });
        showVenueNorth.innerHTML += html;
    });


function OpenModal(el) {


    let element = document.getElementById('overlay')
    element.style.display = 'block'
    // console.log(el);  //可以得到按了第幾張圖片
    fetch('./text場館.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            const vVenueText = document.querySelector('#vVenueText')

            let html = ``

            for (let i = 0; i < 1; i++) {
                html +=

                    `<span><img src="${myJson[el - 1].場館圖片}"></span>
            <p>場館名稱<i class="fi fi-brands-patreon"></i>${myJson[el - 1].場館名稱}</p>
            <p>場館地區<i class="fi fi-brands-patreon"></i>${myJson[el - 1].所在地區}</p>
            <p>聯絡方式<i class="fi fi-brands-patreon"></i>${myJson[el - 1].聯絡方式}</p>
            <p>場館地址<i class="fi fi-brands-patreon"></i>${myJson[el - 1].場館地址}</p>
            <p>場館介紹<i class="fi fi-brands-patreon"></i>${myJson[el - 1].場館介紹}</p>
            <p>營業時間<i class="fi fi-brands-patreon"></i>
            <div class="relativeForLabel">
                <select class="selectDay" id="selectDay">
                    <option value="營業時間查詢">請選擇</option>
                    <option value="tab_Mon">星期一</option>
                    <option value="tab_Tue">星期二</option>
                    <option value="tab_Wed">星期三</option>
                    <option value="tab_Thr">星期四</option>
                    <option value="tab_Fri">星期五</option>
                    <option value="tab_Sat">星期六</option>
                    <option value="tab_Sun">星期日</option>
                </select>
                <div><label>這邊要發生change事件後才會被新增</label></div>
            </div>
            </p>`


            }

            vVenueText.innerHTML = html;

            let selectDay = document.querySelector('.selectDay')
            let label = document.querySelector('label')

            selectDay.addEventListener('change', showLabel)

            function showLabel() {

                label.style.display = 'block'
                // 抓selectDay的值
                let item = selectDay.value;

                switch (item) {
                    case "tab_Mon":
                        label.innerHTML = `${myJson[el - 1].星期一}`
                        break;
                    case "tab_Tue":
                        label.innerHTML = `${myJson[el - 1].星期二}`
                        break;
                    case "tab_Wed":
                        label.innerHTML = `${myJson[el - 1].星期三}`
                        break;
                    case "tab_Thr":
                        label.innerHTML = `${myJson[el - 1].星期四}`
                        break;
                    case "tab_Fri":
                        label.innerHTML = `${myJson[el - 1].星期五}`
                        break;
                    case "tab_Sat":
                        label.innerHTML = `${myJson[el - 1].星期六}`
                        break;
                    case "tab_Sun":
                        label.innerHTML = `${myJson[el - 1].星期日}`
                        break;
                    default:
                        label.innerHTML = ``
                }

            }

        });

}


// 關閉彈跳視窗
let Closebox = document.getElementById('Closebox')
Closebox.addEventListener('click', function () {

    let element = document.getElementById('overlay')
    element.style.display = 'none'
})


// ===================================================================================北部

// ===================================================================================中部

fetch('./text場館.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        const showVenueNorth = document.querySelector('#showVenueCentral')
        let html = ''
        myJson.forEach(element => {

           
            html += `
            <div class="col-lg-2">
                <button class="openBox" onclick="OpenModal(${element.場館編號})">
                    <img src="${element.場館圖片}" title="${element.場館名稱}">
                    <p>${element.場館名稱}</p>
                </button>
            </div>
            `;
        });
        showVenueNorth.innerHTML += html;
    });

