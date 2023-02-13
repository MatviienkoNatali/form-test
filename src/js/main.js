"use strict"

const form = document.querySelector('.form');
const required = form.querySelectorAll('.required');
const errorMessage = form.querySelectorAll('.error-message');
const registerBtn = form.querySelector('.register-btn');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const company = document.getElementById('company');

const email = document.getElementById('email');
const filter = /^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9]{2,4})+$/;

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
                    console.log(input.value.length)
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
    email.addEventListener('keydown', function(){
        emailValidation();
    })
};

function emailValidation(){
    if (!filter.test(email.value)) {
        email.style.border = "1px solid #ea4335";
        return false;
    } else {
        email.style.border = "1px solid #E5E5E5";
        if(firstName.value.length >= 3 && lastName.value.length >= 3 && company.value.length >= 3){
            sendJSON();
        }
    }
}

function sendJSON(){
    const xhr = new XMLHttpRequest();
    const url = "http://test/json.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = JSON.stringify({ "name": firstName.value, "lastname": lastName.value, "email": email.value, "company": company.value, });
    xhr.send(data);

    // form.reset();
    // resetForm();
}

function resetForm(){
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });
}

