const express = require('express')
const cors = require('cors');
const app = express()
const {db} = require('./db/db');
const {readdirSync} = require('fs')

require('dotenv').config()

const PORT = process.env.PORT

//middlewares

app.use(express.json())
app.use(cors()) /*where u want the app to live (domain/server)*/
/*app.get('/', (req, res) => {
    res.send('Hello oooWorld')
})*/

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()