//kilde: https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files?fbclid=IwAR04QYRv7Pekmj680y9KSY4iCRoqAaItOi-PusOe9pVq6CveZaw54EmQwsc
// Jeg kunne også have opstillet porten/serveren som i assignement 5, men dette kræver mindre og mere overskuelig kode
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
//var cors = require('cors')
//app.use(cors())

const app = express(); 

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
//const fs = require('fs');

//const port = 2000; 

// configure our express instance with some body-parser settings
// including handling JSON data
/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));*/


// this is where we'll handle our various routes from
//const routes = require('./Routes/routes.js')(app, fs);

// finally, launch our server on port 8080.
const server = app.listen(8080, () => {
  console.log('listening on port %s...', server.address().port);
});

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "/View/index.html"));
})


//Kilde: https://stackoverflow.com/questions/43800588/why-need-use-express-static
app.use(express.static("View"));



//res.sendFile(path.join(__dirname + "./"));



/*
app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
})*/
