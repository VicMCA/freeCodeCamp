// This is a comment, and this is a sample file

function main() {


    const basics = () => {
        console.log("hi hi");
        // use console.log() to print things to the terminal

        /* Now this is
        a multiline comment 

        1st rule: In JavaScript, all statements must end with a semi-colon [ ; ]
        This is more a "good practice" rule than a hard coded rule

        Data types: undefined [an undefined valie], null [a value that returns
        nothing], string, bool, symbol [immutable primitive unique value],
        number, object [basically a python object, including dictionary] 

        As in most languages, names of things are case sensitive. JavaScript
        is more often used with camelCase notation. */

        // creating variables

        var myName = "Victor";
        // creates a string variable called myName, value is "Victor"

        myName = 0;
        // value of myName reassigned to 0, type also changed to number

        myName = "Marxi";
        // value of myName changed to "Marxi"

        let surname = "none";
        // let is another way to declare a variable

        const pi = 3.14;
        // creates a variable whose value must not change

        /* var variables can be used throughout the whole program
        let variables have its scope limited to where you use them 
        const variables must stay the same 

        You may also declare the variable without assigning a value to it
        and then assign that value later. It stays undefined until then */

        var s;
        /* variable "s" initialized without any type or value assigned to it,
        so it starts as a variable of the "undefined" type. It can later change
        when we assign a value to it */

        console.log(typeof(s));

        // typeof() function used to exhibit type of data types

        console.log(`printing stuff like "${myName}"`);
        // Use `to insert ${variables and stuff}` inside strings [back-ticks]
    }

    const mathBasics = () => {
        // Sums and other math opperations are simple just like in Python
        let sum = 8 + 2;                // this is a sum
        let sub = 8 - 2;                // this is a subtraction
        let mult = 8 * 2;               // this is a multiplication
        let div = 5 / 2;                // this is a division
        let divRound = (14 / 3) | 0;    // this is a floored division
        let expo = 8 ** 2;              // this is an exponentiation
        let root = 25 ** (1/2);         // this is a rooting
        let mod = 15 % 4;               // this returns the modulus

        console.log(`resultados: ${sum}, ${sub}, ${mult}, ${div}, ${divRound}, ${expo}, ${root}, ${mod}`);

        // We can also use them with the assignment opperator

        sum += sum;
        sub -= sub;
        mult *= mult;
        div /= div;
        expo = 4; // using an easier to track number
        expo **= expo;
        root = 4; // using an easier to track number
        root **= (1/root);

        console.log(`resultados: ${sum}, ${sub}, ${mult}, ${div}, ${expo}, ${root}`);

        // Short hand opperators

        sum++;
        sub--;
        
        console.log(`resultados: ${sum}, ${sub}`);
    }

    const stringBasics = () => {
        // Those are string literals
        let aString = "This is a string";
        let bString = 'This is also a string';
        let cString = `This is a string with the power to call stuff inside it, like ${2 + 2}`;

        // To ignore the effect of quotation marks inside a string, precede them with \
        // let dString = 'This string isn't going to fix itself alone';
        let dString = 'Now it\'s fixed';
        let eString = "As it's often said: \"insert misattributed quote here\".";
        // Notice above that opening and closing quotes only interfere with themselves.

        // Special characters for strings

        /*
        \'  Single quote
        \"  Double quote
        \\  Backslash
        \n  New line
        \r  Carriage return
        \t  Tab
        \b  Backspace
        \f  Form feed
        */

        // Use the + sign with strings to concatenate them

        let fString = 'first string' + 'second string';
        fString += 'third string'; // You can also do that

        let gString = dString + eString;
        gString += 'As usual.';

        // String methods
        let aStringLength = aString.length;           // .length returns the length
        
        let aFirstLetter = aString[0];                // Use index between brackets to access letters
        let aLastLetter = aString[aString.length -1]; // Subtract from the string length to
        console.log(aLastLetter);                 // access characters starting backwards

        let aThreeLetters = aString.slice(0, 3);      // Sepparate string slices using .slice()
        console.log(aThreeLetters);               // It takes the starting index, and the end index

        let aLastThreeLetters = aString.slice(aString.length - 3, aString.length);
        console.log(aLastThreeLetters);           // Same as above, but from backwards

        // We can change the string variables, but we can't
        // change characters accessing them by their indexes.

        let hString = 'Good doggy';
        
        hString[0] = 'M'; // This won't work
        console.log(hString);

        hString = 'Good doggo'; // But this will
        console.log(hString);

        hString = hString.replace('G', 'M'); // This also works, but uses a function
        console.log(hString);
    }

    const arrayBasics = () => {
        // Those here are basic arrays
        let fiveIntegers = [1, 2, 3, 4, 5]; // This contains only integers
        let nouns = ['bike', 'cat', 'teacup', 'blanket']; // Only strings
        let mixedBag = [1, 2, 'three', 4, 5, 'six']; // Integers and strings
        let moreMixed = [1, true, (3), 'four']; // Mixed types

        // Arrays are defined by the brackets. Their items can be accessed by
        // indexed notation between brackets, starting from 0

        console.log(nouns[1]); // Will show 'cat'
        console.log(nouns[nouns.length - 1]); // Will show 'blanket'

        // Arrays

    }

    arrayBasics();
}

if (require.main === module) {
    main();
}