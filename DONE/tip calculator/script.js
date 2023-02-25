//all useful items
let billTotalInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let numberOfPeople = document.getElementById('numberOfPeople');
let totalPersonDivided = document.getElementById('total-person-divided');
let plusButton = document.getElementById('plusButton');
let minusButton = document.getElementById('minusButton');

//variables
let people = 1;
let billTotal = 0;
let tip = 0;


//functions
const increasingPeople = (input) => {
    if (input === 0){
        people += 1;
        if (people > 99){
            people = 99;
        }
        numberOfPeople.innerText = people;
    }else{
        people -= 1;
        if (people <= 0){
            people = 1;
        }
        numberOfPeople.innerText = people;
    }
}

const calculateBill = () => {
    billTotal = Number(billTotalInput.value);
    tip = Number(tipInput.value);
    result = (billTotal + (billTotal * (tip/100))) / people;
    result = result.toFixed(2);
    totalPersonDivided.innerText = `$ ${result} `;
}



//program itself
numberOfPeople.innerText = 1;
totalPersonDivided.innerHTML = `$ ${0}.00`; 

plusButton.onclick = () => {
    increasingPeople(1);
    calculateBill();
}

minusButton.onclick = () => {
    increasingPeople(0);
    calculateBill();
}




