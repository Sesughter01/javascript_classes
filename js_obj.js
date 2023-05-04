class Account{
     
    constructor(accountName){
        this.name = accountName;
        this.number ;

    }

    createAccountNumber(dob) {
        const date = new Date();
        var generator = Math.floor(Math.random() * 100);
        this.number = "0023" + dob + generator;
        return this.number;
      }


}

const mySterling = new Account("Tomiwa Johnson");
const myAcctNumber = mySterling.createAccountNumber("0978");
// const mySterling = "new Account";
//
// console.log(mySterling.name);

export default mySterling;