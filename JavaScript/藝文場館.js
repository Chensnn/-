// 場館資料:各地區最多12筆


// ======================================================================openModal()和主頁的close是共用的

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

                    `<span><img src="${myJson[el - 1].vImage1}"></span>
                    <p>場館名稱<i class="fi fi-brands-patreon"></i>${myJson[el - 1].vVenue}</p>
                    <p>場館地區<i class="fi fi-brands-patreon"></i>${myJson[el - 1].vArea}</p>
                    <p>聯絡方式<i class="fi fi-brands-patreon"></i>${myJson[el - 1].vPhone}</p>
                    <p>場館地址<i class="fi fi-brands-patreon"></i>${myJson[el - 1].vAddress}</p>
                    <p>場館介紹<i class="fi fi-brands-patreon"></i>${myJson[el - 1].vIntroduce}</p>
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
                        label.innerHTML = `${myJson[el - 1].vMonday}`
                        break;
                    case "tab_Tue":
                        label.innerHTML = `${myJson[el - 1].vTuesday}`
                        break;
                    case "tab_Wed":
                        label.innerHTML = `${myJson[el - 1].vWednesday}`
                        break;
                    case "tab_Thr":
                        label.innerHTML = `${myJson[el - 1].vThursday}`
                        break;
                    case "tab_Fri":
                        label.innerHTML = `${myJson[el - 1].vFriday}`
                        break;
                    case "tab_Sat":
                        label.innerHTML = `${myJson[el - 1].vSaturday}`
                        break;
                    case "tab_Sun":
                        label.innerHTML = `${myJson[el - 1].vSunday}`
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
// ======================================================================openModal()和主頁的close是共用的

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
                <button class="openBox" onclick="OpenModal(${element.vId})">
                    <img src="${element.vImage1}" title="${element.vVenue}">
                    <p>${element.vVenue}</p>
                </button>
            </div>
            `;
        });
        showVenueNorth.innerHTML += html;
    });
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
                <button class="openBox" onclick="OpenModal(${element.vId})">
                    <img src="${element.vImage1}" title="${element.vVenue}">
                    <p>${element.vVenue}</p>
                </button>
            </div>
            `;
        });
        showVenueCentral.innerHTML += html;
    });

// ===================================================================================南部

fetch('./text場館.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        const showVenueNorth = document.querySelector('#showVenueSouth')
        let html = ''
        myJson.forEach(element => {


            html += `
            <div class="col-lg-2">
                <button class="openBox" onclick="OpenModal(${element.vId})">
                    <img src="${element.vImage1}" title="${element.vVenue}">
                    <p>${element.vVenue}</p>
                </button>
            </div>
            `;
        });
        showVenueSouth.innerHTML += html;
    });

// ===================================================================================東部

fetch('./text場館.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        const showVenueNorth = document.querySelector('#showVenueEast')
        let html = ''
        myJson.forEach(element => {


            html += `
            <div class="col-lg-2">
                <button class="openBox" onclick="OpenModal(${element.vId})">
                    <img src="${element.vImage1}" title="${element.vVenue}">
                    <p>${element.vVenue}</p>
                </button>
            </div>
            `;
        });
        showVenueEast.innerHTML += html;
    });