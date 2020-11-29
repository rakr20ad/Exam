//Kunne have lavet de forskellige elementer i hver sin fil, og så eksportere filerne videre til en "hardUser"


class user{
    constructor(firstName, lastName, dateOfBirth, email, password, image, interest){
        this.firstName = firstName;
        this.lastName = lastName; 
        this.dateOfBirth = dateOfBirth; 
        this.email = email; 
        this.password = password; 
        this.image = image; 
        this.interest = interest;
    }
} 

module.exports = user; 

