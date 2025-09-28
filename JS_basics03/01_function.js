function sayMyName() {
console.log("a");
console.log("d");
console.log("i");
console.log("t");
console.log("y");
console.log("a");
}
//sayMyName   //yeh hai refernce ...
//sayMyName()   //aise hoga function call () isse



// function  addTwoNum(Num1 , Num2) // yeh hai parameter
// {
//   console.log(Num1+Num2); 
// }


// addTwoNum(9,4)            // arguments hote hai pass (9,4)
// addTwoNum(9,"4")






function  addTwoNum(Num1 , Num2) // yeh hai parameter
{
  let result = Num1 + Num2
  return result

  //console.log("aditya");  // yteh execute nhi hoga return k baad kuch execute nhi hota
  
}

const result = addTwoNum(3,5)
//console.log("result is" , result);



function loggedInMess(username = "sammer")  //minimun default value dedi hai
{
    if(!username)  //username ka negate yaani no username
    {
        console.log("please enter a username")
        return
    }


    return `${username} is logged in`
}


// console.log(loggedInMess());
// console.log(loggedInMess("adibhaiii"));

//if any value isnt passed it give undefined

//       ... REST operator bhi hota hai and SPREAD operator bhi usecase ki hisab se


 function calculateCartPrice(...num1) {
   return num1
 }

// console.log(calculateCartPrice(20,30,40,55));



// function calculateCartPrice(VAL1 , VAL2 ,...num1) {
//   return num1
// }
// console.log(calculateCartPrice(20,30,40,55));

const user = 
{
  username: "aditya",
  price : 999
}

function handleObject(anyobject)
{
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
// handleObject(user)


handleObject({
  username:"bhoolla",
  price:9999
})


const myNewArray = [66,55,44,33,22]

function  returnSECvalue(getArray)
 {
  return getArray[1]
  
 }
 //console.log(returnSECvalue(myNewArray));
 console.log(returnSECvalue([28,36,46,56,66]));    //both works

 
 