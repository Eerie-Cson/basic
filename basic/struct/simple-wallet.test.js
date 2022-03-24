const Wallet = require('./simple-wallet');

describe('SimpleWallet', function() {
  beforeEach(function (){
    this.wallet = new Wallet();
  });
  it('should display 0 balance, given that current balance = 0', function(){
    expect(this.wallet.balance).toEqual(0);
  });
  
  it('should append the balance given the deposit value', function(){
    this.wallet.deposit(100);
    expect(this.wallet.balance).toEqual(100);
    this.wallet.deposit(100);
    expect(this.wallet.balance).toEqual(200);
  });

  it('should deduct balance given the withdraw value',function(){
    this.wallet.deposit(200);
    this.wallet.withdraw(50);
    expect(this.wallet.balance).toEqual(150);
  });

  it('should accept string balance with a number value', function(){
    this.wallet.deposit(150);
    expect(this.wallet.deposit('100')).toEqual(250);
    expect(this.wallet.deposit('30')).toEqual(280);
    expect(this.wallet.deposit('test')).toEqual(280);
  });

  it('should throw error when no value was deposited', function(){
    expect(()=>this.wallet.deposit(0)).toThrow("No value to deposit!");
  });

  it('should throw error when withdrawing insufficient balance', function(){
    expect(()=>this.wallet.withdraw(500)).toThrow("Insufficient Balance!");
  });
});
