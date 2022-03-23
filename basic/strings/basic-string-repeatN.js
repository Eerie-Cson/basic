
const R = require('Ramda');
class BasicString{
  repeatWithN(str, count){ 
    return R.join('',R.repeat(str,count))
  }

class BasicString{
  repeatWithN(str, count){
    return [...Array(count)].map(e => e = str).join("");
}

}
module.exports = BasicString;
