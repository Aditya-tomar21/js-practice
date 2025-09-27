//  *********************          for of loop

// const myArray = [2,4,6,8]
// for (const num of myArray) {
//     console.log(num);
    
// }

// const greetings = "hello world"

// for (const greet of greetings) 
// {
//     console.log(`each char is ${greet}`);  
// }

// ************************************           Maps

const map = new Map();
map.set('IN' ,"india")
map.set('USA' , "united sates of america")
map.set('fr' ,"france")
map.set('IN' ,"india")       // no dublicate entry , map have unique elements
// console.log(map);


for (const [key,value] of map) {
    console.log(key,':-' , value); 
}

// const myObject = {
//     'game1' : 'nfs',
//     'game2' : 'spiderman'
// }

// for (const [key,value] of myObject) {    // object are not iteratable
//     console.log(key,value);
    
// }