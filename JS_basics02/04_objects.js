// const tinderUser = new Object()   // singelton object
const tinderUser={}                 //non singelton object

tinderUser.id = "123abc"
tinderUser.name = "pappu"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser =
{
    email:"koko@gmail.com",
    fullName:
    {
        userfullname: {
            firstName: "aditya",
            lastNAme: "tomar"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname.firstName);

//find use of ? this is incase value k liye

const Obj1 = 
{
    1:"a",
    2:"b"
}

const Obj2 =
{
    3:"c" ,
    4:"b"
}

// const  obj3 = {Obj1 + Obj2}   wrong hai yeh object k ander object bana dega

//const Obj3 = Object.assign({} , Obj1, Obj2)

const Obj3 = {...Obj1, ...Obj2} // glass feko , spread honge kaach , and fir jodo similar as array

//console.log(Obj3);

//database k ARRAY OF OBJECTS k form me data ata hai

const users =
[
    {  
         id:"1ab",
        email:"1ab@gamil.com"

    },

    {  
         id:"2ab",
        email:"2ab@gamil.com"

    },

    {  
         id:"3ab",
        email:"3ab@gamil.com"

    }

 ]

console.log( users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //array data types aata hai isme
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //array of array type deta hai


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
