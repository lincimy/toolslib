describe('url API:', function(){
    describe('#parseQueryString()', function(){
        it('parseQueryString() deepEqual {}', function(){
            expect(parseQueryString()).to.deep.equal({});
        });
        it('parseQueryString("") deepEqual {}', function(){
            expect(parseQueryString("")).to.deep.equal({});
        });
        it('parseQueryString("http://nb.189.cn") deepEqual {}', function(){
            expect(parseQueryString('http://nb.189.cn')).to.deep.equal({});
        });
        it('parseQueryString("http://nb.189.cn?") deepEqual {}', function(){
            expect(parseQueryString('http://nb.189.cn?')).to.deep.equal({});
        });
        it('parseQueryString("http://nb.189.cn/s?name=%E8%8B%B1%E8%AF%AD&appId=llb") deepEqual obj{name:"英语",appId:"llb"}', function(){
            var obj = {
                name: '英语',
                appId: 'llb'
            };
            expect(parseQueryString("http://nb.189.cn/s?name=%E8%8B%B1%E8%AF%AD&appId=llb")).to.deep.equal(obj);
        })
    });
    describe('#stringfyQueryString()', function(){
        it('stringfyQueryString() deepEqual ""', function(){
            expect(stringfyQueryString()).to.deep.equal('');
        });
        var obj = {
            name: '英语',
            appId: 'llb',
            hobby: ['singing','play']
        };
        it('stringfyQueryString(' + obj + ') deepEqual "name=%E8%8B%B1%E8%AF%AD&appId=llb&hobby%5B0%5D=singing&hobby%5B1%5D=play"', function(){
            expect(stringfyQueryString(obj)).to.deep.equal('name=%E8%8B%B1%E8%AF%AD&appId=llb&hobby%5B0%5D=singing&hobby%5B1%5D=play');
        })
    });
});