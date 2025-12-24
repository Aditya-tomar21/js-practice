// /****************             .MAP           */


// const myNums = [1,2,3,4,5,6,7,8,9,10]
 // const newNums = myNums.map( (num)=>(num + 10 ) )




// -------------     chaining of map ( map , map)  ------------>

// const newNums = myNums
//                       .map( (num) => num*10 )
//                       .map( (num) => num+1 )   
//                       .filter( (num) => num>=40)
// console.log(newNums);


//NOTE: second .map me nums ki changed ho chuki value ayegi ie num*10




//---------------------------       Reduce     ----------->

const myNums = [1,2,3]

//--------------using normal function------------->

// const myTotal = myNums.reduce( function (acc ,currVal)
//  {
//     console.log(`acc:${acc} and currVal:${currVal}`);
//     return acc+currVal

// }, 3) 
// 3 is starting value for acc:accumulator ,currVal: CurrentValue


//--------------------using arrow function--------->

// const myTotal = myNums.reduce( (acc,curr) => (acc+curr),0)
// console.log(myTotal);


const shopCart = 
[
    {itemName : "java course",
        price : 999
    },

    {itemName : "python course",
        price : 2999
    },


    {itemName : "cpp course",
        price : 599
    },


    {itemName : "AI course",
        price : 799
    },


    {itemName : "webdev course",
        price : 999
    },


    {itemName : "appdev course",
        price : 4999
    }
]

const priceToPay = shopCart.reduce( (acc,item)=> (acc + item.price), 0)
console.log(priceToPay);
