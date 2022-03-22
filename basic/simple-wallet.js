class Wallet{
  
  balance = 0;

  deposit(newBalance){
    if(newBalance<=0)
      throw new Error("No value to deposit!");

    this.balance += ~~newBalance;
    return this.balance;
  }


  withdraw(newBalance){
    if(newBalance>this.balance)
      throw new Error("Insufficient Balance!");

    this.balance -= ~~newBalance;
    return this.balance;
  }

    

  
};


module.exports =  Wallet;

