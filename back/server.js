const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

//----------------  Routes  ------------------//
const databaseRoute = require('./routes/databaseRoute')
const userRoute = require('./routes/userRoute')
const petRoute = require('./routes/petRoute')

//---------------- Export ----------------//
app.use('/database', databaseRoute)
app.use('/user', userRoute)
app.use('/pet', petRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
