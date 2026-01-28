/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard" */

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. inStock products
let inStockItems = cart.filter(item => item.inStock);
console.log(inStockItems);

// 2. name and totalPrice
let priceList = inStockItems.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log(priceList);

// 3. grand total
let grandTotal = inStockItems.reduce(
  (acc, item) => acc + item.price * item.quantity, 0
);
console.log(grandTotal);

// 4. find Mouse
let mouseDetails = cart.find(item => item.name === "Mouse");
console.log(mouseDetails);

// 5. findIndex of Keyboard
let keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log(keyboardIndex);








/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran" */

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. passed students
let passedStudents = students.filter(s => s.marks >= 40);
console.log(passedStudents);

// 2. add grade
let gradedStudents = students.map(s => {
  let grade;
  if (s.marks >= 90) grade = "A";
  else if (s.marks >= 75) grade = "B";
  else if (s.marks >= 60) grade = "C";
  else grade = "D";

  return { ...s, grade };
});
console.log(gradedStudents);

// 3. average marks
let totalMarks = students.reduce((acc, s) => acc + s.marks, 0);
let averageMarks = totalMarks / students.length;
console.log(averageMarks);

// 4. find student with 92
let student92 = students.find(s => s.marks === 92);
console.log(student92);

// 5. findIndex of Kiran
let kiranIndex = students.findIndex(s => s.name === "Kiran");
console.log(kiranIndex);






/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha" */


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. IT employees
let itEmployees = employees.filter(emp => emp.department === "IT");
console.log(itEmployees);

// 2. add netSalary
let salaryWithBonus = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));
console.log(salaryWithBonus);

// 3. total salary payout
let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(totalSalary);

// 4. find salary 30000
let salary30000 = employees.find(emp => emp.salary === 30000);
console.log(salary30000);

// 5. findIndex of Neha
let nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log(nehaIndex);








/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers" */


const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Sci-Fi movies
let sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log(sciFiMovies);

// 2. title with rating
let movieLabels = movies.map(
  movie => `${movie.title} (${movie.rating})`
);
console.log(movieLabels);

// 3. average rating
let totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
let avgRating = totalRating / movies.length;
console.log(avgRating);

// 4. find Joker
let jokerMovie = movies.find(movie => movie.title === "Joker");
console.log(jokerMovie);

// 5. findIndex of Avengers
let avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log(avengersIndex);







/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000 */

    const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. credit transactions
let credits = transactions.filter(tx => tx.type === "credit");
console.log(credits);

// 2. extract amounts
let amounts = transactions.map(tx => tx.amount);
console.log(amounts);

// 3. final balance
let balance = transactions.reduce((acc, tx) => {
  return tx.type === "credit" ? acc + tx.amount : acc - tx.amount;
}, 0);
console.log(balance);

// 4. first debit transaction
let firstDebit = transactions.find(tx => tx.type === "debit");
console.log(firstDebit);

// 5. findIndex of amount 10000
let index10000 = transactions.findIndex(tx => tx.amount === 10000);
console.log(index10000);
