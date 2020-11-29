//Husk nu at lave en slet funktion
//Kilde Nicolais video om local storage
// "const rememberDiv = document.querySelector('.Husk');" Dette viste Nicolai i "local storage" videoen, men denne løsning har fungeret for mig
const form = document.querySelector('form');
const urGenderInput = document.querySelector('#urGender');
const prefGenderInput = document.querySelector('#prefGender');
const emailInput = document.querySelector('#email');
const firstNameInput = document.querySelector('#firstname');
const lastNameInput = document.querySelector('#lastname');
const passwordInput = document.querySelector('#password');
const birthdayInput = document.querySelector('#birthday');
// Ikke præcist som vist i Nicolais video, men denne ændring fik det til at fungere + at localstorage.setItem til én funktion
const submitBtn = document.querySelector('#submit').addEventListener("click", saveStorage)


form.addEventListener('submit', function(e){
    e.preventDefault();
});

function saveStorage(){
    localStorage.setItem('urGender', urGenderInput.value)
    localStorage.setItem('prefGender', prefGenderInput.value)
    localStorage.setItem('email', emailInput.value)
    localStorage.setItem('firstName', firstNameInput.value)
    localStorage.setItem('lastName', lastNameInput.value)
    localStorage.setItem('password', passwordInput.value)
    localStorage.setItem('birthday', birthdayInput.value)
}

/*function nameDisplayCheck(){
    if(localStorage.getItem('firstname')){
        let firstname = localStorage.getItem('firstname');
    }
}*/

