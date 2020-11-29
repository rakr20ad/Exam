//Husk nu at lave en slet funktion
//Kilde Nicolais video om local storage
/*cconst rememberDiv = document.querySelector('.Husk');*/
const form = document.querySelector('form');
const urGenderInput = document.querySelector('#urGender');
const prefGenderInput = document.querySelector('#prefGender');
const emailInput = document.querySelector('#email');
const firstNameInput = document.querySelector('#firstname');
const lastNameInput = document.querySelector('#lastname');
const passwordInput = document.querySelector('#password');
const birthdayInput = document.querySelector('#birthday');
//
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

