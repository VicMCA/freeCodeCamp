export class Cat {
    constructor(name = "", age = 0, furType = "", furColor = "",
    owner = "", foodType = "", checkIn = [2020, 1, 1, 8]) {
        this._name = name;
        this._age = age;
        this._furType = furType;
        this._furColor = furColor;
        this._owner = owner;
        this._foodType = foodType;
        this._checkIn = new Date(...checkIn);
        this._checkOut = undefined;
    }
    // Abridged getters
    get name() { return this._name; }
    get age() { return this._age; }
    get furType() { return this._furType; }
    get furColor() { return this._furColor; }
    get owner() { return this._owner; }
    get foodType() { return this._foodType; }
    get checkIn() { return this._checkIn; }
    get checkOut() { return this._checkOut; }

    // Abridged setters
    set name(newProperty) { _name = newProperty; }
    set age(newProperty) { _age = newProperty; }
    set furType(newProperty) { _furType = newProperty; }
    set furColor(newProperty) { _furColor = newProperty; }
    set owner(newProperty) { _owner = newProperty; }
    set foodType(newProperty) { _foodType = newProperty; }
    set checkIn(newProperty) { _checkIn = newProperty; }
    set checkOut(newProperty) { _checkOut = newProperty; }
}