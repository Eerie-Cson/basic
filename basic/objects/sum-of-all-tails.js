const R = require('Ramda');
class BasicArray{
  sumOfAllTails(...numbers){

    return numbers.map(num=>{
      if(num.length==0)
        throw new Error("There is an empty array!");
      return R.reduce(R.add, 0, R.tail(num));
    });
    
  }
}

module.exports = BasicArray;
