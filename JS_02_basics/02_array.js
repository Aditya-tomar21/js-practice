const marvel = ["thor", "ironman" ,"spiderman"]
const Dc = ["superman", "batman" ,"flash"]

//marvel.push(Dc)  //would make a array inside array ie [marvel,[dc]] would also change marvel array
// console.log(marvel);
// console.log(marvel[3][1]); //to access array inside array

//marvel.concat(Dc)   //firse ayega isliye new banana padega

// const Allhero = marvel.concat(Dc) //make new array with both the elements
// console.log(Allhero);


// const Allhero = [...marvel , ...Dc]  //spread krke hoga add similar to concat ... krke
// console.log(Allhero);



// const newA1 = [11,22,33,[44,55],66,[77,88,[99,110]]] 
// const RealNewA1 = newA1.flat(Infinity)
// console.log(RealNewA1);


/****************           ARRAY OF , IS , FROM     ******************* */

// console.log(Array.isArray("Aditya"))
// console.log(Array.from("aditya"));  //convert into array
//console.log(Array.from({name:"aditya"}));  //interestin=g empty value dega

// let score1 = 30
// let score2 = 40
// let score3 = 50
// console.log(Array.of(score1,score2,score3))





