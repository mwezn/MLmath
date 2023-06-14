//this is my closure function to calculate derivatives


//Sun 16th april 2023: lets start interactive D3 graph of math functions!
//Have draggable cursor on the chart of x**2, x**3 etc

function D(f,h=0.00000000001){
  return function(x){
    return (f(x+h)-f(x))/h
 }
}

const f=(x)=>3*x**2
const g=(x)=> x**2

const df= D(f)
console.log(df)
console.log(df(100))

console.log(f(10))
console.log(D(f,.00010)(10))
console.log(D(g)(10))
