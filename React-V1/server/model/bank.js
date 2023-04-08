const mongoose = require("mongoose");

const bankLoanSchema = mongoose.Schema({
    loanID: {type: Number},
    gameCoins: {type: Number},
    interestRate: {type: Number},
});

bankLoanSchema.statics.upsert = async function (record){
    await this.findOneAndUpdate({ loanID: record.loanID }, record, {
        upsert: true,
        new: true,
    });
}

const bankLoan = new mongoose.model("bank_loan_table",bankLoanSchema,"bank_loan_table");


const bankDepositSchema = mongoose.Schema({
    depositID: {type: Number},
    time: {type: Number},
    interestRate: {type: Number}
});

bankDepositSchema.statics.upsert = async function (record){
    await this.findOneAndUpdate({ depositID: record.depositID }, record, {
        upsert: true,
        new: true,
    });
}

const bankDeposit = new mongoose.model("bank_deposit_table",bankDepositSchema,"bank_deposit_table")

module.exports = {bankLoan, bankDeposit};