const R = require('Ramda');
class BasicString{
  repeatWithN(str, count){ 
    return R.join('',R.repeat(str,count))
  }
}
module.exports = BasicString;
