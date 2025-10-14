//string can be declared with ' ' or "" in js.

const repoCount = 50;
const Name = "aditya" ;
// console.log(Name + " have "+ repoCount + " repo");  //concatination but this way is old fashioned 

//console.log(`hello my name is ${Name} and i have ${repoCount} repository`); //${ name of variable} within ` ` used these days

//another way to declare string

let GameName = new String('8-ball-pool') 
 // let u use more tools/properties as it gives key value pair


//  console.log(GameName[1]);
// //  console.log(GameName.__proto__);


/**************************          METHODS OF STRING             **************************/


//  console.log(GameName.length);

//  console.log(GameName.toUpperCase());

// console.log(GameName.charAt('8'));

// console.log(GameName.indexOf('l'));

const newstring = GameName.substring(0,4); // 0,1,2,3 hoga inlcude
//console.log(newstring)

//more methods are like => .slice  , .trim , .replace

const newstringOne = "   aditya "
// console.log(newstringOne);
// console.log(newstringOne.trim());   //removes the spaces 


const url = "https//abc.com"
// console.log( url.replace ('abc' , 'aditya')); //jidar 'abc' woh replace hoga with 'aditya' 

// console.log(url.includes('abc'));


console.log(GameName.split('-')); 
// jidar - hai uske basic pr ek array ban jayega , kuch bhi ho skta hai like space or dash ya kuch aur.




 
 
 