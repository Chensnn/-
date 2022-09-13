$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});


function doFirst() {


    fetch('http://20.249.62.237/api/ExHibition/?id=9')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            //console.log(myJson);

            const activity = document.querySelector('#activity')

            let html = ''

            myJson.forEach(element => {


                html += `
        <div class=" col-md-3 col-sm-4">
              <div class="outer">
                <a href="${element.eLink}">
                    <div class="upper">
                        <img src="${element.eImage1}">
                    </div>
                    <div class="lower">
                        <h3>${element.eName}</h3>
                        <span><i class="fa-solid fa-location-dot"></i>${element.vVenue}</span>
                        <br>
                        <span><i class="fa-regular fa-clock"></i>${element.eStartTime}</span>
                    </div>
                </a>
            </div>
        </div>  `;
            });
            activity.innerHTML += html;
        });


    fetch('./text首頁場館.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);

            const activity = document.querySelector('#place')


            let html = ''
            myJson.forEach(element => {

                html += `
            <div class="col-6 col-md-2 col-sm-6 col-xs-6 card ">
            <a href="#">
                <div>
                    <img src="${element.場館圖片}"...">
                </div>
                <h4>${element.場館名稱}</h4>
            </a>
            </div>`;
            });
            place.innerHTML += html;

        });

}

window.addEventListener('load', doFirst)



// rwd的Js

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




