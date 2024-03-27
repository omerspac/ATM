// #! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 1234;
let myBalance = 10000;
let pinAnswer = await inquirer.prompt({
    message: "Please enter your pin number:",
    type: "number",
    name: "pinEntered",
});
if (pinAnswer.pinEntered === myPin) {
    console.log("Welcome back!\n");
    console.log("Your current balance is: 10000$\n\n");
    let operationAnswer = await inquirer.prompt([
        { message: "Please select an option", type: "list", choices: ["Check Balance", "Withdraw Balance", "Logout"], name: "operation" }
    ]);
    if (operationAnswer.operation === "Withdraw Balance") {
        let e = await inquirer.prompt([
            {
                message: "How much would you like to withdraw?",
                type: "number",
                name: "withdraw"
            }
        ]);
        if (e.withdraw <= 10000) {
            myBalance -= e.withdraw;
            console.log(`Your new balance is: ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance!");
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your current balance is: ${myBalance}$`);
    }
    else {
        console.log("Logged out successfully!");
    }
}
else {
    console.log("Incorrect pin number!");
}
