//  ***********************       filter and for-each


// const coding = ["js","py","cpp","ruby"]

// const values = coding.forEach( (item) =>{
//     //console.log(item);
//     return item;   // nhi hoga return chahe likho return ya nhi
// } )
// console.log(values);






//************* using           filter         that returns some value if needed  */

  const myNums = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = myNums.filter(   (num) => (num>5)  )   // return bina likhe hota hai ()=>()  se

// const newNums = myNums.filter(   (num) => {
//     // num>4   return krna padega
//     return num>5
// }  )

// console.log(newNums);



// ********************         taking value using for each using logic

// const newNums =[]
// myNums.forEach( (num) => {
//     if(num>4)
//     {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);



//    using filter in         ARRAY_of_OBJECTS                     ... 
const books = [
  {
    bookName: "The Alchemist",
    publish: 1988,
    version: "1",
    genre: "Fiction"
  },
  {
    bookName: "Clean Code",
    publish: 2008,
    version: "2",
    genre: "Programming"
  },
  {
    bookName: "Atomic Habits",
    publish: 2018,
    version: "1",
    genre: "Self-help"
  },
  {
    bookName: "Harry Potter and the Sorcerer's Stone",
    publish: 1997,
    version: "2",
    genre: "Fantasy"
  },
  {
    bookName: "The Pragmatic Programmer",
    publish: 1999,
    version: "2",
    genre: "Programming"
  }
]

const plish = books.filter( (bk) => (bk.version==2))
console.log(plish);


