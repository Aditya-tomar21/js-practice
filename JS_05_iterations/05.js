//**************************           for each */

const coding = ["js","py","cpp","ruby"]
// coding.forEach( function (item) {
//     console.log(item);
    
// } )
 

// ***********************************for each using arrow function
// coding.forEach( (value)=>{
//     console.log(value);
    
// })

//******************************** */  by refercing a function into for-each
// function printme(keys){
//     console.log(keys);
// }
// coding.forEach(printme)  //directly calling by function name

/*********************************** */

// coding.forEach((item ,index,array)=>{
//     console.log(item,index,array);
    
// })


///  array of objects and iterating it using for each

const mycoding = [
    {
        language:"java",
        languageFileName:"java"
    } ,

    {
        language:"python",
        languageFileName:"py"
    } ,

    {
        language:"ruby",
        languageFileName:"ry"
    } 

]

mycoding.forEach( (item)=>{
    // console.log(item.languageFileName);
    console.log(item.language);
    
    
})