"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "milton", type: 10 });
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    // public cart: T[] = []
    constructor(cart) {
        this.cart = cart;
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const sell = new Sellable([
    { name: 'TS', author: 'Ganesh', subject: 'TS' },
    { name: 'JS', author: 'Ashwini', subject: 'JS' },
]);
console.log(sell.cart);
