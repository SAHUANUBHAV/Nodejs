const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Shivam");
})

app.listen(3000);