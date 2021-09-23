const csv = require('csv-parser');
const fs = require('fs');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=> {
    const results = [];
    
    fs.createReadStream('annual-balance-sheets-and-accumulation-accounts-200817-provisional-csv.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data) )
  .on('end', () => {
    res.send(results);
   });

});

app.get("/", (req, res)=>{
    res.send("hello world");
    
});
  

app.listen(3001, ()=>{
    console.log("running in port 3001")

});