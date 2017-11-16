describe('array API:', function(){
    describe('#arrayEqual()', function(){
        var arr = [1,3,4];
        arrcopy = arr;
        it('toolslib.arrayEqual(['+ arr + ',' + arrcopy + ') should return true', function(){
            expect(arrayEqual(arr,arrcopy)).to.equal(true);
        });
        it('toolslib.arrayEqual([1],[1,2]) should return false', function(){
            expect(arrayEqual([1],[1,2])).to.equal(false);
        });
        it('toolslib.arrayEqual([1,2,3],[1,2,4]) should return false', function(){
            expect(arrayEqual([1,2,3],[1,2,4])).to.equal(false);
        });
        it('toolslib.arrayEqual([1,2],[1,2]) should return true', function(){
            expect(arrayEqual([1,2],[1,2])).to.equal(true);
        });
    });
})