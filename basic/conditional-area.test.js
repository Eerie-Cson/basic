const Shape = require('./conditional-area');

describe('ConditionalArea', function(){
  
  it('should calculate circle area given the correct parameter, otherwise throw error', function(){
    const shape = new Shape('Circle');  
    expect(shape.area({radius: 10})).toEqual(314.1592653589793);
    expect(()=>shape.area({})).toThrow("Wrong parameters for the given shape: Circle");
    expect(()=>shape.area({width: 10, height:10 })).toThrow("Wrong parameters for the given shape: Circle");
    expect(()=>shape.area({width: 10 })).toThrow("Wrong parameters for the given shape: Circle");
    expect(()=>shape.area({radius: 10, width: 10 })).toThrow("Wrong parameters for the given shape: Circle");

  });

  it('should calculate rectangle area', function(){
    const shape = new Shape('Rectangle');   
    expect(shape.area({width: 10, height: 5})).toEqual(50);
    expect(()=>shape.area({})).toThrow("Wrong parameters for the given shape: Rectangle");
  });

  it('should calculate triangle area', function(){
   const shape = new Shape('Triangle');   
    expect(shape.area({base: 2, height: 10})).toEqual(10);
    expect(()=>shape.area({radius: 10, width: 10, height:20})).toThrow("Wrong parameters for the given shape: Triangle");
  });

  it('should throw error, given the shape pentagon', function(){
    const shape = new Shape('Pentagon');   
    expect(()=> shape.area({base: 2, height: 10})).toThrow("Shape is not available");
  });

});

