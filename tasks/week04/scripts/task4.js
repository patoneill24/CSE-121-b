/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const Person = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Patrick",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: "images/IMG_1354.jpeg",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ["Steak", "Ice Cream", "Sushi"],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ["Basketball", "Pickleball", "Going to the Beach"]
};
// Step 6: Add another property named placesLived with a value of an empty array
Person.placesLived = [
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
    {
// Step 8: For each property, add appropriate values as strings
        place: "California",
        length: "19 years"
    },
    {
// Step 9: Add additional objects with the same properties for each place you've lived
        place: "Georgia",
        length: "1 year"
    },
    {
        place: "Chile",
        length: "1 year"
    },
    {
        place: "Idaho",
        length: "1 year"
    }
]


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = Person.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src",Person.photo);
document.querySelector("#photo").setAttribute("width",300);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt",Person.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
Person.favoriteFoods.forEach(function(food){
    let foods = document.createElement('li');
    foods.textContent = food;
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector("#favorite-foods").appendChild(foods);
});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
Person.hobbies.forEach(function(hobby){
    //let hobbyElem2 = document.createElement('li');
    //hobbyElem2.textContent = hobby;
    //document.querySelector("#hobbies").appendChild(hobby);
    let hobbyElem = "<li>"+ hobby + "</li>";
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector("#hobbies").innerHTML += hobbyElem;
});

// Step 8: For each object in the <em>placesLived</em> property:
Person.placesLived.forEach((placeLived)=>{
    //let places = document.createElement('dt');
    //places.textContent = placeLived.place;
    let places = "<dt>" + placeLived.place + "</dt>";
    //let lengths = document.createElement('dd');
    //lengths.textContent = placeLived.length;
    let lengths = "<dd>" + placeLived.length + "</dd>";
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector("#places-lived").innerHTML += places;
    document.querySelector("#places-lived").innerHTML += lengths;
    //document.querySelector("#places-lived").appendChild(places);
    //document.quearySelector("#places-lived").appendChild(lengths);

});
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
