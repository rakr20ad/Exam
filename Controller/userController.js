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