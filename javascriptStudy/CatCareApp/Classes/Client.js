import { Address } from './Address.js';

export class Client {
    constructor(name = "", phone = "", email = "", address = new Address(),
    cats = "", registrationDate = [2020, 1, 1, 1]) {
        this._name = name;
        this._phone = phone;
        this._email = email;
        this._address = address;
        this._cats = cats;
        this._registrationDate = new Date(...registrationDate);
    }
    // Abridged getters
    get name() { return this._name; }
    get phone() { return this._phone; }
    get email() { return this._email; }
    get address() { return this._address; }
    get cats() { return this._cats; }
    get registrationDate() { return this._registrationDate; }

    // Abridged setters
    set name(newProperty) { _name = newProperty; }
    set phone(newProperty) { _phone = newProperty; }
    set email(newProperty) { _email = newProperty; }
    set address(newProperty) { _address = newProperty; }
    set cats(newProperty) { _cats = newProperty; }
    set registrationDate(newProperty) { _registrationDate = newProperty; }
}