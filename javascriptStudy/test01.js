function main() {
// Example 01: Class, Factory and Constructor functions

    // Factory function
    function createCircle(radius) {
        return {
            radius: radius,
            location: {
                x: 1,
                y: 1
            },
            draw: function() {
                console.log('draw');
                console.log(this);
                console.log(this.location);
            }
        };
    };
    
    const circle = createCircle(1);
    // This is the syntax to use to create an object using a factory function
    
    // Constructor function
    function Circle(radius) {
        this.radius = radius;
        this.location = {
            x: 1,
            y: 1
        };
        this.draw = function() {
            console.log('draw');
            console.log(this);
            console.log(this.location);
        }
    }
    
    // Class definition
    class Circle {
        constructor(radius) {
            this.radius = radius;
            this.location = {
                x: 1,
                y: 1
            };
            this.draw = function () {
                console.log('draw');
                console.log(this);
                console.log(this.location);Circle
            };
        }
    }

    // The constructor function and the class definition's result is the same

    const circulo = new Circle(1);
    // This is the syntax to create an object using constructor functions or
    // the class definition
    
    circulo.draw();
    // Calls a method (inner function) of the created object
}

if (require.main === module) {
    main();
}
