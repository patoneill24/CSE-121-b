/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let fname = 'Patrick';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent= fname;

// Step 3: declare and instantiate a variable to hold the current year
let date = new Date();

// Step 4: place the value of the current year variable into the HTML file
let year = date.getFullYear();

// Step 5: declare and instantiate a variable to hold the name of your picture
document.querySelector('#year').textContent = year;

// Step 6: copy your image into the "images" folder
const myImage = 'images/IMG_1354.jpeg'
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', myImage);
document.querySelector('img').setAttribute('width', 300);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favFoods = ['Chocolate', 'steak', 'ice cream'];

// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector('#food').textContent = favFoods.join(', ');
// Step 3: declare and instantiate a variable to hold another favorite food

let anotherfood = 'cake';

// Step 4: add the variable holding another favorite food to the favorite food array

favFoods.push(anotherfood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favFoods.join(', ');

// Step 6: remove the first element in the favorite foods array
favFoods.shift();

// Step 7: repeat Step 2

document.querySelector('#food').textContent = favFoods.join(', ');
// Step 8: remove the last element in the favorite foods array
favFoods.pop();

// Step 9: repeat Step 2


document.querySelector("#food").textContent = favFoods.join(', ');
