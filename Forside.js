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