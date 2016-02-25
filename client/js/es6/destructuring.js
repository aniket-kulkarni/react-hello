


describe('destructuring',function() {

    it('should destructure arrays',function() {

        let [x,y,z] = [1,2,3];

        expect(x).toBe(1);
        expect(y).toBe(2);
        expect(z).toBe(3);
    });

    it('should destructure objects',function() {

        var obj = {
            firstName : 'Aniket',
            lastname : 'Kulkarni',
            age : 26
        };

        let {firstName : first,lastname : last,age : age} = obj;

        expect(first).toBe('Aniket');

    });

    it('should take params',function() {

        function doWork({data : data,headers : headers}) {
            return data;
        }

        var obj = {
            data : 'data',
            headers : 'headers',
            config : 'config'
        };

        let abc = doWork(obj);

        expect(abc).toBe('data');

    });

});

