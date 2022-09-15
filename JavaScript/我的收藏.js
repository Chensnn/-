let deleteMemberCollect = [];


function cancelFavorite(el) {
    fetch('./text會員.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            
           
            //console.log(el);                              //得到當下這筆的收藏fId
            console.log(deleteMemberCollect);               //type is object

            myJson.forEach(element => {

                // if (el == element.fId) {                     

                //1.先找出點的是哪個
                //2.如果點的值是strResult其中之一
                //3.就把它刪掉


                // deleteMemberCollect = deleteMemberCollect.filter(function (item) {
                //     return item == strResult
                // })

                // }

            })


        })

}

let html = ''
let collect = [];
let str = '';
let strResult = '';
let favorite = window.localStorage.getItem('userFavorite');   //當下會員的收藏
let mId = window.localStorage.getItem('userID');              //得到當下會員的ID


// console.log(`${mId} favorite is ${favorite}`);

fetch('./text會員.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {


        const tFavorite = document.querySelector('#tFavorite')



        collect.push(favorite);        //展覽放進陣列
        str = collect.toString();      //陣列轉字串
        strResult = str.split(' ');    //作字串切割

        // console.log(strResult);
        // console.log(strResult[1]);
        // console.log(strResult[2]);

        myJson.forEach(element => {


            if (strResult.length > 1 && mId == element.mId) {                         //  確認有收藏才會印出
                for (let i = 0; i < strResult.length; i++) {                          //  用迴圈跑出每個字串

                    html +=
                        `<tr>
                        <td>${strResult[i]}</td>
                        <td><img src="./Images/heart.png" class="heart" onclick="cancelFavorite(${element.fId})"></td>
                    </tr>`
                    deleteMemberCollect = element.eName;
                    // console.log(deleteMemberCollect);
                    // console.log(element.eName);
                }
            }

        });
        tFavorite.innerHTML += html;




        const heart = document.querySelector('.heart')
        $(".heart").click(function () {
            $(this).parent().parent().remove();
        });

    });


