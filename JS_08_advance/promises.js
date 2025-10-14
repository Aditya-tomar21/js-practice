// //promise example 1


// const promiseOne = new Promise((resolve,reject)=>{
//     //do async task
//     setTimeout(function(){
//         console.log('asyn task is compelete');
//         resolve()
        
//     }, 1000 )
// })
// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })





// //promise example 2

// new Promise(function(resolve,reject){
//     setTimeout(function() {
//         console.log("aysn task 2")
//         resolve()
//     }, 1000);   

// }).then(function(){
//     console.log('task2 chal chuka hai');
    
// })






//promise example 3

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai", email:"abcd@gamil.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })




//promise 4

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error)
//         {
//             resolve({username:"aditya" , password:"123"})
//         }
//         else{
//             reject('ERROR:something went wrong')
//         }
//     } , 1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return(user.username)
// }).then(function(Myusername){                                //isme chainng hoti hai 
//     console.log(Myusername);
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(()=>console.log("promise is resolved or rejected"))



//promise 5

const promiseFive = new Promise(function(resolve,reject){
      setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve({username:"champaaa" , password:"996969"})
        }
        else{
            reject('ERROR:something went gadbad !!!!!!!!')
        }
    } , 1000)
})

async function consumePromiseFive(){

    const response = await promiseFive;
    console.log(response);

}
consumePromiseFive();