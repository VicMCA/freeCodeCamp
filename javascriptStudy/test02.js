function main() {
    // Example 02: Creating objects
    
    // let x = new Object();
    /* 
    We often use literals for creating stuff, but here are
    some other constructors: 
    new String();
    new Boolean();
    new Number();
    */
    
    function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }

    const circle = new Circle(1); // <- Creates new "circle" object from Circle template
    Circle.call({}, 1); // <- Same thing as line above. The empty {} makes a new object...
    // ... to be referenced by "this"
    Circle.apply({}, [1, 2, 3]); // <- Can be used to pass an array as an argument
    
    console.log(circle);
}

if (require.main === module) {
    main();
}