// ------ this , now , prototype ---->

function mutlipleBy5(num){
    this.num = num;
    return num*5
}
mutlipleBy5.power = 2

console.log(mutlipleBy5(5));
console.log(mutlipleBy5.power);
console.log(mutlipleBy5.prototype);


function creatUser(username,score){
    this.username = username
    this.score = score
}

// creating own method  using ----- PROTOTYPE------------>
creatUser.prototype.increment = function(){
    this.score++ ;
}

creatUser.prototype.printKro = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new creatUser("chai",25)
const tea = new creatUser("tea",250)

chai.increment();
chai.printKro();
 