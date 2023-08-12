//Researching about word2Vec algorithm
//used to predict words & generate them based on inputs 
//such as logical sentences,vectors with features etc
//We do this subconciously when learning language
//boy is to man...what girl is to woman?
///London is to the UK what Paris is to France
//King- Man + Woman= Queen

//All pets are animals BUT not all animals are pets?!
//All fruits have seeds but are all fruits sweet?

let feline= {
    lion: {
        danger:9,
        size: "big"
    },
    housecat: {
        danger:2,
        size: "small"
    },
    cheetah: {
        danger: 6,
        size:"big"
    },

}

function dotProduct(a,b){
    let total=0;
    for (let i=0;i<a.length;i++){
        total+=a[i]*b[i]
    }
    return total
}

const man= [1,7,1]
const woman=[9,7,1]
const boy=[1,2,1]
const girl=[9,2,1]
const king=[1,8,8]
const queen=[9,7,8]
const prince=[1,2,8]
const princess=[9,2,8]
const castle=[0,100,100]
//To find which words are similar? calculate cosine angle
//between the vectors



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

