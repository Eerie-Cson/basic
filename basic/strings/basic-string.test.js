const BasicString = require('./basic-string');

const basicString = new BasicString();


describe('BasicStringRepeat', function () {
    it('should be aaaaa, given a string a', function () {
      expect(basicString.repeat('a')).toBe('aaaaa');
    });

    it('should be abababab, given a string ab', function () {
      expect(basicString.repeat('ab')).toBe('ababababab');
    });
    
    
})

