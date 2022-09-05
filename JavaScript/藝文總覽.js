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