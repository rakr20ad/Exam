//Husk nu at lave en slet funktion
//Kilde Nicolais video om local storage
// "const rememberDiv = document.querySelector('.Husk');" Dette viste Nicolai i "local storage" videoen, men denne løsning har fungeret for mig
//const User = require("../Model/User");

//const fs = require('fs')

const submitBtn = document.getElementById('submit').addEventListener("click", virkNuMand)
form.addEventListener('submit', function(e){
    e.preventDefault();
})

function virkNuMand(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let dateOfBirth = document.getElementById("birthday").value; 
    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value; 
    let urGender = document.getElementById("urGender").value; 
    let prefGender = document.getElementById("prefGender").value; 

    //Laver newUser som et objekt til hvordan jeg gerne vil have det opstillet i localstorage
    let newUser = {
        firstname : firstName,
        lastName : lastName,
        dateOfBirth : dateOfBirth,
        email : email, 
        password : password, 
        urGender : urGender, 
        prefGender : prefGender

    }  
    
var value = JSON.stringify([newUser.firstName, newUser.lastName, newUser.dateOfBirth, newUser.email, newUser.password, newUser.urGender, newUser.prefGender]);
localStorage.setItem("newUser", value); 
var createdUser = JSON.parse(localStorage.getItem("newUser")); 
var addUser = JSON.stringify(createdUser); 
//fs.writeFileSync('../Data/users.json', addUser)
//var count = getCount(); Metode vi fandt på nettet
localStorage.setItem("newUser_"+ firstName, JSON.stringify(newUser))
}

//module.exports = virkNuMand; 

//fs.writeFileSync('../Model/users.json', JSON.stringify(newUser))
/*
// kan sgu ikke finde ud af at rykke mappen med succes, så storage er sgu bare her ah. 
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

//var userArray = []; 
function saveStorage(){
    /*var value = JSON.stringify([urGenderInput.value, prefGenderInput.value, emailInput.value, firstNameInput.value, lastNameInput.value, passwordInput.value, birthdayInput.value]);
    localStorage.setItem("newUser", localStorage); 
    localStorage.setItem('urGender', urGenderInput.value)
    localStorage.setItem('prefGender', prefGenderInput.value)
    localStorage.setItem('email', emailInput.value)
    localStorage.setItem('firstName', firstNameInput.value)
    localStorage.setItem('lastName', lastNameInput.value)
    localStorage.setItem('password', passwordInput.value)
    localStorage.setItem('birthday', birthdayInput.value) 
}
*/







/*
var userArray = [];
var value = JSON.stringify([urGenderInput.value, prefGenderInput.value, emailInput.value, firstNameInput.value, lastNameInput.value, passwordInput.value, birthdayInput.value]);
localStorage.setItem("newUser", localStorage); 
var createdUser = JSON.parse(localStorage.getItem('"newUser"')); 
var addUser = JSON.stringify(createdUser); 
localStorage.setItem("newUser_"+firstName, JSON.stringify("newUser"))
userArray.push("newUser")*/

/*
var value = JSON.stringify([user.name, user.lastName, user.Password, user.Birthday, user.Gender, user.Mail]);
localStorage.setItem("newUser", value);
var createdUser = JSON.parse(localStorage.getItem("newUser"));
//createdUser.push(new User (user.name, user.lastName, user.Birthday, user.Gender, user.Mail));
var addUser = JSON.stringify(createdUser);
localStorage.setItem("newUser_"+fname, JSON.stringify(user))
*/

//Kunne have brugt denne metode ish, til at gemme nyregistreret brugere. 
/*var userArray = [];
function saveStorage(){
document.addEventListener('DOMContentLoaded', function (){

    let button = document.getElementById('submit'); 

    button.addEventListener('click', function(){
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let dateOfBirth = document.getElementById("birthday").value; 
        let email = document.getElementById("email").value; 
        let password = document.getElementById("password").value; 
        let urGender = document.getElementById("urGender").value; 
        let prefGender = document.getElementById("prefGender").value; 

        let newUser = {
            firstname : firstName,
            lastName : lastName,
            dateOfBirth : dateOfBirth,
            email : email, 
            password : password, 
            urGender : urGender, 
            prefGender : prefGender

            
        }
        userArray.push(newUser)
    })
})
}*/



/*
var userArray = [];

function register(){ 
    var firstName = document.getElementById('firstname').value; 
    var lastName = document.getElementById('lastname').value; 
    var dateOfBirth = document.getElementById('birthday').value; 
    var email = document.getElementById('email').value; 
    var password = document.getElementById('password').value; 
    var urGender = document.getElementById('urGender').value; 
    var prefGender = document.getElementById('prefGender').value; 

var newUser = {
    firstname: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    email: email, 
    password: password, 
    urGender: urGender, 
    prefGender: prefGender

    //userArray.push(newUser)
    
}
} */



/*function nameDisplayCheck(){
    if(localStorage.getItem('firstname')){
        let firstname = localStorage.getItem('firstname');
    }
}*/


//Hukket fra assignment 4. og det sidste vi skal tænke på lige pt. 
document.getElementById("password").addEventListener("keyup", function(){
    console.log(password.value);
    if (password.value.length <= 8){
        //Refererer til paragraffen
        document.getElementById("Try again please").innerHTML = "Must contain 8 or more characters"
    }
    else {
        document.getElementById("Try again please").innerHTML = ""
    }
}
)

document.getElementById("password").addEventListener("keyup", function(){
    console.log(password.value);
    if (password.value.search (/[A-Z]/) == -1){
        document.getElementById("capital").innerHTML = "Must contain at least one capital letter"
    }
    else {
        document.getElementById("capital").innerHTML = ""
    }
}
)

document.getElementById("password").addEventListener("keyup", function(){
    console.log(password.value);
    if (password.value.search (/[a-z]/) == -1){
        document.getElementById("sl").innerHTML = "Must contain at least one small letter"
    }
    else {
        document.getElementById("sl").innerHTML = ""
    }
}
)

document.getElementById("password").addEventListener("keyup", function(){
    console.log(password.value);
    if (password.value.search (/[0-9]/) == -1){
        document.getElementById("number").innerHTML = "Must contain at least one number"
    }
    else {
        document.getElementById("number").innerHTML = ""
    }
}
)

document.getElementById("email").addEventListener("keyup", function(){
    console.log(email.value);
    if (email.value.search ("@")==-1) {
        document.getElementById("@").innerHTML = "Wrong email: @ is required"
    }
    else {
        document.getElementById("@").innerHTML = ""
    }
}
)

