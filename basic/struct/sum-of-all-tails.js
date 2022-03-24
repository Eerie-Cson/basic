const { isEmpty } = require('ramda');
const R = require('ramda');
class BasicArray{
  sumOfAllTails(...numbers){ 
      return R.map( num => {
        if(isEmpty(num)) throw new Error("There is an empty array!");
          return R.compose(R.reduce(R.add, 0), R.tail)(num);
      })(numbers)
  }
}
module.exports = BasicArray;
