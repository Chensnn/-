


fetch('./text.我的收藏.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        let count = 0;
        const tFavorite = document.querySelector('#tFavorite')
        let html = ''
        
        myJson.forEach(element => {
            count++
            html += `
                <tr>
                    <td>${count}${element.eName}</td>
                    <td><img src="./Images/heart.png" class="heart"></td>
                 </tr>`

        });
        tFavorite.innerHTML += html;

        const heart = document.querySelector('.heart')

        heart.addEventListener('click', () => {
            heart.src = "./Images/emptyheart.png";

        })


    });

