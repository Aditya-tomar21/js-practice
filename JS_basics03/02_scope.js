//var c = 300
let a = 112
if (true) {
    let a = 11
    const b = 22
   // var c = 33  // yeh if k bahar bhi access hoga isliye not good 

   //console.log(`inside block value of a is ${a}`);
   
    
}
 //console.log("value of a global is " ,a);
// console.log(b);
//console.log(c);



///*******            parent - child , child can access parents but vice versa not true         */


function one() 
{
    const username = "Hadityaa"

    function  two()
     {
         const website = "youtube"
         //console.log(username);
     }

//console.log(website);
two()
}

one()

if (true)
{
    const username = "hulkbhai"
    if(username === "hulkbhai")
    {
        const website = " twitter"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}

//console.log(username);





/*****************                            INTERESTING                    ******************* */


//two way of function


//  addone(5)     yeh kaam krega
function addone(Num){
    return Num +1
}
addone(5);



//addtwo(5)   yeh idar nhi kaam krega
const addtwo = function(num){
    return num+2
}

addtwo(5)