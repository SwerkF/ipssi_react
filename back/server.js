const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

//----------------  Routes  ------------------//
const userRoute = require('./routes/userRoute')
const dbRoute = require('./routes/dbRoute')
const petRoute = require('./routes/petRoute')

//---------------- Export ----------------//
app.use('/user', userRoute)
app.use('/db', dbRoute)
app.use('/pet', petRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
