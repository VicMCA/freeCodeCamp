function main() {
    // Example04: More differences between literals and objects
    
    let number = 10;
    
    function increase(number) {
        number++;
    }

    increase(number);
    console.log(number);
    // number is not updated

    let obj = { value: 10 };singonio

    function objIncrease(obj) {
        obj.value++;
    }

    increase(obj);
    console.log(obj);
    // obj is updated
}

if (require.main === module) {
    main();
}