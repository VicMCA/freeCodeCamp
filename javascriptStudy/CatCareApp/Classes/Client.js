export class Client {
    constructor(name = "", phone = "", email = "", address = "",
    cats = "", registerDate = new Date()) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.cats = cats;
        this.registerDate = `${registerDate.getFullYear()}/${registerDate.getMonth()}/`+
        `${registerDate.getDate()} ${registerDate.getHours()}h`;
    }
}