//promise example 1


const promiseOne = new Promise((resolve,reject)=>{
    //do async task
    setTimeout(function(){
        console.log('asyn task is compelete');
        resolve()
        
    }, 1000 )
})
promiseOne.then(function(){
    console.log('promise consumed');
    
})





//promise example 2

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("aysn task 2")
        resolve()
    }, 1000);   

}).then(function(){
    console.log('task2 chal chuka hai');
    
})


// resolve  jo hai woh return krta hai value  , joki then k callback fucntion me aati hai



// promise example 3

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve({username:"chai", email:"abcd@gamil.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})




// promise 4

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve({username:"aditya" , password:"123"})
        }
        else{
            reject('ERROR:something went wrong')
        }
    } , 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return(user.username)                                   // iska return next then me jayega as value 
}).then(function(Myusername){                                //isme chainng hoti hai 
    console.log(Myusername);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("promise is resolved or rejected"))



//promise 5

const promiseFive = new Promise(function(resolve,reject){
      setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve({username:"champaaa" , password:"996969"})
        }
        else{
            reject('ERROR: promsie5 something went gadbad !!!!!!!!')
        }
    } , 1000)
})

//async similar hota hai then catch k , yeh thoda time leta hai execute hone me 
//async - await use hota hai

async function consumePromiseFive(){

    try {
        const response = await promiseFive;   //wait kr rha hai await jo bhi as response ayega from promisefive
    console.log(response); 

    } 

    catch (error) {
        console.log(error);  
    }
}
consumePromiseFive();



// async function getAllUser()
// {
//     try
//     {
//         const response = await  fetch('https://api.github.com/users/aditya-tomar21')
//         // console.log(response);
        
//         const data = await response.json()
//         console.log(data);
  
//     } 
    
//     catch (error)
//     {
//         console.log("E:", error);
      
//     }

// }
// getAllUser()


//getting directly using fetch()

fetch('https://api.github.com/users/aditya-tomar21')     // promise return krega yaani reposne ka wait krna padega
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))

//fetch k liye special queue banti hai , jisse yeh priority hotihai - microTaskQueue