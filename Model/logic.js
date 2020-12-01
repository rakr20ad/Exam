/*
var userArray = [];

function register(){ 
    let firstName = document.getElementById('firstname').value; 
    let lastName = document.getElementById('lastname').value; 
    let dateOfBirth = document.getElementById('birthday').value; 
    let email = document.getElementById('email').value; 
    let password = document.getElementById('password').value; 
    let urGender = document.getElementById('urGender').value; 
    let prefGender = document.getElementById('prefGender').value; 

let newUser = {
    firstname : firstName,
    lastName : lastName,
    dateOfBirth : dateOfBirth,
    email : email, 
    password : password, 
    urGender : urGender, 
    prefGender : prefGender

    
}
} 
 */




/*function nameDisplayCheck(){
    if(localStorage.getItem('firstname')){
        let firstname = localStorage.getItem('firstname');
    }
}*/

/*
var userArray = [];
document.addEventListener('DOMContentLoaded', function(){

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
*/

/*
// Hvis Emilias kode ikke virker, så fortsæt evt med dette
// Vi vil kun gøre noget, hvis dom'en er loadet 
document.addEventListener("DOMContentLoaded", function(){

//Finder "button" i dom'en
let button = document.getElementById("submit"); 

button.addEventListener("click", function(){
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let dateOfBirth = document.getElementById("birthday").value; 
    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value; 
    let urGender = document.getElementById("urGender").value; 
    let prefGender = document.getElementById("prefGender").value;
    
    //laver user til et objekt, som skal pushes ind i et array: /Bare lige en tanke, prøv det af!/
    //Prøv nu bare at få det til at fungere!
    let newUser = {
        firstname : firstName,
        lastName : lastName,
        dateOfBirth : dateOfBirth,
        email : email, 
        password : password, 
        urGender : urGender, 
        prefGender : prefGender
    }}
  
    //Anden måde at gøre det på
    //new User(firstName, lastName, dateOfBirth, email, password, urGender, prefGender); 
});
*/


/*
//Også en måde at gøre det på. 
let apiButton = document.getElementById("submit");
    apiButton.addEventListener("click", function(){
        var xhttp = new XMLHttpRequest();
        //betyder når readystate skifter, sker der noget
        xhttp.onreadystatechange = function() {
            //4 er done, https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
            //status 200 er ok, alt gik fint
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                //når man får svar fra serveren. 
                alert(xhttp.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:8080", true);
        xhttp.send();
    })});
*/





/* evt. løsning til løsningsovervejselser 
const User = require('./Model/User')

//var userArray = []; 
function addNewUser(req, res){
    localStorage.getItem('#firstname')
    localStorage.getItem('#lastname')
    localStorage.getItem('#email')
}

let user = new User(localStorage.getItem('#firstname'), localStorage.getItem('#lastname')); 
let userArray = []; 
userArray.push(user); 

function user(req, res){
    const user = new User(req.body.User)
    User.push.to.Data(user)
    res.sendStatus(200); 
}

console.log(User)*/