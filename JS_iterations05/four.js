// //making object for ex
// const myObject = {
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby'
// }

// //to accesss key
// for (const key in myObject) {
//  console.log(key);
// }

// //to access value
// for (const key in myObject) {
//  console.log(myObject[key]);
// }


//   checking if for-in loop works for array or not
const prog = ['js','rc','py']  //making array

for (const key in prog) {
    console.log(key);
     
}
for (const key in prog) {
    console.log(prog[key]);
     
}

//map pr forin nhi kaam krega , empty dega