const grandfather =[ 1,9,"grandfather"]
const man = [ 1, 7,"man" ]
const adult =[ 5, 7 ,"adult"]
const woman =[ 9, 7 ,"woman"]
const boy =[ 	1, 2 ,"boy"]
const child =[ 5, 2, "child"]
const girl =[ 9, 2, "girl"]
const infant =[ 5, 1, "infant" ]


function subtractVectorMean(A){
    let res=[]
    let mean=zeroMean()
    for(let i=0;i<A.length-1;i++){
      res[i]=A[i]-mean[i]
  
    }
    return res
  }
  
  
  
  function createVectorAdder() {
      let sumVector = [];
    
      return function(...vectors) {
        if (vectors.length === 0) {
          return sumVector;
        }
    
        if (sumVector.length === 0) {
          sumVector = vectors[0].slice();
          vectors.shift();
        }
    
        if (vectors.some(vector => vector.length !== sumVector.length)) {
          throw new Error("Vector dimensions must match");
        }
    
        vectors.forEach(vector => {
          for (let i = 0; i <vector.length; i++) {
            sumVector[i] += vector[i];
          }
        });
    
        return sumVector.filter(d=>!isNaN(d));
      };
    }
  
  function zeroMean(){
      const addVectors = createVectorAdder();
      const sumVector = addVectors(grandfather,man,adult,woman,boy,child,girl,infant);
      let res=sumVector.map(d=>d/8.0)
      return res;
  }

  console.log(zeroMean())

const required=[grandfather,man,adult,woman,boy,child,girl,infant]
const shifted= required.map(d=>subtractVectorMean(d))

console.log(required)
console.log(shifted)
