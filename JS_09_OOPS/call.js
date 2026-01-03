  //call is used to save exectuion context -lec44
  
  function setUserName(username){
    this.username = username;
    console.log("called");
    
   }

   function createUSer(username,email,password)
   {
    setUserName.call(this,username)

    this.email = email;
    this.password = password;
   }

   const chai = new createUSer("chai","chai@pilo.com","1234")
   console.log(chai);
   