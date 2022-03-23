
const R = require('Ramda');
class BasicString{
    repeat(str){
      return R.join('', R.repeat(str, 5))

class BasicString{
    repeat(str){
      return [...Array(5)].map(e => e = str).join("");

    }
}

module.exports = BasicString;
