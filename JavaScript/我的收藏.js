let deleteMemberCollect = [];
let _data = {};

function cancelFavorite(el) {
    _data = { fId: el }

    fetch(`http://20.249.62.237/api/Favorite`, {
        method: "DELETE",
        body: JSON.stringify(_data),
        headers: { 'content-type': 'application/json' },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {


            //console.log(el);                              //得到當下這筆的收藏fId
            console.log(deleteMemberCollect);               //type is object
        })

}

let html = ''
let collect = [];
let str = '';
let strResult = '';
let favorite = window.localStorage.getItem('userFavorite');   //當下會員的收藏
let mId = window.localStorage.getItem('userID');              //得到當下會員的ID
const tFavorite = document.querySelector('#tFavorite')

// console.log(`${mId} favorite is ${favorite}`);
// ./text會員.json
fetch("http://20.249.62.237/api/Favorite")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        myJson.forEach(element => {
            if (mId == element.mId) {

                let elementEname = element.eName
                console.log(elementEname);
                for (let i = 0; i < 1; i++) {
                    html +=
                        `<tr>
                        <td><i class="fi fi-ss-angle-circle-right"></i>${elementEname}</td>
                        <td><img src="./Images/heart.png" class="heart" onclick="cancelFavorite(${element.fId})"></td>
                    </tr>`
                }
            }
        })
        tFavorite.innerHTML += html;




        const heart = document.querySelector('.heart')
        $(".heart").click(function () {
            $(this).parent().parent().remove();
        });


    });



//==============================================================================================================
        // collect.push(favorite);        //展覽放進陣列
        // str = collect.toString();      //陣列轉字串
        // strResult = str.split(' ');    //作字串切割

        // console.log(strResult);
        // console.log(strResult[1]);
        // console.log(strResult[2]);

        // myJson.forEach(element => {


        //     if (strResult.length > 1 && mId == element.mId) {                         //  確認有收藏才會印出
        //         for (let i = 0; i < strResult.length; i++) {                          //  用迴圈跑出每個字串

        //             html +=
        //                 `<tr>
        //                 <td><i class="fi fi-ss-angle-circle-right"></i>${strResult[i]}</td>
        //                 <td><img src="./Images/heart.png" class="heart" onclick="cancelFavorite(${element.fId})"></td>
        //             </tr>`
        //             deleteMemberCollect = element.eName;
        //             // console.log(deleteMemberCollect);
        //             // console.log(element.eName);
        //         }
        //     }

        // });
        // tFavorite.innerHTML += html;




        // const heart = document.querySelector('.heart')
        // $(".heart").click(function () {
        //     $(this).parent().parent().remove();
        // });

//==============================================================================================================


