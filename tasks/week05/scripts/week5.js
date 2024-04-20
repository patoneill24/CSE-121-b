setTimeout(function(){
    console.log('async');
}, 1000);

console.log('sync');

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

let data;

async function getPokemon(url) {
    const response = await fetch(url);  
    console.log(response);
    if (response.ok){
        data = await response.json();
        console.log(data);
        doStuff(data);
    }
}

function doStuff(data){
    console.log('first: ', data);
    const outputElement = document.querySelector('#output');
    const html = `<h2>${data.name}</h2> <img src=${data.sprites.front_default} alt="Image of ${data.name}">`
    outputElement.innerHTML = html;
}

getPokemon(url);

console.log('second', data);

const urlList = "https://pokeapi.co/api/v2/pokemon";

let result;

async function getPokemonList(urlList){
    const response = await fetch(urlList);
    console.log(response);
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}

function doStuffList(data){
    console.log(data.results);
    const pokeList = data.results;
    let listElement = document.querySelector('#outputList');
    pokeList.forEach((item)=>{
        listElement.innerHTML += `<li>${item.name}</li>`
    })
}

getPokemonList(urlList);

//Sorting 

let fruit = ["banana", "apple", "grape"];

fruit.sort();
console.log(fruit);

let fruits = [
    {name: "banana", color: "yellow"},
    {name: "apple", color: "red"},
    {name: "grape", color: "purple"},
]

function obj_sort_asc(a,b){
    if (a.templeName < b.templeName) {
        return -1;
    } else if (a.templeName > b.templeName){
        return 1;
    } else{
        return 0;
    }
}

function obj_sort_dsc(a,b){
    if(a.templeName < b.templeName) {
        return 1;
    } else if (a.templeName > b.templeName){
        return -1;
    } else{
        return 0;
    }
}

fruits.sort(obj_sort_asc);
console.log(fruits);

//fruits.sort(obj_sort_dsc);
//console.log(fruits);

const templeList = "https://byui-cse.github.io/cse121b-course/week05/temples.json";

let templeResult;

async function getTempleList(templeList){
    const templeResponse = await fetch(templeList);
    if (templeResponse.ok){
        const data = await templeResponse.json();
        document.querySelector("#outputTempleList").innerHTML = "";
        let filter = document.querySelector("#sortBy").value;
        if(filter == "templeAsc"){
            data.sort(obj_sort_asc);
        } else if(filter == "templeDsc"){
            data.sort(obj_sort_dsc);
        }
        //data.sort(obj_sort_dsc);
        outPutTempleList(data);
    }
}

function outPutTempleList(data) {
    const outputListElement = document.querySelector("#outputTempleList");
    data.forEach((item)=>{
        outputListElement.innerHTML += `<article>
        <h3>${item.templeName}</h3>
        <h4>${item.location}</h4>
        <h4>${item.dedicated}</h4></article>`;
    })
}

getTempleList(templeList);

function ListAgain() {
    getTempleList(templeList);
}

document.querySelector("#sortBy").addEventListener("change", ListAgain);