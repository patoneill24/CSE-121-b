const cars = {
    type: "Fiat",
    model: "500",
    color: "white"

}

const person = {
    firstName: "Patrick",
    age: 22,
    eyeColor: "blue"
}

console.log(person.firstName + ' drives a ' + cars.type);

const aCourse = {
    code: 'CSE121b',
    name: 'JavaScript Language',
    logo: 'images/js_logo.png',
    sections: [
        {
            sectionNumber: 1, roomNum: 'STC 353',
            enrolled: 26, days: 'TTH', instructor: 'Bro T'
        }
        ,
        {
            sectionNumber: 2, roomNum: "STC 361", 
            enrolled: 28, days: 'MW', instructor: 'Sis A'
        }
    ],
    showSection: function(){
        console.log(this.sections[0].sectionNumber);
    },
    enrollStudent: function(sectionNumber){
        console.log(sectionNumber);
        const sectionIndex = this.sections.findIndex((item)=>item.sectionNumber == sectionNumber);
        if (sectionIndex >= 0){
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    }
}

console.log(aCourse.name);
console.log(aCourse['name']);

document.querySelector("#title").textContent = aCourse.name;
document.querySelector('img').setAttribute('src',aCourse.logo);
document.querySelector('img').setAttribute('alt',aCourse.name);

console.log(aCourse.sections[0].instructor);

function add_room(item) {
    document.querySelector('#sections').innerHTML += '<li>' +item.roomNum + '</li>'
}

aCourse.sections.forEach(add_room);

aCourse.sections.forEach(function(item){
    document.querySelector('#sections').innerHTML += '<li>' + item.roomNum + '</li>'
})

aCourse.showSection();

function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNumber}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#courses").innerHTML = html.join("");
  }

document.querySelector('#enrollStudent').addEventListener("click", function(){
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
})

//module practice 

import Person, {printName,printAge} from './module.js';
const user = new Person('Patrick', 22);
printName(user);
printAge(user);