fetch('./text.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        const table = document.querySelector('#showInfoBk')

        let html = ''
        myJson.forEach(element => {
            html += `
    
    
            <div class="col-lg-3">
                <figure>
                    <div class="imgCard">
                        <img src="${element.展演圖片}">
                        <div class="overlay">
                            <div class="text">
                                <p>${element.展演介紹}</p>
                            </div>
                        </div>
                        <a href="${element.購票連結}" title="前往購票"><figcaption>${element.場館名稱}</br>${element.展演名稱}</figcaption></a>
                    </div>
                </figure>
            </div>`
        });
        table.innerHTML += html;
    });



// ==============利用選單的值去跑對應的資料=======================

let searchbtn = document.getElementById('searchbtn')

let area = ["北部", "中部", "南部", "東部"]

let vVenue = new Array();

vVenue[0] = ["城市舞台", "大稻埕戲苑", "文山劇場", "台北小巨蛋", "傳音樂展演空間", "華山1914文創園區", "松山文創園區", "台北當代藝術館", "花博公園流行館", "臺北市立美術館", "中正紀念堂", "臺灣當代文化實驗場 C-LAB", "臺灣科學教育館", "新北市藝文中心", "新板藝廊", "桃園展演中心", "A8藝文中心", "中壢藝術館"];

// let northVenue = ["城市舞台", "大稻埕戲苑", "文山劇場", "台北小巨蛋", "傳音樂展演空間", "華山1914文創園區", "松山文創園區", "台北當代藝術館", "花博公園流行館", "臺北市立美術館", "中正紀念堂", "臺灣當代文化實驗場 C-LAB", "臺灣科學教育館", "新北市藝文中心", "新板藝廊", "桃園展演中心", "A8藝文中心", "中壢藝術館"]

vVenue[1] = ["文化部文化資產園區（台中文創園區）", "國立台灣美術館", "科元藝術", "臺中國家歌劇院", "港區藝術中心", "屯區藝文中心", "葫蘆墩文化中心", "臺中市大墩文化中心", "臺中市中山堂"];

// let centralVenue = ["文化部文化資產園區（台中文創園區）", "國立台灣美術館", "科元藝術", "臺中國家歌劇院", "港區藝術中心", "屯區藝文中心", "葫蘆墩文化中心", "臺中市大墩文化中心", "臺中市中山堂"]

vVenue[2] = ["臺南市美術館2館", "臺南市美術館1館", "台南市立文化中心", "奇美博物館", "國立臺灣歷史博物館", "國立台灣文學館", "臺南文化創意產業園區", "高雄市立歷史博物館", "國立科學工藝博物館", "駁二藝術特區", "高雄巨蛋", "高雄國家體育場", "高雄市立美術館", "高雄展覽館"];

// let southNVenue = ["臺南市美術館2館", "臺南市美術館1館", "台南市立文化中心", "奇美博物館", "國立臺灣歷史博物館", "國立台灣文學館", "臺南文化創意產業園區", "高雄市立歷史博物館", "國立科學工藝博物館", "駁二藝術特區", "高雄巨蛋", "高雄國家體育場", "高雄市立美術館", "高雄展覽館"]

vVenue[3] = ["金車文藝中心", "宜蘭傳藝園區", "維納斯藝廊", "臺東表演藝術館", "鐵花村音樂聚落慢市集", "臺東生活美學館", "台東藝文活動中心"];

// let eastVenue = ["金車文藝中心", "宜蘭傳藝園區", "維納斯藝廊", "臺東表演藝術館", "鐵花村音樂聚落慢市集", "臺東生活美學館", "台東藝文活動中心"]




// 先選地區後select選單跳出場館名稱


const selectSection = document.getElementById('selectSection')
var inner = "";
for (var i = 0; i < area.length; i++) {

    inner = inner + '<option value=' + i + '>' + area[i] + '</option>';
}
selectSection.innerHTML = inner;

// 在html裡有幫第一個select加change事件，發生後就會執行以下的函式
// 問題 為什麼函式都先寫在前面，後面才寫事件

function changeVenvu(index) {

    var Sinner = "";
    for (var i = 0; i < vVenue[index].length; i++) {

        Sinner = Sinner + '<option value=' + i + '>' + vVenue[index][i] + '</option>';
    }

    const selectExhibition = document.getElementById('selectExhibition')
    selectExhibition.innerHTML = Sinner;
}

changeVenvu(document.getElementById('selectSection').selectedIndex);





// =====================================================



searchbtn.addEventListener('click', showText)
function showText() {

    const selectSection = document.querySelector('#selectSection')
    const selectExhibition = document.querySelector('#selectExhibition')
    const startTime = document.querySelector('#startTime')
    const endTime = document.querySelector('#endTime')

    // selectedIndex取第幾筆的值
    // 地區
    let textSection = selectSection.value
    console.log(textSection);

    // 類型
    let textExhibition = selectExhibition.value
    console.log(textExhibition);

    //開始日期
    let textStartTime = startTime.value
    console.log(textStartTime);

    //結束日期
    let textEndTime = endTime.value
    console.log(textEndTime);

}


