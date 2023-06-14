function determinant(m) {
    // return the determinant of the matrix passed in
    if(m.length==1) return m[0][0]
    
    else if (m.length==2) {
      return m[0][0]*m[1][1]-m[0][1]*m[1][0]
    }
};

function minor_det(m){

    let newarr=[]
    let subarr;
    let minor_coeff;
    for(let i=0;i<m.length;i++){
        subarr=m[i]
        console.log(`Row ${i}:[${subarr}]`)
        for (let j=0;j<subarr.length;j++){
          let tmp=subarr.slice()
          minor_coeff=tmp.splice(j,1)
          console.log(tmp)
          newarr.push(tmp)
        }
        
    }
    //newarr.splice(0,1)
    console.log(newarr)

}


  module.exports= {determinant}


  m=[[1,2,3],[4,5,6],[7,8,9]]
  m2=[[1,2,3,4],[5,6,7,8], [9,10,11,12], [13, 14, 15, 16]]
  //m[0].splice(0,1)
  minor_det(m)
  console.table(determinant([[2,4],[6,8]])) //-8
  
