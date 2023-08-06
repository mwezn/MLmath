const express = require('express');
const PNG= require('png-js')

const server= express();

PNG.decode('./dcode1.png', function(pixels) {
    // Pixels is a 1d array (in rgba order) of decoded pixel data
    for (let i=0;i<pixels.length;i++){
        console.log(pixels[i])
        
    }
    console.log(pixels.length,pixels.length/40)
 });



server.listen(3000,()=>{
    console.log('Server listening on port 3000:')
})
