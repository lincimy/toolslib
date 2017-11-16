describe('dom API:', function(){
    describe('#setScrollTop()', function(){
        var len = 350;
        it('toolslib.setScrollTop('+ len +') should return ' + len, function(){
            var value = setScrollTop(len);
            expect(value).to.equal(len);
            // expect(getScrollTop()).to.equal(len);
        });
        after(function(){
            setScrollTop(0);
        });
    });
    describe('#getScrollTop()', function(){
        it('toolslib.getScrollTop() should return 0', function(){
            expect(getScrollTop()).to.equal(0);
        });
    });
    describe('#offset()', function(){
        var elem = null;
        before(function(){
            elem = document.createElement('div');
            elem.id = 'offset';
            elem.style.position = 'absolute';
            elem.style.top = '200px';
            elem.style.left = '100px';
            document.body.appendChild(elem);
        })
        it('offset('+ elem +') should return pos(a location object)', function(){
            var pos = offset(elem);
            expect(pos.top).to.equal(200);
            expect(pos.left).to.equal(100);
        })
    });
});