const express = require('express')
const app = express();

app.get('/', (req, res) => { 
    res.send('<h1>Hello World</h1>');  
});


app.get('/weather', (req, res) => { 
    res.send({
        forecast:'it\'s sunny',
    });  
});


app.get('/about', (req, res) => { 
    res.send('Hello about');  
})


app.get('/hole', (req, res) => { 
    res.send('Hello hole');  
});




var server = app.listen(3000, () => {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%