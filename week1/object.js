
/*Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.

Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

Tasks:
    1. Read and print the user’s name and email
    2. Add a new property lastLogin: "2026-01-01"
    3. Update role from "student" to "admin"
    4. Delete the isActive property
    5. Use Object.keys() to list all remaining fields
*/

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// 1. Read and print name and email
console.log(user.name);
console.log(user.email);

// 2. Add lastLogin property
user.lastLogin = "2026-01-01";

// 3. Update role to admin
user.role = "admin";

// 4. Delete isActive property
delete user.isActive;

// 5. List all remaining fields
let userKeys = Object.keys(user);
console.log(userKeys);








/*Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90
*/

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// 1. Calculate total marks
let totalMarks = 0;
for (let subject in marks) {
  totalMarks += marks[subject];
}
console.log(totalMarks);

// 2. Calculate average marks
let averageMarks = totalMarks / Object.keys(marks).length;
console.log(averageMarks);

// 3. Find highest scoring subject
let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log(highestSubject, highestMarks);

// 4. Add new subject
marks.computer = 90;
console.log(marks);













/*Assignment 3: Application Settings Controller
---------------------------------------------
Scenario : A web app stores user preferences as settings.

Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified */

    const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// 1. Toggle theme
settings.theme = settings.theme === "light" ? "dark" : "light";

// 2. Turn autoSave to true
settings.autoSave = true;

// 3. Remove notifications
delete settings.notifications;

// 4. Freeze settings object
Object.freeze(settings);

console.log(settings);
