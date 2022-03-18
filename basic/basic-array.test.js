const BasicArray = require('./basic-array');

const basicArray = new BasicArray();
let n = 3;

describe('BasicArray', function () {
  it('should be 6, given an array of [1,2,3]', function () {
    expect(basicArray.sum([1,2,3])).toBe(6);
  });

  it('should throw Error, given an empty array', function(){
    expect(() => basicArray.sum([])).toThrow("Empty Array!");
  })
})
