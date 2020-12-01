/* BRUG DETTE TIL LOG IN KNAPPEN!
const { get } = require("http");

//This line in the example above creates an XMLHttpRequest object
var xhttp = new XMLHttpRequest (); 

//The onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //typical action to be peformed when the document is ready
        document.getElementById("submit").innerHTML = xhttp.responseText;
    }
    };
xhttp.open("GET", "filename", true);
xhttp.send();*/

/*
var value = JSON.stringify([User.firstName, User.lastName, User.password, User.birthday, User.urGender, User.prefGender, User.mail]);
localStorage.setItem("newUser", value);

var createdUser = JSON.parse(localStorage.getItem("newUser"));

//createdUser.push(new User (user.name, user.lastName, user.Birthday, user.Gender, user.Mail));
var addUser = JSON.stringify(createdUser);
localStorage.setItem("newUser_"+firstName, JSON.stringify(User));
*/

//const User = require('../Model/User')


// Kilde: står inde under server.js
/*const userRoutes = (app, fs) => {}
    // variables 
   const dataPath = "./Data/users.json";

    //read: Den første metode jeg brugte, men koden nedenfor er den refactored metode, som gør det lettere
    app.get('/users', (req, res) =>{
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err){
                throw err; 
            }

            res.send(JSON.parse(data));
        })
    })
  }
// refactored helper methods

const readFile = (
  callback,
  returnJson = false,
  filePath = dataPath,
  encoding = 'utf8'
) => {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err;
    }

    callback(returnJson ? JSON.parse(data) : data);
  });
};

const writeFile = (
  fileData,
  callback,
  filePath = dataPath,
  encoding = 'utf8'
) => {
  fs.writeFile(filePath, fileData, encoding, err => {
    if (err) {
      throw err;
    }

    callback();
  });
};

// READ
// Notice how we can make this 'read' operation much more simple now.
app.get('/users', (req, res) => {
  readFile(data => {
    res.send(data);
  }, true);
});

};

 
module.exports = userRoutes; 
*/