const express = require ('express');

//var cors = require('cors')

const app = express(); 

const port = 2000; 

//app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello Rasmus, u beautiful piece of shit')
}); 

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
})
