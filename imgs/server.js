const express = require('express');
const fs= require('fs')

const server= express();

const pngFile= fs.readFileSync('./dcode1.png')

 console.log(pngFile)

server.get('/', (req, res)=>{
    res.sendFile('./pixels.html',{root: '../imgs'})
})

server.get('/pixels', (req, res)=>{
    res.json(pngFile)
})

server.listen(3000,()=>{
    console.log('Server listening on port 3000:')
})
