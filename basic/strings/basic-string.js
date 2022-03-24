const R = require('Ramda');
class BasicString{
    repeat(str){
      return R.compose(R.join(''), R.repeat(str))(5);
    }
}
module.exports = BasicString;
