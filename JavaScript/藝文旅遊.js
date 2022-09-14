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
            </div>
            </p>`


            }

            vVenueText.innerHTML = html;

        });

        }