//Kunne have lavet de forskellige elementer i hver sin fil, og så eksportere filerne videre til en "hardUser"

//https://www.youtube.com/watch?v=yzpxUB126YE&ab_channel=VasudevKumaran SE DENNE!
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
module.exports = User; 



