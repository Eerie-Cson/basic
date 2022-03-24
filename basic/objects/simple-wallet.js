const R = require('ramda');
class Wallet{
  balance = 0;

  deposit(newBalance){
    if(newBalance<=0)
      throw new Error("No value to deposit!");
    return this.balance = R.add(this.balance, ~~newBalance);
  }
  
  withdraw(newBalance){
    if(newBalance>this.balance)
      throw new Error("Insufficient Balance!");
    return this.balance = R.subtract (this.balance, ~~newBalance);
  }  
};
module.exports =  Wallet;
