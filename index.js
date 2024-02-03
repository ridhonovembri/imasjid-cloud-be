const express = require('express')
const cors = require('cors')
const appRoutes = require('./routes/app-routes')

const app = express()

var corsOptions = {
    origin: "*",
};

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions));
app.use(appRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Hai Vercel... I am Express...now from CLI.. new git!')
})

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`)
})

module.exports = app


