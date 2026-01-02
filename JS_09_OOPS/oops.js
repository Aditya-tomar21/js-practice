// const User = {
//     username:"aditya",
//     logInCount:8,
//     signedIn:true,

//     getUserData: function() {
//         console.log("got users database");
//         console.log(this);
        
//     }
// }
// console.log(user.username);
// // console.log(user.getUserData());
// console.log(this)

//------------------------------------------------------------>

function user(NAME,COUNT,LOGIN){
    this.NAME = NAME;   // this.name likh kr bata rhe hai, this.Usernane= NAME bhi likh skte hai
    this.COUNT = COUNT;
    this.LOGIN = LOGIN;

    return this
}

const userOne = new user("aditya",12,true);
const userTwo = new user("money",82,false);
console.log(userOne);
console.log(userTwo);

//instanceOf read on Mdn
