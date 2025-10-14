  // singleton   
  //object.create

  //object literals
const sym = Symbol("sysyteemmmm")

 const JsUser = {
    name:"aditya" ,
    "full name" : "aditya singh tomar" , //only be accessed thru [] not through .
    age:24 ,
    [sym]:"not systeemmmmm"  ,//to make as symbol
    location:"delhi" ,
    email:"abc@gmail.com",
    isLoggedIn : false
 }
//***************************to access objects value
//  console.log( JsUser.email);
//  console.log(JsUser["email"]);  //more better way to access 
//  console.log(JsUser["full name"]);
//  console.log(JsUser[sym]);
 
 //**************************************** */ to change objects value
 JsUser["full name"] = "adityast"
 JsUser.email = "meranew@email.com"

 
//  console.table(
//     [
//     JsUser["full name"] ,
//      JsUser["email"]
//     ])
 
 //to freeze that value couldnt be changed
//*** */ Object.freeze(JsUser)  // isse freeze ho jayega 


 JsUser.email ="namste@#email.com"  //nhi hoga change kyuki freeze hai

 

 JsUser.greeting = function()
 {
    console.log("hello bhaishab");
    
 }

 JsUser.greeting2 = function()
 {
    console.log(`hii there ${this.name}`); // this is to refernce same object here JSuser
    
 }
 console.log(JsUser.greeting()); 
 console.log(JsUser.greeting2());
 