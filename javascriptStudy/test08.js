function main() {
    // Getters and Setters

    // Getters and Setters are used to access private properties and methods
    // from outside of the class or the object

    class Circle {
        constructor(radius) {
            // Private properties and methods here
            let defaultLocation = { x: 0, y: 0 }; // Now it's hidden...
            let computeOptimumLocation = function(factor) { // ... And so is this
                console.log(`Factor is now ${factor}`);
            }

            // Getter functions here
            this.getDefaultLocation = function() {
                return defaultLocation; 
            } // Will display the property/method in a read-only way

            // Getter AND Setter: Another (and better) way
            Object.defineProperty(this, 'defaultLocation', { 
                get: function() {
                    return defaultLocation;
                }, // This will simplify the syntax to get the property
                set: function(value) {
                    if (!value.x || !value.y) {
                        throw new Error('Invalid location.');
                    } // A bit of error handling before the value setting
                    defaultLocation = value;
                } }); // And this way we can make a setter for the object
            // Also, both will be automatically recognized by the debugger

            // Public properties and methods here
            this.radius = radius;
            this.color = 'white';
            this.border = 0;
            this.borderColor = 'white';
            this.draw = function() {
                computeOptimumLocation(0.1);
                console.log(defaultLocation);
                console.log('draw');
                console.log(this.radius, this.color);
            }
        }
    }

    const circle = new Circle(10);

    console.log(circle);
    console.log(circle.getDefaultLocation()); // This can be done better
    console.log(circle.defaultLocation());
    circle.defaultLocation = 1;
}

if (require.main === module) {
    main();
}