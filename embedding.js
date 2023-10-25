//Researching about word2Vec algorithm
//used to cluster words with similar meanings (synonyms), predict words & generate them based on inputs 
//We do this subconciously when learning language
//boy is to man...what girl is to woman?
///London is to the UK what Paris is to France
//King- Man + Woman= Queen



function dotProduct(a,b){
    let total=0;
    a=a.filter(d=>!isNaN(d));
    b=b.filter(d=>!isNaN(d))
    for (let i=0;i<a.length;i++){
        total+=a[i]*b[i]
    }
    return total
}


//Gender Age Royalty
const man= [1,7,1,"man"]
const adult=[5,7,1,"adult"]
const woman=[9,7,1,"woman"]
const boy=[1,2,1, "boy"]
const girl=[9,2,1, "girl"]
const king=[1,8,8,"king"]
const queen=[9,8,8,"queen"]
const prince=[1,2,8,"prince"]
const princess=[9,2,8,"princess"]
const castle=[5,9,8,"castle"]
//To find which words are similar? calculate cosine angle
//between the vectors


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
    const sumVector = addVectors(man,adult,woman,boy,girl,king,queen,prince,princess,castle);
    let res=sumVector.map(d=>d/10.0)
    return res;
}

console.log(zeroMean())
console.log(man)
console.log(subtractVectorMean(man))


  
const requiredVectors=[man,adult,woman,boy,girl,king,queen]
const zeroVectors= requiredVectors.map(d=>subtractVectorMean(d))

console.log(zeroVectors)




const cosTheta= (A,B)=>dotProduct(A,B)/(Math.sqrt(dotProduct(A,A)*dotProduct(B,B)))
console.log(cosTheta(man,man))
console.log(cosTheta(man,woman))
console.log(cosTheta(man,boy))
console.log(cosTheta(man,girl))
console.log(cosTheta(man,king))
console.log(cosTheta(man,queen))
console.log(cosTheta(man,prince))
console.log(cosTheta(man,princess))
console.log(cosTheta(man,castle))

//console.log(addVector(man,man))


