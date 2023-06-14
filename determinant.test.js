let determinant= require('./determinant.js')


describe('basic calc functions',()=>{
    test('test 1+1', ()=>{
         expect(1+1).toEqual(2);
    })
  })
  
  describe('determinant of single matrix',()=>{
    //Try one integer multiplied by 3
    test('determinant of single matrix(scalar)',()=>{
      expect(determinant.determinant([[6]])).toEqual(6)
    })
    test('determinant of 2by2 matrix',()=>{
      expect(determinant.determinant([[1,2],[3,4]])).toEqual(-2)
    })

    
  })
  
  
