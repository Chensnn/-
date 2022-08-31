function doFirst(){



    fetch('./text.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);

                const table = document.querySelector('#showInfo')


                let html = ''
                myJson.forEach(element => {
                    html += `
                            <div class="container">
                                <div class="column">
                                    <div class="divPic">
                                        <a href="#"><img src="${element.展演圖片}"></a>
                                    </div>
                                    <div class="col-12">
                                        <p>展演名稱<i class="fi fi-brands-patreon"></i>${element.展演名稱}</p>
                                        <p>場館名稱<i class="fi fi-brands-patreon"></i>${element.場館名稱}</p>
                                        <p>展演類型<i class="fi fi-brands-patreon"></i>${element.展演類型}</p>
                                        <p>開始日期<i class="fi fi-brands-patreon"></i>${element.開始日期}</p>
                                        <p>結束日期<i class="fi fi-brands-patreon"></i>${element.結束日期}</p>
                                        <p>展演時間<i class="fi fi-brands-patreon"></i>${element.展演時間}</p>
                                        <p>展演票價<i class="fi fi-brands-patreon"></i>${element.票價}</p>
                                        <hr>
                                    </div>
                                </div>
                             </div>
                            `;
                });

                table.innerHTML += html;
            });






}

window.addEventListener('load',doFirst)