function main() {
    // Example05: Adding and removing properties from objects
    
    class Circle {
        constructor(radius) {
            this.radius = radius;
            this.draw = function () {
                console.log('draw');
            };
        }
    }

    const circle = new Circle(1);
    
    console.log(circle);

    // adding new properties to objects:
    // user.token = '12fdc213t' <- will add a property called "token" to object user
    // with value '12fdc213t'

    circle.location = { x: 1, y: 2 }; // adding a location property
    console.log(circle);

    circle['border'] = 3; // <- same as the previous, different sintax but same effect
    console.log(circle);  // But it's useful for somethings like what's right below

    const propertyName = 'color';
    circle[propertyName] = 'teal'; // With this, we can access and create new properties
    // by using a variable that can be changed dynamically

    const propertyAnother = 'border-color' // Properties with dashes are problematic to access
    // circle.border-color isn't valid, but circle[propertyAnother] is.
    circle[propertyAnother] = 'blue';

    console.log(circle);

    // let's delete the border-color and border properties
    delete circle.border;           // Both notations are valid
    delete circle['border-color'];  // . But remember about this use case
    console.log(circle);
}

if (require.main === module) {
    main();
}