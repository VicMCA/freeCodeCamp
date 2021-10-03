function main() {
    /* Let's create a stopwatch!
    Include the properties:
    sw.duration
    and the methods:
    sw.reset() to reset the watch
    sw.start() to start counting the time
    sw.stop() to stop the count
    The methods must detect if they've already been run or not
    The class will also have
    constructor, hasOwnProperty, isPropertyOf, propertyIsEnumerable,
    toLocaleString, toString, valueOf
     */
    class Stopwatch {
        constructor() {
            let startTime, endTime;
            let isRunning;
            let runTime = 0;

            this.start = function() {
                if (isRunning)
                    throw new Error('The stopwatch is already running');
                isRunning = true;
                startTime = new Date();
            }

            this.stop = function() {
                if (!isRunning)
                    throw new Error('The stopwatch is already stopped');
                endTime = new Date();
                isRunning = false;
                
                const seconds = (endTime.getTime() - startTime.getTime()) /1000;
                runTime += seconds;
            }

            this.reset = function() {
                startTime = null;
                endTime = null;
                isRunning = false;
                runTime = 0;
            }

            Object.defineProperty(this, 'runTime', {
                get: function() { return runTime; }
            })
        }
    }

    const sw = new Stopwatch();
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    swUse = () => {
        readline.question('Stopwatch controls:\nstart, stop, reset, show, close \n>> ', command => {
            if (command === 'start') {
                sw.start();
                swUse();
            } else if (command === 'stop') {
                sw.stop();
                swUse();
            } else if (command === 'reset') {
                sw.reset();
                swUse();
            } else if (command === 'show') {
                console.log(sw.runTime);
                swUse();
            } else if (command === 'close') {
                readline.close();
                process.stdin.destroy();
                console.log('Stopwatch closed')
                process.exit(0);
            } else {
                console.log('Invalid input.')
                swUse();
            }
        });
    }

    swUse();
    
}

if (require.main === module) {
    main();
}