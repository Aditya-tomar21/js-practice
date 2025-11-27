
/* comparing without value is truthy and falsy

const userEmail = "abc@gmail.com"
if(userEmail){
    console.log("user Have Email");
}

else{
    console.log("dont have user email");
    
}

*/
//falsy values => false , 0 , -0 , bigInt 0n , " " , null , undefined , NAN

//truthy values => true , 1 , "0" , 'false' ,(string me 0,false) , 
// [] empty array ,{} empty object , function() {}  empty function

/*******************************         how to check empty array              */

// if (userEmail.length === 0) {
//     console.log("array is empty");  
// }

/***                                   how to check empty object */

// const emptyObj = {}

// if(Object.keys(emptyObj).length ===0 )
// {
//     console.log("obj is empty");
    
// }


//****************              NULLISH COALESCING OPERATOR (??) : NULL UNDEFINED         ********/

// let val1
// // val1 = 5??10         //5 hoga
// // val1 = null??10      // 10 chalega
// // val1 = undefined ?? 15   //15 chalega
// //val1 = null ?? 10 ?? 20   // 10 chalega

// console.log(val1);

// terniary Operator
// condition ? true :false


const price = 100
price>=80 ? console.log("more than 80") : console.log("less than 80");



