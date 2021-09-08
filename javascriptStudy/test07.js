function main() {
    // Abstraction or: How to hide stuff you don't want anyone to mess over

    // In the example below, we want to hide the defaultLocation property
    // and the computeOptimumLocation method
    class CircleUnsafe {
        constructor(radius) {
            this.radius = radius;
            this.color = 'white';
            this.border = 0;
            this.borderColor = 'white';
            this.defaultLocation = { x: 0, y: 0 }; // Let's hide this...
            this.computeOptimumLocation = function(factor) { // ... And this
                console.log(`Factor is ${factor}`);
            }
            this.draw = function() {
                this.computeOptimumLocation(0.1);
                console.log('draw');
            }
        }
    }

    // To do so, we change it from an object property to a local variable
    // Doing so, it'll be unaccessible outside of the class definition

    class CircleSafe {
        constructor(radius) {
            this.radius = radius;
            this.color = 'white';
            this.border = 0;
            this.borderColor = 'white';
            let defaultLocation = { x: 0, y: 0 }; // Now it's hidden...
            let computeOptimumLocation = function(factor) { // ... And so is this
                factor = factor * 2;
                console.log(`Factor is now ${factor}`);
            }
            this.draw = function() {
                computeOptimumLocation(0.1);
                console.log(defaultLocation);
                console.log('draw');
                console.log(this.radius, this.color);
            }
        }
    }

    const circleDirty = new CircleUnsafe(10);
    const circleClean = new CircleSafe(10);

    console.log(circleDirty); // Will show the hidden stuff
    console.log(circleClean); // Won't show the hidden stuff

    // Let's organize it a bit better so we can vizualize things
    // in a more orderly way

    class CircleSafe {
        constructor(radius) {
            // Private properties and methods here
            let defaultLocation = { x: 0, y: 0 }; // Now it's hidden...
            let computeOptimumLocation = function(factor) { // ... And so is this
                factor = factor * 2;
                console.log(`Factor is now ${factor}`);
            }
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

}

if (require.main === module) {
    main();
}