/*********************************     DATA TYPE CONVERSION     **********************/
let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let ValueInNum = Number(score);
 //null get coverted into 0
 //undefined into NAN
 //33abc types hoga into NAN
//true into 1 , false into 0


// console.log(typeof ValueInNum);

let IsloggedIn = 1;
let BooleanIsLoggedIn = Boolean(IsloggedIn)

// console.log(typeof BooleanIsLoggedIn);
// console.log( BooleanIsLoggedIn);


let SomeNum = 33;
let stringSomeNum = String(SomeNum);

// console.log(stringSomeNum);
// console.log(typeof stringSomeNum);



/*****************  Operations in javascript *********************/


let value = 3 ;
let NegValue = -(value);
// console.log(NegValue);

let str1 = "hello"
let str2 = " aditya"
let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2);

// console.log(1+"2");

// console.log("1"+2 + 2);

// console.log(1+2+"2");
// left se right hoga Operation, num + string =>string or string +num => string , but agr num+num hai toh pehle add hoga

let GameCounter = 99
GameCounter++ ;
console.log(GameCounter);
