let toDoList = []; //list where I will put my tasks

//all interactive html elements
let addButton = document.getElementById('addButton'); //button for adding tasks
let clearButton = document.getElementById('clearButton'); //button for clearing all tasks
let whenFilter = document.getElementById('when'); //next three are filters for the list
let priorityFilter = document.getElementById('priority');
let colorFilter = document.getElementById('color');
let submitButton = document.getElementById('submit');
let cancelButton = document.querySelector('.cancel');
let taskBox = document.querySelector('main');
let data = document.querySelectorAll('input');
let addingTask = document.querySelector('.adding-task');

//color inverter (stolen from stackoverflow)
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}
function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

//displaying adding div
addButton.onclick = () => {
    addingTask.style.display = 'block';
}

const vanish = () => {
    addingTask.style.display = 'none';
}

submitButton.onclick = () => {
    let item = {
        "name": data[0].value,
        "date": data[1].value,
        "place": data[2].value,
        "priority": data[3].value,
        "color": data[4].value,
        "description": document.getElementById('textarea').value
    }
    let htmlItem = `<div class="item">
    <div class="item-name info">name</div>
    <div class="item-when info">when</div>
    <div class="item-where info">where</div>
    <div class="item-priority info">priority</div>
</div>`
    vanish();
    toDoList.push(item);
    
}