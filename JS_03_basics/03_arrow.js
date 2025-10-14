const user = {
    username : "aditya",
    price : 999,
    welcomeMess: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMess()
// user.username = "goku"
// user.welcomeMess()

// console.log(this);  // isme empty ayega , but normal window ya website pr windows ayega



// function chai() {
//     let username = "aditya"
//     console.log(this.username);  /// nhi kaam krega this.username , but this krega normally
    
// }   //note : isme simple this fucntion bhot saari value deta hai faltu faltu ki 
// chai()



// const chai = ()=>{
//     let username="adii"
//     console.log(this);
    
// }

// chai() //isme3 this print out me kuch nhi ayega {} aise ayega bss




// const addTwo = (num1 , num2)=>
// {
//     return num1 + num2
// }

// console.log(addTwo(6,5));



// const addTwo = (num1 , num2)=> (num1 + num2)  
//  // {} hata denge to direct likh skte bina return kre , () k ander krega run bina return likhe 
// console.log(addTwo(6,5));


// const addTwo = (num1 , num2) =>( {username:"Chotabheem"} )  // to return object
// console.log(addTwo(2,3));


const myArray = [3,5,7,9,11]

// ways are
/****  
 1)         
 name()
 {
 } 


2)
() => {return}

3)
()=>()   


*/