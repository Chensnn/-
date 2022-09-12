
//藝文活動北部 All展覽 tExHibition db
fetch('./text.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        const table = document.querySelector('#showInfoNorth')

        let html = ''
        myJson.forEach(element => {
            html += `
                            <div class="container">
                                <div class="column">
                                    <div class="divPic">
                                        <a href="#"><img src="${element.eImage1}"></a>
                                        <img src="./Images/emptyheart.png" class="heart" onclick="showHeart(${element.eId})">
                                    </div>
                                    <div class="col-12">
                                        <p>展演名稱<i class="fi fi-brands-patreon"></i>${element.eName}</p>
                                        <p>場館名稱<i class="fi fi-brands-patreon"></i>${element.eVenue}</p>
                                        <p>展演類型<i class="fi fi-brands-patreon"></i>${element.eGenre}</p>
                                        <p>開始日期<i class="fi fi-brands-patreon"></i>${element.eStartTime}</p>
                                        <p>結束日期<i class="fi fi-brands-patreon"></i>${element.eEndTime}</p>
                                        <p>展演時間<i class="fi fi-brands-patreon"></i>${element.eTime}</p>
                                        <p>展演票價<i class="fi fi-brands-patreon"></i>${element.ePrice}</p>
                                        <p>購票連結<i class="fi fi-brands-patreon"></i><a href="${element.eLink}" title="前往購票">${element.eLink}</a></p>
                                        <hr>
                                    </div>
                                </div>
                             </div>
                            `;


            console.log(`${element.eId}`);


        });
        table.innerHTML += html;





    });




function showHeart(el) {

    const heart = document.querySelector('.heart')
    heart.src = "./Images/heart.png";
    console.log(el);

}



