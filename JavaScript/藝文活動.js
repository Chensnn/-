fetch('./text.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        const table = document.querySelector('#NorthCard')

        let html = ''
        myJson.forEach(element => {
            html += `
            
        <div class="col-lg-3">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="${element.展演圖片}">
                    </div>
                    <div class="flip-card-back">
                        <div class="card-back-text">
                            <h6>${element.展演名稱}</h6>
                            <p>${element.開始日期}</p>
                            <p>${element.結束日期}</p>
                            <p>展演類型:${element.展演類型}</p>
                            <p>展演地點:${element.場館名稱}</p>
                            <h5><i class="fi fi-rr-download"></i></h5>
                            <p><a href="${element.購票連結}" title="連結售票網站">購票入口</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
            `
        });
        table.innerHTML += html;
    });