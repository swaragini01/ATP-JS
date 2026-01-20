/*
Initial data:
        let totalAmount = 0;

🎯 Tasks
  1. Add ₹500 to the total
  2. Add ₹1200 to the total
  3. Apply a ₹200 discount
  4. Add 18% GST
  5. Print the final bill amount
let totalAmount = 0;
*/

// Step amounts: +500, +1200, -200 (discount)
const transactions = [500, 1200, -200];

// Add all transactions using reduce
totalAmount = transactions.reduce((acc, amount) => acc + amount, totalAmount);
console.log("Amount after transactions:", totalAmount);

// Apply 18% GST using map
const gstArray = [totalAmount].map(amount => amount + amount * 0.18);

// Final bill amount
const finalBill = gstArray[0];
console.log("Final Bill Amount:", finalBill);

