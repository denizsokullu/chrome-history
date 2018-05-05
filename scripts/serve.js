const express = require('express');
const app = express();
const path = require('path');

app.use("/img",express.static(path.join(__dirname,'../build/img')))
app.use("/static",express.static(path.join(__dirname,'../build/static')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../build/index.html'));
})

const port = process.env.PORT || 3000;

console.log(`Listening at ${port}`);
app.listen(port);
