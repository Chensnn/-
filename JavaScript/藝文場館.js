fetch('./text場館.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        const showVenueNorth = document.querySelector('#showVenueNorth')
        let html = ''
        myJson.forEach(element => {

            html += `
            <div class="col-lg-2">
                <button class="openBox" onclick="OpenModal()">
                    <img src="${element.場館圖片}" title="${element.場館名稱}">
                    <p>${element.場館名稱}</p>
                </button>
            </div>
            
            `;
        });
        showVenueNorth.innerHTML += html;
    });
function OpenModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'block'
}
function CloseModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'none'
}
