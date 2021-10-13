export class Address {
    constructor(street = "", numberHouse = "", subAddress = "",
    postalCode = "", quarter = "", city = "Recife", state = "Brazil") {
        this._street = street;
        this._numberHouse = numberHouse;
        this._subAddress = subAddress;
        this._postalCode = postalCode;
        this._quarter = quarter;
        this._city = city;
        this._state = state;
    }
    // Abridged getters
    get street() { return this._street; }
    get numberHouse() { return this._numberHouse; }
    get subAddress() { return this._subAddress; }
    get postalCode() { return this._postalCode; }
    get quarter() { return this._quarter; }
    get city() { return this._city; }
    get state() { return this._state; }
    
    // Abridged setters
    set street(newProperty) { _street = newProperty; }
    set numberHouse(newProperty) { _numberHouse = newProperty; }
    set subAddress(newProperty) { _subAddress = newProperty; }
    set postalCode(newProperty) { _postalCode = newProperty; }
    set quarter(newProperty) { _quarter = newProperty; }
    set city(newProperty) { _city = newProperty; }
    set state(newProperty) { _state = newProperty; }
}