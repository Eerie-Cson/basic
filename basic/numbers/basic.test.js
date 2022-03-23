const Basic = require('./basic');
const basicMath = new Basic();

describe('Basic', function () {
  it('should be 5, given the parameter 2 and 3', () => {
     expect(basicMath.add(2,3)).toBe(5);
  });

  it('should be 1, given the parameter 3 and 2', () =>{
      expect(basicMath.subtract(3,2)).toBe(1);
  });

  it('should be 6, given the parameter 3 and 2', () =>{
    expect(basicMath.multiply(3,2)).toBe(6);
    });

  it('should be 3, given the parameter 6 and 2', () =>{
    expect(basicMath.divide(6,2)).toBe(3);
  });
    

});