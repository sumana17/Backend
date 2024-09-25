const express = require('express')
const app = express()
const path = require('path');
const fs = require('fs');
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
        console.error(err);
     
        } 
         const jsonData = JSON.parse(data);

         res.json(jsonData)

    })
    })  

app.listen(3003, () => {
console.log("server connected")
})

//Run the app with the following command
//node app.js