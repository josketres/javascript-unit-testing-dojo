describe('Calculator', function() {
    var calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    it('can add two positive numbers', function() {
        var result = calculator.add(1, 2);
        expect(result).toBe(3);
    });
});