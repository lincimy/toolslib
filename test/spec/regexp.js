describe('regexp API:', function(){
    describe('#isEmail()', function(){
        it('isEmail("lincimy@163.com") should return true', function(){
            expect(isEmail('lincimy@163.com')).to.equal(true);
        });
        it('isEmail("lincimy@dfsfsdf") should return false', function(){
            expect(isEmail('lincimy@dfsfsdf')).to.equal(false);
        });
    });
    describe('#isIdCard()', function(){
        var idCard = '440883189812212232';
        it('isIdCard('+ idCard +') should return true', function(){
            expect(isIdCard(idCard)).to.equal(true);
        });
        var wrongIdCard = '3443253453csd';
        it('isIdCard('+ wrongIdCard +') should return false', function(){
            expect(isIdCard(wrongIdCard)).to.equal(false);
        });
    });
    describe('#isPhoneNum()', function(){
        it('isPhoneNum("13929333321") should return true', function(){
            expect(isPhoneNum('13929333321')).to.equal(true);
        });
        it('isPhoneNum("12020233432") should return false', function(){
            expect(isPhoneNum('12020233432')).to.equal(false);
        });
    });
    describe('#isUrl()', function(){
        it('isUrl("http://www.baidu.com") should return true', function(){
            expect(isUrl('http://www.baidu.com')).to.equal(true);
        });
        it('isUrl("safdaddsfddd") should return false', function(){
            expect(isUrl('safdaddsfddd')).to.equal(false);
        });
    });
});