show();

function show(){
    console.log('Function Ran');
}


let num1 = 2;
let num2 = 9;

function addIt(n1, n2){
    return(n1 + n2);
}

let number = addIt(num1,num2);

document.querySelector('.result').textContent = number;

console.log(square(4));

function square(number) {
    return number * number;
}

const sq = function(number) {
    return number * number;
}

console.log(sq(5));

//arrow function 

let squ = (number) => {
    return number * number;
}

console.log(squ(3));

//arrow function with less syntax 

let squared = (number) => number * number;

//Array Method

//forEach method - do something with each item or value of the array 

const simple_array = ['a', 'b', 'c'];

//forEach with declaration function 

function show_array(item) {
    console.log(item);
}


simple_array.forEach(show_array);

//forEach with function expression 

simple_array.forEach(function(item){
    console.log(item);
});

// example 1
const steps = ["one", "two", "three"];
// callback declaration
function makeList(item) {
  const listElement = document.getElementById("myList");
  listElement.innerHTML += `<li>${item}</li>`;
}
steps.forEach(makeList);

// example 2
// is the luckyNumber in the list?
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = -1;
myArray.forEach(function (item, index) {
  if (item === luckyNumber) {
    luckyIndex = index;
  }
});

console.log(luckyIndex);


// map method-make a new array from items in the new array 

// example 1

console.log(steps);
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join(' ');

console.log(stepsHtml);

// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

console.log(gpaPoints);

//reduce methods- reduce down to one value 


const pointsT = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa1 = pointsT / gpaPoints.length;

console.log(gpa1.toFixed(2));

// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa2 = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa3 = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//filter - take items in array and assign to a new arraw only
//if the item passes a condition 

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

console.log(shortWords);

//same thing with an arrow function
//const shortWords = words.filter((word) => word.length < 6);

//Events 

const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
  
  console.log(event)
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}

buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}

let tasks = [];

function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  tasks.forEach((task) => {
    listElement.innerHTML += `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
  });
}

function newTask() {
  const task = document.querySelector("#todo").value;
  tasks.push({ detail: task, completed: false });
  renderTasks(tasks);
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail != taskElement.childNodes[1].innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[1].innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.function === "delete") {
    removeTask(parent);
  }
  if (e.target.dataset.function === "complete") {
    completeTask(parent);
  }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);

