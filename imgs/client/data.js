async function newClampedArr(data){
    let d= new Uint8ClampedArray(data)
    console.log(d)
    return d
}
async function imageData(data){

    var img= new ImageData(data,2,2)
    console.log(img)
}

async function getPNGpixels(){
    const reqOptions={'method':'GET', 'Headers': {'content-type': "application/json"}}
    const response= await fetch('/pixels',reqOptions)
    const data=response.json()
    data.then(d=>{
        console.log(d) 
        return d
    }).then(d=>{
        let u = new Uint8ClampedArray(d.data,4)
        console.log(u)
        return u
    })
    .then(u=>{
        let img=new ImageData(u,137)
    })
    
    
}

async function getPixels() {
    fetch('/pixels')
  .then(response => response.arrayBuffer())
  .then(buffer => {
      console.log(buffer,buffer.byteLength)
    // Create a new Uint8ClampedArray from the buffer
    const uint8Array = new Uint8ClampedArray(buffer);

    // Define the width and height of the image
    const width = 1/* your image width */;
    const height = 4/* your image height */;

    // Create a new ImageData object
    const imageData = new ImageData(uint8Array, 2, 2);

    // Use the putImageData method to draw the ImageData on the canvas
    ctx.putImageData(imageData, 0, 0);
  })
  .catch(error => {
    console.error('Error fetching or processing the image:', error);
  });

  }
  

function pixelGrid(arr){
    let s=''
    let results=document.querySelector('#results')
    for (let i=0; i<arr.length;i++){
        s+=`<li>${arr[i]}</li>`
    }
    results.innerHTML=s;
}
