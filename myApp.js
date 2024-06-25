let express = require('express');
let app = express();
const bodyParser = require('body-parser')
const path = require('path')
const homePage = path.resolve(__dirname, 'views', 'index.html')

app.use(bodyParser.urlencoded({
        extended: false
    }))

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(homePage)
})

app.post('/name', (req, res) => {
    let {first, last} = req.body 
    res.json({
        name: `${first} ${last}`
    })
})





















module.exports = app;
