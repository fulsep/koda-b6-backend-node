const express = require('express')
const cors = require('cors')

const app = express()


app.use(cors({
    allowedHeaders: ['authorization', 'content-type'],
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    origin: ['http://localhost:5173', 'http://frontend.campx.my.id']
}))

app.use(express.json())

app.get('/', function(req, res){
    res.json({
        success: true,
        message: 'Backend is running well'
    })
})

const PORT = process.env.PORT || 8888
app.listen(PORT, function(){
    console.log(`Backend listening on port ${PORT}`)
})