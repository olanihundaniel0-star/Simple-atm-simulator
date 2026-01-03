function atmTransaction(action, amount, balance) {
    let result;

    switch (action.toLowerCase()) {
        case "withdraw":
            result = (amount <= balance) 
                ? `Success. New Balance: $${balance - amount}` 
                : "Insufficient funds.";
            break;

        case "deposit":
            result = (amount > 0) 
                ? `Deposited. New Balance: $${balance + amount}` 
                : "Invalid deposit amount.";
            break;

        case "check":
            result = `Current Balance: $${balance}`;
            break;

        default:
            result = "Unknown transaction type.";
            break;
    }

    return result;
}

// Usage
console.log(atmTransaction("withdraw", 40, 100));
console.log(atmTransaction("withdraw", 200, 100));
console.log(atmTransaction("deposit", 50, 100));
console.log(atmTransaction("invest", 50, 100));
