function main() {
    // Inheritance and Polymorphism

    // Let's create a base class first, called Square
    class Square {
        constructor(width, color) { // It'll receive 2 parameters
            this.width = width;
            this.color = color;
            this.draw = () => {
                return `🆗 My width is ${this.width} and my color is ${this.color}`;
            };
            this.calc = () => {
                return `📏 My perimeter is ${this.width * 4}cm and my area is ${this.width**2}cm`;
            };
        }
    } // All fine and good, a simple class.

    const square = new Square(10, 'green'); // Let's now create an object of this class
    console.log(square); // And show its properties
    console.log(square.draw()); // And run its method
    console.log(square.calc());

    /* But you know the saying: Every square is a rectangle,
    but not every rectangle is a square */

    // Now let's create a class that is derived from the first. 
    class Rectangle extends Square {
        constructor(width, height, color) {
            super(width, color);
            this.height = height;
            this.draw = () => {
                return `💳 My width is ${this.width}, my height is ${this.height} ` +
                `and my color is ${this.color}`;
            };
            this.calc = () => {
                return `📏 My perimeter is ${(this.width * 2) + (this.height*2)}cm ` +
                `and my area is ${this.width * this.height}cm²`;
            };
        }
    }

    const rectangle = new Rectangle(10, 5, 'blue');
    console.log(rectangle);
    console.log(rectangle.draw());
    console.log(rectangle.calc());
}

if (require.main === module) {
    main();
}