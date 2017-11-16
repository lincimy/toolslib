describe('object API:', function(){
    describe('#deepClone()', function(){
        it('deepClone(person) should deepEqual person', function(){
            var person = {
                name: "lincimy",
                age: 23,
                score: [100,98,89],
                birthday: new Date('1992/12/24'),
                like: null,
                female: true,
                hobby:{
                    sport:['tennis','basketball'],
                    music:"singing"
                }
            };
            var personCopy = deepClone(person);
            expect(personCopy).to.deep.equal(person);
            person.name = 'Sara';
            expect(personCopy.name).to.not.equal(person.name);
        });
        it('deepClone(person) should not equal person', function(){
            var person = {
                name: "lincimy",
                age: 23,
                score: [100,98,89],
                birthday: new Date('1992/12/24'),
                like: null,
                female: true,
                hobby:{
                    sport:['tennis','basketball'],
                    music:"singing"
                }
            };
            var personCopy = deepClone(person);
            expect(personCopy).to.not.equal(person);
        });
    });

    describe('#isEmptyObj()', function(){
        it('isEmptyObj(null) should return false', function(){
            expect(isEmptyObj(null)).to.equal(false);
        });
        it('isEmptyObj("") should return false', function(){
            expect(isEmptyObj("")).to.equal(false);
        });
        it('isEmptyObj(0) should return false', function(){
            expect(isEmptyObj(0)).to.equal(false);
        });
        it('isEmptyObj([]) should return false', function(){
            expect(isEmptyObj([])).to.equal(false);
        });
        it('isEmptyObj({id:1}) should return false', function(){
            expect(isEmptyObj({id:1})).to.equal(false);
        });
        it('isEmptyObj({}) should return true', function(){
            expect(isEmptyObj({})).to.equal(true);
        });
    });
});