const path = require('path');
const express = require('express')
const app = express();

//console.log(__dirname)
//console.log(__filename)
const pubDirPath = path.join(__dirname,'../public');
//console.log(pubDirPath)

app.use(express.static(pubDirPath))

 


app.get('/weather', (req, res) => { 
    res.send({
        forecast : 'it is cool',
        location : 'vancouver',
    });  
});




var server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port 
    console.log("Example app listening at http://%s:%s", host, port) 
    
})