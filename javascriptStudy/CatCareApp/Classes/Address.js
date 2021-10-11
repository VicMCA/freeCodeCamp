export class Address {
    constructor(street = "", numberHouse = "", subAddress = "",
    postalCode = "", quarter = "", city = "", state = "") {
        this.street = street;
        this.numberHouse = numberHouse;
        this.subAddress = subAddress;
        this.postalCode = postalCode;
        this.quarter = quarter;
        this.city = city;
        this.state = state;
    }
}