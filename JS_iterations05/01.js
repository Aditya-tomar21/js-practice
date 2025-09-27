// //************ *      for loop    ************* 

// for (let i = 0; i <= 10; i++) {
//     const element = i;

//     if(element == 5)
//     {
//         console.log(`${element} is good number`);
        
//     }
//     console.log(element);  
// }

/******************************************************************** */  



// for (let i = 0; i < 5; i++)
//  {
//      console.log(`outer loop value ${i}`);

//           for (let j = 0; j < 11; j++) 
//            {
//               console.log(i + 'x' + j + '=' + i*j);
        
//            } 
// }


/************************************************************************ */


// let myArray = ["batman" , "goku" , "ironman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }


//                  break                  *****************************


// for (let i = 0; i < 10; i++) {
//     if(i == 5)
//     {
//         console.log(`5 detected`);
//         break   // pure bahar aa jayenge iske baad loop nhi kaam krega
//     }
//     const element = i;
//     console.log(element);
    
    
// }
//                  continue              ******************************


for (let i = 0; i < 10; i++) {
    if(i == 5)
    {
        console.log(`5 detected`);
      continue  // bss ek baar skip hoga
    }
    const element = i;
    console.log(element);
    
    
}