fetch('./text.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
              
                const table = document.querySelector('#showInfo')

                let html = ''
                myJson.forEach(element => {
                    html += ``;
                });
                table.innerHTML += html;
            });