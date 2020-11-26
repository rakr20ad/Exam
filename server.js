const express = require('express'); 

const app = express(); 

const port = 1000; 


app.get('/', (req, res) =>{
    res.send('Hello Rasmus, u beautiful piece of shit')
}); 

app.listen(port, () => {
    console.log(`Example app listen at http://localhost:${port}`)
})

