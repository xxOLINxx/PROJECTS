let number = 0;
let count = document.getElementById('count');

document.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
        if (button.value == 'decrease'){
            number--;
        } else if (button.value == 'increase'){
            number++;
        } else if (button.value == 'reset'){
            number = 0;
        }
        count.innerText = number;
        if (number < 0){
            count.style.color = 'red';
        } else if (number == 0){
            count.style.color = 'black';
        } else {
            count.style.color = 'green';
        }
    }
})