class BasicArray{
  sumOfAllTails(...numbers){
    return numbers.map(num => {
      if(num.length==0){
        throw new Error("There is an empty array!");
      }
      return num.slice(1).reduce((accum, currentValue) => accum+currentValue, 0)
    });
  }
}

module.exports = BasicArray;
