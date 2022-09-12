


fetch('./text.我的收藏.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {


        const tFavorite = document.querySelector('#tFavorite')
        let html = ''
        
        myJson.forEach(element => {

            html += `
           
                <tr>
                    <td>${element.eName}</td>
                    <td><img src="./Images/heart.png" class="heart"></td>
                 </tr>`

            
        });
        tFavorite.innerHTML += html;

        const heart = document.querySelector('.heart')
        $(".heart").click(function () {
            $(this).parent().parent().remove();
        });



    });


