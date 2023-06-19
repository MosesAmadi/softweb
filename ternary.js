// var age = 10;
// var canvote = age >= 18 ? "can vote": "can't vote";
// console.log(canvote);

// var city = "lekki"
// var serve = city == "lekki" ? "welcome to lagos": "go back to your village"

// console.log(serve);

// var number = 13;
// var response = number % 2 === "0" ? "Even" : "Odd" ;

// console.log(response); 


// var number = 20;
// var num = number >= 0 ? "positive" : "negative";

// console.log(num)

// var number = 60
// var ber = number < 100 ? "man" : "woman";

// console.log(ber)

// var name = "julius";
// var umm = name = "julius" ? "he is alive" : "he is  dead";

// console.log(umm);

// var a = 300;
// var b = 400;
// var c = a * b;

// console.log(c)


// var age = 18;
// var gender = "male";

// var voting = age >= 18 || gender == "male" ? "female" : "male";

// console.log(voting);
 
// let originalPrice = 50;
// let discountedPrice = originalPrice <= 50 
// ? (10/100) * originalPrice
// : originalPrice > 50 && originalPrice <= 100
// ? (20/100) * originalPrice
// : (30/100) * originalPrice;

// let finalPrice = originalPrice - discountedPrice; 
// console.log("final price is " + finalPrice + "with discounted price of " + discountedPrice);



let originalPrice = 50;
let weekend = false;
let discount = originalPrice <= 50? (10/100)*originalPrice : originalPrice >50 && originalPrice <=100 && !weekend ? (15/100)*originalPrice : (20/100)*originalPrice;

let totalCost = originalPrice - discount;
console.log(totalCost);




