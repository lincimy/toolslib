describe('Function API:', function () {
    describe('#debounce()', function () {
        it('debounce(200,function(){return true}) should return true', function (done) {
            var num = 0
            var interval = null
            var debounced = debounce(500, function () {
                num++
                expect(num).to.equal(1);
                done()
                return true
            });
            interval = setInterval(function () {
                debounced()
            }, 20)
            setTimeout(function () {
                clearInterval(interval)
            }, 800)
        })

        it('debounce(200,true,function(){return true}) should return true', function (done) {
            var num = 0
            var interval = null
            var debounced = debounce(500, function () {
                num++
                expect(num).to.equal(1);
                done()
                return true
            })
            interval = setInterval(function () {
                debounced()
            }, 20)
            setTimeout(function () {
                clearInterval(interval)
            }, 800)
        })
    });

    describe('#throttle()', function () {
        it('throttle(200, function(){return true}) should return true', function (done) {
            var num = 0
            var interval = null
            var throttled = throttle(200, function () {
                num++
                console.log(num)
                return true
            })
            interval = setInterval(function () {
                throttled()
            }, 20)
            setTimeout(function () {
                expect(num).to.equal(Math.floor(805 / 200));
                done()
                clearInterval(interval)
            }, 805)
        })

        it('throttle(200, function(){return true}) should return true', function (done) {
            var num = 0
            var interval = null
            var throttled = throttle(200, true, function () {
                num++
                console.log(num)
                return true
            })
            interval = setInterval(function () {
                throttled()
            }, 20)
            setTimeout(function () {
                expect(num).to.equal(Math.floor(805 / 200))
                done()
                clearInterval(interval)
            }, 805)
        })
    });

});