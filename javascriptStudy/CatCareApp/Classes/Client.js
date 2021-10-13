import { Address } from './Address.js';
import { Cat } from './Cat.js';

export class Client {
    constructor(name = "", phone = "", email = "", address = new Address(),
    registrationDate = [2020, 0, 1, 5],
    cats = new Cat()) {
        this._name = name;
        this._phone = phone;
        this._email = email;
        this._address = address;
        this._registrationDate = new Date(...registrationDate);
        this._cats = cats;
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