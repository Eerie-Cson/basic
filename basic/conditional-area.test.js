const Shape = require('./conditional-area');


describe('ConditionalArea', function(){
  
  it('should calculate circle area', function(){
    const shape = new Shape('circle');  
    expect(shape.area({radius: 10})).toEqual(314.1592653589793);
  });

  it('should calculate rectangle area', function(){
    const shape = new Shape('rectangle');   
    expect(shape.area({width: 10, height: 5})).toEqual(50);
  });

  it('should calculate triangle area', function(){
   const shape = new Shape('triangle');   
    expect(shape.area({base: 2, height: 10})).toEqual(10);
  });

  it('should throw error, given the shape pentagon', function(){
    const shape = new Shape('pentagon');   
    expect(()=> shape.area({base: 2, height: 10})).toThrow("Shape is not available");
  });

  it('should throw error, given the wrong parameter', function(){
    const shape = new Shape('circle');  
    expect(()=>shape.area({width: 10, height:10 })).toThrow("Wrong parameters for the given shape: Circle");
  });




});

