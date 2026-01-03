class User{
    constructor(username,email,password ){
        this.username=username;
        this.email=email;
        this.password= password;
    }

    encryptPassword()
    {
        return console.log(`${this.password}abc`);
        
    }

    ChangeUserName()
    {
        return console.log(`${this.username.toUpperCase()}`);
        
    }
}

const chai= new User("chai","chai@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.ChangeUserName());


//above could also beused using prototype and fucntions