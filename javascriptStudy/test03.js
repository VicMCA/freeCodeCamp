function main() {
    // Example03: Differences between literals and objects

    /*
    Value types:
    Number, String, Boolean, Symbol, undefined and null
    Reference types:
    Objects, Functions, Arrays (Functions and arrays are also objects)
    */
    
    let x = 10;
    let y = x;

    x = 20;
    console.log(x, y);
    // Above is how primitives work. y is tied to x's old value
    // That's because they're independent elements

    let a = { value: 10 };
    let b = a;

    a.value = 20;
    console.log(a, b);
    // And above is how objects work. Notice b is updated to reflect a's new value.
    // That's because both a and b reference the same object.
    b.value = 30;
    console.log(a, b);
    // That means you can change the object's value by calling both a or b

}

if (require.main === module) {
    main();
}