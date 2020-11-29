// Kilde: står inde under server.js
const userRoutes = (app, fs) => {
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
    })*/

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
};

module.exports = userRoutes; 
