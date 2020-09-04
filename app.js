const express = require('express')
const app = express()
app.use('/public', express.static('public'))
app.get('/login', (req, res) => {
    res.send('hello world')
})
app.post('/addUser', (req, res) => {
    res.send('nihao')
})
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})
app.get('/procee_get', (req, res) => {
    var response = {
        'first_name': req.query.first_name,
        'last_name': req.query.last_name
    }
    res.send(JSON.stringify(response))
})
app.listen(4000, () => console.log('app is running'))
