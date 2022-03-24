
const R = require('Ramda');
class BasicArray{
  sum(numbers){
    if(numbers.length==0){
      throw new Error("Empty Array!");
    }
    return R.sum(numbers);

  }
}


module.exports = BasicArray;
