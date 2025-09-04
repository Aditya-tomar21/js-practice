//convert one data type into another
let score = "33"

console.log(typeof score);
console.log(typeof(score));

let ValueInNum = Number(score);
 //yeh NAN bhi covert number show krega jaise koi input dede 33ab isko covert krega and typeof me number show hoga but jab value print lroge NAN dega - not a number
 //null get coverted into 0
 //undefined into NAN
 //33abc types hoga into NAN
//true into 1 , false into 0


console.log(typeof ValueInNum);

let IsloggedIn = 1;
let BooleanIsLoggedIn = Boolean(IsloggedIn)

console.log(typeof BooleanIsLoggedIn);
console.log( BooleanIsLoggedIn);


let SomeNum = 33;
let stringSomeNum = String(SomeNum);

console.log(stringSomeNum);
console.log(typeof stringSomeNum);



