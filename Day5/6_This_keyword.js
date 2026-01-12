

// this keyword use in Javascript 

const bankCustomer = {

    cName : "ABC",
    cAccount: 1234567890,
    isKycVerified : false,
    balance : 1000.50,

    updateKYC : function (){
        console.log(`The kyc for user : ${this.cName}`);
        console.log(   `The account is : ${this.cAccount}`);

    }
}

console.log(bankCustomer.cName);
console.log("Before KYC : " + bankCustomer.isKycVerified);

bankCustomer.updateKYC();

// I need to update the isKycVerified flag to true 

bankCustomer.isKycVerified = true;

console.log("After KYC : " + bankCustomer.isKycVerified);

console.log( bankCustomer);

