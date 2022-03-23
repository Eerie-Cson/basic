const area = require('./area');

test('should display the area 156.06, given the parameter 10.2 and 15.3', () => {
    expect(area(10.2, 15.3)).toBe(156.06);
});

test('should throw error if value is string',() =>{
  expect(() => area("10.2", 15.3)).toThrow("Invalid type!");
});

test('should throw error if value is string',() =>{
  expect(() => area(10.2, "15.3")).toThrow("Invalid type!");
});

