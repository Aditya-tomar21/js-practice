//DATE IN JS
  
/******************            dates and uske methods       ***************************** */

let myDate = new Date() 

// console.log(myDate);    //date time but unreadable
// console.log(myDate.toString());  //more readable
// console.log(myDate.toDateString());  //day date 
// console.log(myDate.toISOString());  //with - dates 
// console.log(myDate.toLocaleDateString()); //with / in dates 06/09/2025 types
// console.log(myDate.toLocaleString());   //dates with / and timing in am - pm
  
  
//console.log(typeof myDate);  //object hai
   



/**********************     particular date ko laana in js      *************** */


//let myCreatedDate = new Date(2023 , 0 , 23)      // month 0 se start hota hai js
//let myCreatedDate = new Date(2023 , 0 , 23,5,3)    //date with particular time
//let myCreatedDate = new Date("2023-11-21") 
 let myCreatedDate = new Date("11-21-2001") // mm-dd-yyyy
// console.log(myCreatedDate.toDateString());



/***************                        time stamp                     ***************** */


let myTimeStamp = Date.now()   //another way to declare date

//console.log(myTimeStamp);

//console.log(myCreatedDate.getTime());    //dono millisecond me time denge and compare kr skte

//console.log(Math.floor(Date.now()/1000));  //convert milli second into seconds also used math methods


let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() +1);
// console.log(newDate.getFullYear());
  


//.tolocalstring bhi ek object hai toh uske ander deepdive kr skte with more methods
console.log(newDate.toLocaleString('default',{
    weekday: "long",
   
    
    
}));

