'use strict'

const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT
const notFound = require('./error-handlers/404')
const not500 = require('./error-handlers/500')
const validator = require('./middleware/validator')
const logger = require('./middleware/logger')



app.use(logger)
/*
app.get('/hello', (req,res)=>{
    res.status(200).send('All is good')
})

/*app.put('/hello', (req,res)=>{
    res.status(200).send('All is good')
})

app.get('/data',validator,(req,res)=>{
    const output = {
        10 :"even",
        5:"odd",
        "time" : req.timestamp
    };
    res.status(200).json(output)
})



app.get('/bad',(req,res,next)=>{
throw new Error('you made error')
})



*/



app.get('/person',validator,(req,res)=>{
    res.status(200).json({name: req.query.name })
})

app.use('*', notFound)
app.use(not500)

function start(){
app.listen(PORT,()=>{
    console.log('SERVER STARTED')
})}

module.exports={
    app,
    start,
};