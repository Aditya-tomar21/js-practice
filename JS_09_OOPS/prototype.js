//lec44


// // let myName = "aditya   "

// // console.log(myName.trueLength);
// //  // target to make "TrueLength" a new method to able to ignore spaces 

// ----------------------------------------------------->
// let myHeros = ["thor", "spiderman"]

// let heroPower ={
//     thor:"hammer",
//     spiderman:"sling",

//     getSpiderFunciton: function(){
//         console.log(`spidy power is , ${this.spiderman}`)
//     }
// }


// ---------------------------------------------------------------->
// Object.prototype.AAdii = function(){
//     console.log(`aaaaadiiiiii!!!!! ;( sad mass bgm`);  
// }
// // above ka matlb sab objects me ab method aa jayega AAdii name ka

// // heroPower.AAdii();
// myHeros.AAdii();


// Array.prototype.goku = function(){
//     console.log(`i will not let u destoryyy my worldddd!!!!`);
// }
    
// heroPower.goku();   //nhi kaam krega 
// // myHeros.goku();   



// array/string/function-> object ,
 
// toh yaani object ko denge toh sabko milega , but kisi aur ko denge toh aur kisi ko access nhi milega





// --------------------------------------------------------------->
// const User ={
//     name:"adittya"
// }

// const teacher ={
//     makevideo:true
// }

// const TeachingSuport = {
//     isAvailable:false
// }

// const TAsupport = {
//     makeAssignment : 'JS ass.',
//     fullTime : true,
//     __proto__:TeachingSuport
// }

// teacher.__proto__ = User

//modern syntax------------->

// Object.setPrototypeOf(TeachingSuport,teacher)
// ------------------------------------------------------------------>


let NEWUser ="chai&code   "
String.prototype.trueLength =function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
    
}

NEWUser.trueLength()
"chagganHalwai".trueLength()
" nigga    ".trueLength()