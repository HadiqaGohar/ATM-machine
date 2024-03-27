#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000; // Dollar
let pinNumber = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === pinNumber) {
    console.log("Correct pin code!!!");
}
else {
    console.log("Incorrect pin code!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select one option",
        type: "list",
        choices: ["With Draw", "Check Balance", "Fast Cash"] //fast cash   & insufficiant balance
    }
]);
//console.log (operationAns);
if (operationAns.operation === "With Draw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    if (amountAns.amount < balance) {
        balance -= amountAns.amount;
        console.log(`Now your balance is ${balance}`);
    }
    else {
        console.log("insufficient balance");
    }
}
else if (operationAns.operation === "Check Balance") {
    console.log(`Your current balance is ${balance}`);
}
else if (operationAns.operation === "Fast Cash") {
    let fast = await inquirer.prompt([{
            name: "fast-operation",
            message: "How much money you want to draw??",
            type: "list",
            choices: ["1000", "2000", "3000", "4000", "5000"],
        }]);
    if (fast.fast_operation === "1000") {
        balance -= fast.fastoperation;
        console.log(`Your remaining balance is ${balance}`);
    }
    if (fast.fast_operation === "2000") {
        balance -= fast.fastoperation;
        console.log(`Your remaining balance is ${balance}`);
    }
    if (fast.fast_operation === "3000") {
        balance -= fast.fastoperation;
        console.log(`Your remaining balance is ${balance}`);
    }
    if (fast.fast_operation === "4000") {
        balance -= fast.fastoperation;
        console.log(`Your remaining balance is ${balance}`);
    }
    if (fast.fast_operation === "5000") {
        balance -= fast.fastoperation;
        console.log(`Your remaining balance is ${balance}`);
    }
}
else {
    console.log("invalid pin code");
}
