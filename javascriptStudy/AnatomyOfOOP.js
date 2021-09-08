function main() {
    // Anatomy of classes and objects

    // Simple Object
    const square = { // Defines the object
        // Properties
        sides: 4,
        angles: 4,
        width: 10,
        color: 'teal',

        // Methods
        diagonal: function() {
            return `My diagonal is ${(((this.width**2) + (this.width**2))**(1/2))}`;
        }
    }

    console.log(square.width, square.diagonal()); // Calling the object's property and method
    square.width = 20; // Changing the object's property
    console.log(square.width, square.diagonal()); // Calling property and method again

    // Class
    class Circle { // Class creation
        constructor(radius) { // Class constructor + parameter
            // Private properties
            let spin = 360;
            let defaultLocation = { x: 0, y: 0 };
            // Private methods
            let computeOptimumLocation = function(factor) {
                console.log(`Factor is now ${factor}`);
            }

            // Getters and Setters
            // 1st parameter = this. 2nd parameter = property/method's name
            Object.defineProperty(this, 'spin', {
                get: function() { // 3rd parameter = Getter function
                    return spin; // Returns value
                },
                set: function(value) { // 4th parameter = Setter function + its parameter
                    if (value % 180 != 0) { // Error check condition
                        throw new Error('Invalid spin.') // Error thrown
                    }
                    spin = value; // Sets new value
                }
            }) // Call both with object.NameOfProperty

            // Public properties
            this.radius = radius; // 'this' keyword refers to the created object itself
            this.color = 'green';
            this.border = 0;
            // Public methods
            this.draw = function() {
                console.log(`My radius is ${this.radius} and my color is ${this.color}`);
                console.log(`I'm placed at ${defaultLocation.x} ${defaultLocation.y}`);
                console.log(`I spin at a rate of ${spin} RPMs`);
            }
        }
    }

    const circle = new Circle(10); // new object created with parameter passed
    circle.radius; // Accessing a public property
    circle.draw(); // Accessing a public method
    console.log(circle.spin); // Using the getter
    circle.spin = 720; // Using the setter
    console.log(circle.spin); // Will show new value
    
    
    // More complex example below

    class ComplexCircle { // Class creation
        constructor(radius) { // Class constructor + parameter
            // Private properties and methods
            let spin = 360;
            let defaultLocation = { x: 0, y: 0 }; // Private property
            let computeOptimumLocation = function(factor) { // Private method
                console.log(`Factor is now ${factor}`);
            }

            // Getter functions here
            this.getDefaultLocation = function() { // Basic getter function
                return defaultLocation; // Returns private property
            } // Call with object.getNameOfProperty

            // Getter + Setter functions
            // 1st parameter = this. 2nd parameter = property/method's name
            Object.defineProperty(this, 'defaultLocation', { 
                get: function() { // 3rd parameter = Getter function
                    return defaultLocation;
                }, // Call it with object.NameOfProperty
                set: function(value) { // 4th parameter = Setter function + its parameter
                    if (!value.x || !value.y) { // Error handling condition
                        throw new Error('Invalid location.'); // Error handling result
                    } // This implementation will make that property unchangeable
                    defaultLocation.x, defaultLocation.y = value.split(" "); // Setting the value
                } }); 
                
            Object.defineProperty(this, 'spin', {
                get: function() { 
                    return spin; 
                },
                set: function(value) {
                    if (value % 180 != 0) {
                        throw new Error('Invalid spin.')
                    }
                    spin = value; // Sets new value
                }
            })

            // Public properties and methods here
            this.radius = radius; // 'this' keyword refers to the object itself
            this.color = 'white';
            this.border = 0;
            this.draw = function() {
                console.log(`Drawn at ${defaultLocation}`);
                console.log(`My radius is ${this.radius} and my color is ${this.color}`);
            }
        }
    }
}

if (require.main === module) {
    main();
}