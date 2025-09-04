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


 
 //refernce or non primitive
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




