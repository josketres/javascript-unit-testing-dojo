function Calculator() {

    this.thisIsNotTested = function() {
        console.log("this is not tested")
    };

    this.add = function(a, b) {
        return a + b;
    }
}