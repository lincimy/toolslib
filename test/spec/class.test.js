describe('class API:', function(){
    describe('#hasClass()', function(){
        var elem = null;
        before(function(){
            elem = document.createElement('div');
            elem.id = 'l_hasClass';
            elem.className = 'test';
            document.body.appendChild(elem);
        });
        it('toolslib.hasClass('+ elem + ',"test") should return true', function(){
            expect(hasClass(elem, 'test')).to.equal(true);
        });
        after(function(){
            document.body.removeChild(elem);
        });
    });
    describe('#addClass()', function(){
        var elem = null;
        before(function(){
            elem = document.createElement('div');
            elem.id = 'l_addClass';
            elem.className = 'exist';
            document.body.appendChild(elem);
        });
        it('toolslib.hasClass('+ elem + ',"test") should return true', function(){
            addClass(elem, 'test');
            expect(hasClass(elem, 'test')).to.equal(true);
            addClass(elem, 'exist');
            expect(hasClass(elem, 'exist')).to.equal(true);
        });
        after(function(){
            document.body.removeChild(elem);
        });
    });
    describe('#removeClass()', function(){
        var elem = null;
        before(function(){
            elem = document.createElement('div');
            elem.id = 'l_removeClass';
            document.body.appendChild(elem);
            addClass(elem, 'test');
        });
        it('toolslib.removeClass('+ elem + ',"test") should return false', function(){
            expect(hasClass(elem, 'test')).to.equal(true);
            removeClass(elem, 'test');
            expect(hasClass(elem, 'test')).to.equal(false);
            removeClass(elem, 'no-exist');
            expect(hasClass(elem, 'no-exist')).to.equal(false);
        });
        after(function(){
            document.body.removeChild(elem);
        });
    });
});