/*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


TASKS
------
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably

MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably

MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses

MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably */




  import { users } from './master_Project_on_Collections.js'

/* 

MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably

*/


function getActiveUsers() {
    return users.filter(user => user.active);
}

function namesOfActiveUsers() {
    let activeUsers = getActiveUsers();
    return activeUsers.map(user => user.name);
}

function getAdmins() {
    return users.filter(user => user.role === 'admin');
}

function getUserById(id) {
    if(id >= users.length) {
        return "Invalid Id";
    }
    return users.find(user => user.id === id);
}

function deactivateUser(id) {
    if(id >= users.length) {
        return "Invalid Id";
    }

    users.find(user => user.id === id).active = false;
    return "Deactivated user successfully";
}

export { getActiveUsers, namesOfActiveUsers, getAdmins, getUserById, deactivateUser };