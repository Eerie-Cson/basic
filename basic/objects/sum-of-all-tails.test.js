const BasicArray = require('./sum-of-all-tails');
const basicArray = new BasicArray();

describe('SumOfAllTails', function(){
  it('should add last 2 elements of 2 arrays', function () {
    expect(basicArray.sumOfAllTails([1,2,3,4,5],[9,1,2])).toEqual([14,3]);
  });
  it('should add last 2 elements of 3 arrays', function(){
    expect(basicArray.sumOfAllTails([1,2,3],[4,5,6],[7,8,9])).toEqual([5, 11, 17]);
  });

  it('should throw error if there is an empty array', function (){
    expect(()=>basicArray.sumOfAllTails([], [4,5,6], [7,8,9])).toThrow("There is an empty array!")
  });

  it('should throw error if there is an empty array', function (){
    expect(()=>basicArray.sumOfAllTails([1,2,3], [], [7,8,9])).toThrow("There is an empty array!")
  });

  it('should throw error if there is an empty array', function (){
    expect(()=>basicArray.sumOfAllTails([1,2,3], [], [])).toThrow("There is an empty array!")
  });
});

