const f=(x,m,c)=> m*x+c;



function meanSqErr(x,y){
  let total=0;
  let diff;
  let terms=y.length;
  console.log(terms)
  for (let i=0;i<y.length;i++){
      diff=(y[i]-f(x[i],0.92,-1))**2
      total+=diff
  }
  return total/terms
}

x1=[2.4,2.8,3.2,3.6,4.0,4.2,5.0]
y1=[1.7,1.85,1.79,1.95,2.1,2.0,2.7]
console.log(meanSqErr(x1,y1))

