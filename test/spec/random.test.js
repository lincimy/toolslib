describe('random API:', function(){
    describe('#randomNum()', function(){
        var min = 10, max = 200;
        it('randomNum('+ min +','+ max +') should >= '+ min + ', <=' + max, function(){
            var value = randomNum(min,max);
            expect(value).to.be.at.least(min);
            expect(value).to.be.at.most(max);
        });
    });
});