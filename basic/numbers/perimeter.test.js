const perimeter = require('./perimeter');

test('should display the perimeter 312, given the parameter 10.2 and 15.3', () =>{
  expect(perimeter(10.2, 15.3)).toBe(51);
});

test('should throw error, given a parameter if lesser than 1', ()=>{
  expect(()=> perimeter(0, 15.3)).toThrow("Should be greater than zero");
  expect(()=> perimeter(10.2, 0)).toThrow("Should be greater than zero");
  expect(()=> perimeter(-1, 15.3)).toThrow("Should be greater than zero");
  expect(()=> perimeter(10.2, -2)).toThrow("Should be greater than zero");
});

