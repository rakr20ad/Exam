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

// Kilde: står inde under server.js
/*const userRoutes = (app, fs) => {
    // variables 
    const dataPath = './Data/users.json';

    //read 
    /*app.get('/users', (req, res) =>{
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err){
                throw err; 
            }

            res.send(JSON.parse(data));
        })
    })

  // refactored helper methods. Dette er omskrevet af koden ovenover. Gør det lettere
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
// CREATE
app.post('/users', (req, res) => {
    readFile(data => {
      const newUserId = Object.keys(data).length + 1;
  
      // add the new user
      data[newUserId] = req.body;
  
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('new user added');
      });
    }, true);
  });
  // UPDATE
app.put('/users/:id', (req, res) => {
  readFile(data => {
    // add the new user
    const userId = req.params['id'];
    data[userId] = req.body;

    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send(`users id:${userId} updated`);
    });
  }, true);
});
  // DELETE
app.delete('/users/:id', (req, res) => {
  readFile(data => {
    // add the new user
    const userId = req.params['id'];
    delete data[userId];

    writeFile(JSON.stringify(data, null, 2), () => {
      res.status(200).send(`users id:${userId} removed`);
    });
  }, true);
});
};

module.exports = userRoutes; 
*/