"use strict";
class User {
    constructor(email, name, isActive) {
        this.city = "Madha";
        this.email = email;
        this.name = name;
        this.isActive = isActive;
    }
}
// another simple way of writing is
class NewUser {
    constructor(// in this need to mention access modifiers expilicitly
    email, name, isActive) {
        this.email = email;
        this.name = name;
        this.isActive = isActive;
        this._courseNum = 1;
        this._courseName = 'TypeScript'; // in TS proceted is accesible only in class and its child classes
        this.city = "Madha";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple-${this.email}`;
    }
    get getCourseNum() {
        return this._courseNum;
    }
    set setCourseNum(num) {
        if (num <= 1) {
            throw new Error("Course Number should be More than 1");
        }
        this._courseNum = num;
    }
}
class SubUser extends NewUser {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    chnageCourse() {
        this._courseName = 'Classes in TypeScript';
    }
}
const ganesh = new User('g@gg.com', 'Ganesh', true);
// ganesh.city = "pune"
console.log(ganesh);
