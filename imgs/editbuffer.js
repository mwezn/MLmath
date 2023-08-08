//Editing the width of pixels.png
//Need to access Buffer at indexes 16 & 19


const fs= require('fs')
const pngFile= fs.readFileSync('./pixels.png')

console.log(pngFile)
let clampedArr= new Uint8ClampedArray(pngFile)
console.log(clampedArr)
console.log(clampedArr[16])
console.log(clampedArr[17])
console.log(clampedArr[18])
console.log(clampedArr[19])
console.log(clampedArr[20])
console.log(clampedArr[21])
console.log(clampedArr[22])
console.log(clampedArr[23])
//clampedArr[19]=10;
//clampedArr[23]=10;

console.log(clampedArr[54])
console.log(clampedArr[55])
console.log(clampedArr[56])


const buf = Buffer.from(clampedArr, 'binary');
console.log(buf)

console.log(buf.toString('base64'));


fs.writeFile('pixels100.png',buf.toString('base64'),'base64',(err,res)=>{
    if (err) console.log(err)
    if (res) console.log(res)
})


