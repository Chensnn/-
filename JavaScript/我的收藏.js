


fetch('./text.我的收藏.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {


        const tFavorite = document.querySelector('#tFavorite')

        let html = ''
        let collect = [];
        let str = '';
        let strResult = '';

        myJson.forEach(element => {

            collect.push(element.eName);        //展覽放進陣列
            str = collect.toString();           //陣列轉字串
            strResult = str.split(' ');         //作字串切割

            // console.log(strResult[0]);
            // console.log(strResult[1]);
            // console.log(strResult[2]);


           
            if (element.eName.length > 1) {                     //確認有收藏才會印出

                for (let i = 0; i < strResult.length; i++) {    //  用迴圈跑出每個字串

                    html += `
                    <tr>
                        <td>${strResult[i]}</td>
                        <td><img src="./Images/heart.png" class="heart"></td>
                    </tr>`

                }

            }


        });
        tFavorite.innerHTML += html;

        const heart = document.querySelector('.heart')
        $(".heart").click(function () {
            $(this).parent().parent().remove();
        });
    });


