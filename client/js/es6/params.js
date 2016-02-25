describe('default params',function() {

    it('should take default params',function() {
        
        function doWork(a = 1,b = 2,c = 3) {
            return a+b+c;
        }

        var sum = doWork();

        expect(sum).toBe(6);

    });

    it('works with desctruting',function() {

        function doWork({ name = "Scott", age}) {
            return age;
        }

        var ret = doWork({
            age : 26,
            val : '33'
        });

        expect(ret).toBe(26);



    });

});

describe('rest params',function() {

    it('its like varrgs',function() {
        
        function doWork(name, ...val) {
            
            var result = 0;

            val.forEach(function(v) {
                result += v;
            })

            return result;

        }

        var sum = doWork('Aniket',1,2,3,4);

        expect(sum).toBe(10);

    });

});

describe('spread params',function() {

    it('spreads params',function() {
        
        function doWork(a,b,c) {
            return a+b+c;
        }


        var arr = [1,2,3];

        var sum = doWork(...arr);

        expect(sum).toBe(6);

    });

    it('can build an array',function() {
        
        var a1 = [1,2,3];
        var a2 = [7,8,9];
    

        var a3 = [...a1,4,5,6,...a2,10];
        expect(a3).toEqual([1,2,3,4,5,6,7,8,9,10]);

    });

});

describe('template strings',function() {

    it('can build strings',function() {
        
        function doWork(a,b,c) {
            return a+b+c;
        }


        var arr = [1,2,3];

        var sum = doWork(...arr);

        expect(sum).toBe(6);

    });

    it('can use tags',function() {

        function upper(strings, ...values) {

            var result = "";

            for(let i = 0; i< strings.length ; i++) {
                result += strings[i];
                if(i < values.length) {
                    result += values[i];
                }
            }

            return result.toUpperCase();

        }
        
        let [x,y] = [1,2];

        var z = upper `${x} + ${y} is ${x+y}`;
        expect(z).toBe('1 + 2 IS 3');


    });

});