function main() {
    // Iterating through objects:
    class Circle {
        constructor(radius) {
            this.radius = radius;
            this.color = 'white';
            this.border = 0;
            this.borderColor = 'white';
            this.location = {
                x: 0,
                y: 0
            }
            this.draw = function() {
                console.log('draw');
            }
        }
    }

    const circle = new Circle(10);

    console.log('Iterating through everything:');

    for (let key in circle) { // This will iterate through keys
        console.log(key, circle[key]); // 'key' will display the key names
        // while 'object[key]' will display the value
    }

    console.log('\nIterating through everything but functions:');

    // Let's filter between properties and methods
    for (let key in circle) {
        if (typeof circle[key] !== 'function') {
            console.log(key, circle[key]);
        }
    }

    // Let's now see a way to extract the keys into an array

    const keyList = Object.keys(circle); // This will extract the keys
    // to a new variable named 'keyList'
    console.log(keyList);

    // Below we'll see how to search for a specific key in an object

    if ('color' in circle) {
        console.log(`The circle has a radius of ${circle.radius}`)
    }
}

if (require.main === module) {
    main();
}