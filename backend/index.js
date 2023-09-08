const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.send("Server Sending Data")
})


app.listen(8000);
