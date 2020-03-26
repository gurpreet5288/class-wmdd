// *******************************************************
// ******** NPMs Installed *******************************
// *******************************************************
//
//      1)  npm init -y
//      2)  npm i express
//      3)  npm i cors
//
// *******************************************************
// ******** Required Modules *****************************
// *******************************************************
const path = require('path');
const express = require('express');
const cors = require('cors');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// *******************************************************
// ******** Environmental Variables **********************
// *******************************************************
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

const pubDirPath = path.join(__dirname, '../public');

app.use(express.static(pubDirPath));

app.get('/_w', (req, res) => { 
    if (req.query.location === "") {
        res.send({
            error: 'You must provide a location parameter'
        })
    } else {
        geocode(req.query.location, (error,data) =>{
            if (error) {
                return res.send({error})
            }  
            forecast(data, (error,data) =>{
                if (error) {
                    return res.send({error})
                }
                res.send({data})
            })
        })
    }
})


app.listen(port, () => {
    console.log(`The Server is Up and Running on Port ${ port }`);
})