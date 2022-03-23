
const R = require('Ramda');
class BasicArray{


class BasicArray{

  sum(numbers){
    if(numbers.length==0){
      throw new Error("Empty Array!");
    }

    return R.sum(numbers);

    return numbers.reduce((accum, currentValue) => accum+currentValue, 0);

  }
}


module.exports = BasicArray;
