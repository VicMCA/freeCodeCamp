export class Food {
    constructor(foodType = "", foodAmmount = 0,
    specialNeed = false, whichNeed = "", ) {
        this.foodType = foodType;
        this.foodAmmount = foodAmmount;
        this.specialNeed = specialNeed;
        this.whichNeed = whichNeed;
    }
}