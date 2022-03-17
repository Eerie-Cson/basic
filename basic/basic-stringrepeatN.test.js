const BasicString = require('./basic-string-repeatN');
const basicString = new BasicString();

describe('BasicStringRepeatWithN', function() {
    it('should repeat the string twice, given the parameter a and 2',function(){
        expect(basicString.repeatWithN('a',2)).toBe('aa');
    });
    it('should repeat the string thrice, given the parameter ab and 3', function(){
        expect(basicString.repeatWithN('ab',3)).toBe('ababab');
    });
});