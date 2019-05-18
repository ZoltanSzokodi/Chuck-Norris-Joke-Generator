document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    // GETTING THE INPUT NUMBER FOR NUMBER OF JOKES
    const number = document.querySelector('input[type="number"]').value;

    // CREATING A NEW XHR INTANCE
    const xhr = new XMLHttpRequest();

    // FETCHING THE DATA ACCORDING TO THE NUMBER INPUT
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

    // PROCESSING THE RETURNED DATA
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if(response.type === 'success') {
                response.value.forEach(x => {
                    output += `<li>${x.joke}</li>`
                })
            } else {
                output += '<li>Something went wrong</li>';
            }

            // DISPLAYING THE DATA
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}