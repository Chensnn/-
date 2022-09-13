
//藝文活動南部 All展覽 tExHibition db
    fetch('http://20.249.62.237/api/ExHibition/?id=7')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
              
                const table = document.querySelector('#showInfoSouth')

                let html = '';
                let subStartDate='';
                let subEndDate='';
                myJson.forEach(element => {
                    if(element.eStartTime.length>10 || element.eEndTime.length>10){
                        subStartDate = element.eStartTime.slice(0,10)
                        subEndDate = element.eEndTime.slice(0,10)
                    }
                    html += `
                            <div class="container">
                                <div class="column">
                                    <div class="divPic">
                                        <a href="#"><img src="${element.eImage1}"></a>
                                        <img src="./Images/emptyheart.png" class="heart">
                                    </div>
                                    <div class="col-12">
                                        <p>展演名稱<i class="fi fi-brands-patreon"></i>${element.eName}</p>
                                        <p>場館名稱<i class="fi fi-brands-patreon"></i>${element.vVenue}</p>
                                        <p>展演類型<i class="fi fi-brands-patreon"></i>${element.eGenre}</p>
                                        <p>開始日期<i class="fi fi-brands-patreon"></i>${subStartDate}</p>
                                        <p>結束日期<i class="fi fi-brands-patreon"></i>${subEndDate}</p>
                                        <p>展演時間<i class="fi fi-brands-patreon"></i>${element.eTime}</p>
                                        <p>展演票價<i class="fi fi-brands-patreon"></i>${element.ePrice}</p>
                                        <p>購票連結<i class="fi fi-brands-patreon"></i><a href="${element.eLink}" title="前往購票">${element.eLink}</a></p>
                                        <hr>
                                    </div>
                                </div>
                             </div>
                            `;
                });
                table.innerHTML += html;

                const heart = document.querySelector('.heart')
                $(".heart").click(function () {
                    $(this).attr('src', './Images/heart.png');
                });
                $(".heart").dblclick(function () {
                    $(this).attr('src', './Images/emptyheart.png');
                });
            });





