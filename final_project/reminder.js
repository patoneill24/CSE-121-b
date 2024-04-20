//let currentDateAndTime = Date.now();
//dt = new Date(currentDateAndTime);
//console.log(dt);
//console.log(dt.getMonth()+1);
//console.log(dt.getDate());

function selectDate(){
    let outPutDate = document.querySelector("#selectDate");
    outPutDate.innerHTML =  `<h2>Select a Date</h2><select id="month">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
    </select>
     <select id="date">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
    </select>
    <select id="year">
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
    </select>`
   let submitButton = document.querySelector("#submit");
   submitButton.innerHTML = `<button id="submitButton">Submit</button>`;
   let reminderBox = document.querySelector("#reminder");
   reminderBox.innerHTML = `<p id="question">What would like to be reminded about that day?
   </p> <input type="text" id="reminderText"></input>`;
   let resetButton = document.querySelector("#reset");
   resetButton.innerHTML = `<button id="resetButton">Reset</button>`
}

document.querySelector("#addReminderButton").addEventListener("click",selectDate);

const reminders = []

function setReminder(){
    document.querySelector("#displayReminder").innerHTML="";
    let month = document.querySelector("#month").value;
    let date = document.querySelector("#date").value;
    let year = document.querySelector("#year").value;
    let reminder = document.querySelector("#reminderText").value;
    let result = `${month}/${date}/${year} ${reminder}`
    reminders.push(result);
    let outPutReminder = document.querySelector("#displayReminder");
    reminders.forEach((reminder)=>
        outPutReminder.innerHTML += `<h2 id="reminderItem">${reminders.indexOf(reminder)+1}. ${reminder}</h2>`);
}

function reset(){
    let resetButton = document.querySelector("#displayReminder");
    reminders.length = 0;
    resetButton.innerHTML = "";
}

document.querySelector("#reset").addEventListener("click",reset);

document.querySelector("#submit").addEventListener("click",setReminder);

//function setYear(){
//    //let month = document.querySelector("#optionMonth").value;
//    //let date = document.querySelector("#optionDate").value;
//    let year = document.querySelector("#year").value;
//    let outputYear = document.querySelector("#yearDisplayed");
//    outputYear.innerHTML = `<h2>${year}</h2>`;
//    document.querySelector("#confirmYear").innerHTML = `<button id="finalYear">Confirm Year</button>`;
//}

//function setMonth(){
//    let month = document.querySelector("#month").value;
//    let outPutMonth = document.querySelector("#monthDisplayed");
//    outPutMonth.innerHTML = `<h2>${month}</h2>`;
//    document.querySelector("#confirmMonth").innerHTML = `<button id="finalMonth">Confirm Month</button>`;
//}
//
//function confirmMonth(){
//    let confirmMonth = document.querySelector("#monthDisplayed");
//    confirmMonth.innerHTML = " ";
//    confirmMonth.innerHTML = `<h2>&#x2713;</h2>`;
//}
//
//function setDate(){
//    let date = document.querySelector("#date").value;
//    let outPutDate = document.querySelector("#dateDisplayed");
//    outPutDate.innerHTML = `<h2>${date}</h2>`;
//    document.querySelector("#confirmDate").innerHTML = `<button id="finalDate">Confirm Date</button>`;
//}

//document.querySelector("#optionYear").addEventListener("change",setYear);
//document.querySelector("#optionMonth").addEventListener("change",setMonth);
//document.querySelector("#optionDate").addEventListener("change",setDate);
//
//document.querySelector("#confirmMonth").addEventListener("click",confirmMonth);
