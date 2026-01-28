
/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
    */
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter temperatures above 35
let above35 = temperatures.filter(temp => temp > 35);
console.log(above35);

// 2. map Celsius to Fahrenheit
let fahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit);

// 3. reduce to calculate average temperature
let total = temperatures.reduce((acc, temp) => acc + temp, 0);
let average = total / temperatures.length;
console.log(average);

// 4. find first temperature above 40
let firstAbove40 = temperatures.find(temp => temp > 40);
console.log(firstAbove40);

// 5. findIndex of temperature 28
let index28 = temperatures.findIndex(temp => temp === 28);
console.log(index28);


















/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
    */

const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter courses with name length > 5
let longCourses = courses.filter(course => course.length > 5);
console.log(longCourses);

// 2. map to uppercase
let upperCourses = courses.map(course => course.toUpperCase());
console.log(upperCourses);

// 3. reduce to single string
let courseString = upperCourses.reduce((acc, course) => acc + " | " + course);
console.log(courseString);

// 4. find the course "react"
let foundReact = courses.find(course => course === "react");
console.log(foundReact);

// 5. findIndex of "node"
let indexNode = courses.findIndex(course => course === "node");
console.log(indexNode);

















/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
    */
const marks = [78, 92, 35, 88, 40, 67];

// 1. filter marks ≥ 40
let passMarks = marks.filter(mark => mark >= 40);
console.log(passMarks);

// 2. map to add 5 grace marks
let graceMarks = marks.map(mark => mark + 5);
console.log(graceMarks);

// 3. reduce to find highest mark
let highestMark = marks.reduce((max, mark) => {
    return mark > max ? mark : max;
}, marks[0]);
console.log(highestMark);

// 4. find first mark below 40
let below40 = marks.find(mark => mark < 40);
console.log(below40);

// 5. findIndex of mark 92
let index92 = marks.findIndex(mark => mark === 92);
console.log(index92);
