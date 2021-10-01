class Cat {
    constructor(name = "", age = 0, furType = "", furColor = "",
    owner = "", foodType = "", checkInDate = new Date()) {
            this.name = name;
            this.age = age;
            this.furType = furType;
            this.furColor = furColor;
            this.owner = owner;
            this.foodType = foodType;
            this.checkInDate = `${checkInDate.getFullYear()}/${checkInDate.getMonth()}/`+
            `${checkInDate.getDate()} ${checkInDate.getHours()}h`;
            this.checkOutDate = undefined;
    }
}

const teste = new Cat("Burninator", 10, "Long Dense", "Striped Orange", "Trogdor", "Veggies");

console.table(teste);