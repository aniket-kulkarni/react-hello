


describe("decorators",function() {

    function SuperMan(target) {
        var a = 1 + 2;
        target.Superhero = true;
        target.add
    }

    const SuperPowers = mixin({
        addPower() {
            return "Power";
        }
    })

    function readOnly(target,key,descriptor) {

        var a = 1 + 2;
        
        descriptor.writable = false;

    }


    function mixin(behaviour) {

        var keys = Object.keys(behaviour);

        return function(target) {

            for(let key of keys) {
                Object.defineProperty(target, key, { value : behaviour[key] } );
            }    
        }
    }

    @SuperPowers
    class Person {

        constructor() {
            this.name = 'Aniket';
        }

        @readOnly
        getName() {
            return this.name;
        }

    }

    var p = new Person();

    it("should decorate",function() {

        expect(p.getName()).toBe('Aniket');
        expect(p.addPower()).toBe('Power');



    });

});