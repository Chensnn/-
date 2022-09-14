// 北中東南各四筆資料  tExHibition db

// ====================================================================================北
fetch(' http://20.249.62.237/api/ExHibition/?id=1')
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
                        <img src="${element.eImage1}">
                    </div>
                    <div class="flip-card-back">
                        <div class="card-back-text">
                            <h5>${element.eName}</br>${element.vVenue}</h5>
                            <p>${(element.eStartTime).slice(0,10)}</p>
                            <p>${(element.eEndTime).slice(0,10)}</p>
                            <p>${element.vVenue}</p>
                            <h5><i class="fi fi-rr-download"></i></h5>
                            <p><a href="${element.eLink}" title="連結售票網站">購票入口</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
            `
        });
        table.innerHTML += html;
    });
// ====================================================================================中

fetch(' http://20.249.62.237/api/ExHibition/?id=2')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        const table = document.querySelector('#CentralCard')

        let html = ''
        myJson.forEach(element => {
            html += `
            
        <div class="col-lg-3">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="${element.eImage1}">
                    </div>
                    <div class="flip-card-back">
                        <div class="card-back-text">
                            <h5>${element.eName}</br>${element.vVenue}</h5>
                            <p>${(element.eStartTime).slice(0,10)}</p>
                            <p>${(element.eEndTime).slice(0,10)}</p>
                            <p>${element.vVenue}</p>
                            <h5><i class="fi fi-rr-download"></i></h5>
                            <p><a href="${element.eLink}" title="連結售票網站">購票入口</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
            `
        });
        table.innerHTML += html;
    });


// ====================================================================================南
fetch(' http://20.249.62.237/api/ExHibition/?id=3')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        const table = document.querySelector('#SouthCard')

        let html = ''
        myJson.forEach(element => {
            html += `
            
        <div class="col-lg-3">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="${element.eImage1}">
                    </div>
                    <div class="flip-card-back">
                        <div class="card-back-text">
                            <h5>${element.eName}</br>${element.vVenue}</h5>
                            <p>${(element.eStartTime).slice(0,10)}</p>
                            <p>${(element.eEndTime).slice(0,10)}</p>
                            <p>${element.vVenue}</p>
                            <h5><i class="fi fi-rr-download"></i></h5>
                            <p><a href="${element.eLink}" title="連結售票網站">購票入口</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
            `
        });
        table.innerHTML += html;
    });

// ====================================================================================東
fetch('http://20.249.62.237/api/ExHibition/?id=4')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        const table = document.querySelector('#EastCard')

        let html = ''
        myJson.forEach(element => {
            html += `
            
        <div class="col-lg-3">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="${element.eImage1}">
                    </div>
                    <div class="flip-card-back">
                        <div class="card-back-text">
                            <h5>${element.eName}</br>${element.vVenue}</h5>
                            <p>${(element.eStartTime).slice(0,10)}</p>
                            <p>${(element.eEndTime).slice(0,10)}</p>
                            <p>${element.vVenue}</p>
                            <h5><i class="fi fi-rr-download"></i></h5>
                            <p><a href="${element.eLink}" title="連結售票網站">購票入口</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
            `
        });
        table.innerHTML += html;
    });
