import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send("Hello World!")
})

app.listen(8000, (req,res)=>{
    console.log("Server Started")
})