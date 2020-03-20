const path = require('path');
const express = require('express')
const app = express();

//console.log(__dirname)
//console.log(__filename)
const pubDirPath = path.join(__dirname,'../public');
//console.log(pubDirPath)

app.use(express.static(pubDirPath))

app.get('/test', (req, res) => { 
    //  console.log(req.query.test1)
    //  res.send('it is cool');  
    if (!req.query.tst2) {
        res.send({
            error: 'You must provide a tst2 parameter'
        })
    } else {
        res.send({
            recParm1: req.query.tst1,
            recParm2: req.query.tst2
        })
    }
});


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

