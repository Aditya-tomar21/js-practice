//Immediately Invoked Function Expression ( IIFE )


(function chai(){
    //named IIFE
    console.log(`DB connected`);  
})();  // isme ; lagana jaroori hai kyuki iife me maloom nhi hoga kidar stop kre execution jiske wjegh se aage waala nhi kaam krega toh ; se end krna hai

// chai()

((name) =>
{
    //simple unamed IIFE
    console.log(`aur bhaiii ${name}`);
    
})('aDiTyA');

