const submitButton = document.getElementById('submitButton');
const email = document.querySelector('#email-input');
const emailDiv = document.querySelector('#email');

function emailIsValid (event) {
    let test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    if (test) {
        alert('Thank you for submitting your e-mail. Stay tuned!');
    }

    else {
        if (!document.querySelector('.error')) {
        let newImg = document.createElement('img');
        newImg.src = "./images/icon-error.svg";
        newImg.className = 'error';
        document.getElementById('email').appendChild(newImg);

        let newDiv = document.createElement('div');
        newDiv.innerText = 'Please provide a valid email';
        newDiv.className = 'alert';
        document.getElementById('text').appendChild(newDiv);
        document.getElementById('email-input').style.border = "1px solid hsl(0, 93%, 68%)";
        event.preventDefault()
            }
        }
    }


function submit () {

}

submitButton.addEventListener('click', emailIsValid);


