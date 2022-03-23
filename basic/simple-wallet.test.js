const Wallet = require('./simple-wallet');
const wallet = new Wallet();

describe('SimpleWallet', function() {

  beforeEach(function () {
    this.wallet = new Wallet();
  });

  it('should display 0 balance, given that current balance = 0', function(){
    expect(wallet.balance).toEqual(0);
  });
  
  it('should append the balance given the deposit value', function(){
    expect(wallet.deposit(100)).toEqual(100);
    expect(wallet.balance).toEqual(100);
    expect(wallet.deposit(100)).toEqual(200);
    expect(wallet.balance).toEqual(200);
  });

  it('should deduct balance given the withdraw value',function(){
    expect(wallet.withdraw(50)).toEqual(150);
    expect(wallet.balance).toEqual(150);
  });

  it('should accept string balance with a number value', function(){
    expect(wallet.deposit('100')).toEqual(250);
    expect(wallet.deposit('30')).toEqual(280);
    expect(wallet.deposit('test')).toEqual(280);
  });

  it('should throw an error when no value was deposited', function(){
    expect(()=>wallet.deposit(0)).toThrow("No value to deposit!");
  });

  it('should throw an error when withdrawing insufficient balance', function(){  
    expect(()=>wallet.withdraw(500)).toThrow("Insufficient Balance!");
  });
})
