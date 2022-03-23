const R = require('Ramda');
class BasicString{
    repeat(str){
      return R.join('', R.repeat(str, 5))
    }
}

module.exports = BasicString;
