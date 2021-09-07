function main() {
    
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
}

if (require.main === module) {
    main();
}