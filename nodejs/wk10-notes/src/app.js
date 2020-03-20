// Core Node Modules
const path = require('path')
// NPM Node Modules
const express = require('express')
// Custom Node Modules

const app = express()

// console.log(__dirname)
// console.log(__filename)

const pubDirPath = path.join(__dirname, '../public')
// console.log(pubDirPath)

app.use(express.static(pubDirPath))

// Processing Query Strings
app.get('/test', (req, res) => {
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
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is Cloudy',
        location: 'Vancouver'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})