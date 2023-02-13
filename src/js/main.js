"use strict"

const form = document.querySelector('.form');
const required = form.querySelectorAll('.required');
const errorMessage = form.querySelectorAll('.error-message');
const registerBtn = form.querySelector('.register-btn');

const email = document.getElementById('email');
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if(errorMessage){
    errorMessage.forEach(text =>{
        text.style.display = "none";
    })
}
function submitForm(){
    registerBtn.addEventListener('click', function(){
        if(form){
            checkEmailValidation();
            required.forEach(input => {
                const parent = input.closest('.form__group');

                if(input.value.length < 3){
                    parent.classList.add('error');
                }else {
                    parent.classList.remove('error');
                }
                input.addEventListener('keyup', function (){
                    if(input.value.length >= 3){
                        parent.classList.remove('error');
                    }
                })
            })
        }
    })
}submitForm();

function checkEmailValidation() {
    emailValidation();
    email.addEventListener('keyup', function(){
        emailValidation();
    })
};

function emailValidation(){
    if (!filter.test(email.value)) {
        email.style.border = "1px solid #ea4335";
        return false;
    }else {
        email.style.border = "1px solid #E5E5E5";
    }
}

function sendJSON(){
    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        fetch('http://test.json', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        form.reset();
    })
}sendJSON();

