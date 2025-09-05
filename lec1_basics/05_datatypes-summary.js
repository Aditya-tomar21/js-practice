//primitive datatypes  //copy banakr change hotra hai
//7 types: string, number, boolean, null, undefined, symbol(unique banane k liye), BigInt.  


//refernce or non primitive
//Array , Objects , Functions

/*****          JS is dynamically typed language hardcore samajana nhi padta ki konsa  datatype hai like cpp          *************/
 const score = 100
 const scorevalue = 100.3  //idar bss number hota koi float nhi hota

 const isloggedIn = false
 const OutsideTemp = null;
 let userEmail; // default undefined,baaki  alag se bhi de skte hai undefined

 const id = Symbol('123');
// console.log(typeof id);

 const Anotherid = Symbol('123') ; //same value but still this is different from id
// console.log(id == Anotherid);


 
 //refernce or non primitive  direct value pass hogi without copy
//Array , Objects , Functions

const heros = ["goku" , "luffy", "naruto"]

let MyObj = {
    name:"aditya" ,
    age: 24,

}

const myFunction =function(){
 console.log("hello world");
 
}
//console.log(typeof myFunction);



/***************************************         MEMORY IN JS                 ********************/

//STACK MEMORY(primitive) , HEAP MEMORY(non primitive)


//EXMAPLE OF STACK MEMORY - PRIMITIVE    
let myEmail = "aditya@gamil.com"
let myNewemail = myEmail;
//  console.log(myNewemail);
//  console.log(myEmail);


 myEmail = "goku@gamil.com";  
 /************    kyuki copy change hoga not the original value   ***********/

//   console.log(myNewemail);
//  console.log(myEmail);


//EXAMPLE OF HEAP MEMORY /NON PRIMITIVE
let userOne ={
    email : "nepali.google.com",
    upiId : "123@sbi"
}

let userTwo = userOne;

userTwo.email = "momos.google.com"; 
/********    original me change kr dega ie userOne me change hoga   ********/

// console.log(userOne);

 
 