function makeTransaction(quantitty, pricePerDroid){

    const totalPrice=  quantitty*pricePerDroid;


    return `You order ${quantitty} droids worth ${totalPrice} credits!`;

}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!" 