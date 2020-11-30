//Kunne have lavet de forskellige elementer i hver sin fil, og så eksportere filerne videre til en "hardUser"


class User{
    constructor(firstName, lastName, dateOfBirth, email, password, urGender, prefGender){
        this.firstName = firstName;
        this.lastName = lastName; 
        this.dateOfBirth = dateOfBirth; 
        this.email = email; 
        this.password = password; 
        this.urGender = urGender; 
        this.prefGender = prefGender;
    }
} 

//module.exports = User; 

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
    
    let newUser = {
        firstname : firstName,
        lastName : lastName,
        dateOfBirth : dateOfBirth,
        email : email, 
        password : password, 
        urGender : urGender, 
        prefGender : prefGender
    }
    console.log(newUser)
    //Anden måde at gøre det på
    //new User(firstName, lastName, dateOfBirth, email, password, urGender, prefGender); 
});



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
