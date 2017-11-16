describe('device API:', function(){
    describe('#isIOS()', function(){
        it('isIOS() should return false', function(){
            expect(isIOS()).to.equal(false);
        });
    });
    describe('#isAndroid()', function(){
        it('isAndroid() should return false', function(){
            expect(isAndroid()).to.equal(false);
        });
    });
    var clientFlag = 'flowpay';
    describe('#isClient()', function(){
        it('isClient(' + clientFlag + ') should return false', function(){
            expect(isClient(clientFlag)).to.equal(false);
        });
    });
});