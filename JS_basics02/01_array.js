/*********************                        ARRAY                         *****************************/

const MyArr = [3,6,8,11,42] //mix data types could be used
//console.log(MyArr);
//array make shallow copy ie have same refernce point yaani copy me change og me bhi change layega


const myHero = ["goku" , "luffy"]

const MyArr2 = new Array( 3, 45 , 6 )



/*******************                     ARRAY  Methods           ******************** */

// MyArr.push(69)   //last index pr ayega
// console.log(MyArr);

// MyArr.push(99)
// console.log(MyArr);

// MyArr.pop()    // last index wala element udd jayega
// console.log(MyArr);

// MyArr.unshift(11)  // starting me add krte hai isse , but nhi use krte jyda
// console.log(MyArr);

// MyArr.shift()
// console.log(MyArr);  //remove kr dega starting se

// console.log(MyArr.includes(6));
// console.log(MyArr.indexOf(42));


//const newArr = MyArr.join()  //convert into string

// console.log(MyArr);
// console.log(typeof MyArr);    // object type

// console.log(newArr);
// console.log(typeof newArr);    // string type



/************************                  SLICE AND SPLICE       ************************* */


console.log("A" ,MyArr);
const myN1 = MyArr.slice(1,3)   //original array me fark nhi ayega

console.log(myN1);
console.log("B" ,MyArr);

const myN2 = MyArr.splice(1,3)   // original array bhi change hoga isme
console.log(myN2);

console.log("C" ,MyArr);










