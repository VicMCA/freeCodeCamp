export class Food {
    constructor(foodType = "", foodAmmount = 0,
    specialNeed = false, whichNeed = "", ) {
        this._foodType = foodType;
        this._foodAmmount = foodAmmount;
        this._specialNeed = specialNeed;
        this._whichNeed = whichNeed;
    }
    // Abridged getters
    get foodType() { return this._foodType; }
    get foodAmmount() { return this._foodAmmount; }
    get specialNeed() { return this._specialNeed; }
    get whichNeed() { return this._whichNeed; }

    // Abridged setters
    set foodType(newProperty) { _foodType = newProperty; }
    set foodAmmount(newProperty) { _foodAmmount = newProperty; }
    get specialNeed() { return this._specialNeed; }
    get whichNeed() { return this._whichNeed; }
}