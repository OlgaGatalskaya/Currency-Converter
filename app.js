let inputRub = document.getElementById('rub'),
    inputEuro = document.getElementById('euro');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("GET", "current.json");
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        
            request.onload = function() {
                if(request.readyState === 4) {
                        if(request.status == 200) {
                            resolve(this.response)
                        }
                        else {
                            reject();
                        
                        }
                }
            }
        });
    };

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputEuro.value = inputRub.value / data.euro;
    })
    .then(() => console.log(5000))
    .catch(() => inputEuro.value = "Mistake")


});

    