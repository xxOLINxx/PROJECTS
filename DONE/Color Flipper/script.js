let color_span = document.getElementById('color');
const letters = 'ABCDEF1234567890';
let simple_text = document.getElementById('simple');
let hex_text = document.getElementById('hex');
let button = document.querySelector('button');

const colors = ['#FF0000','#0039FF', '#F900FF',
 '#00FFE3','#11FF00', '#FFFFFF'];

const simple = () => {
    let random_color = colors[Math.floor(Math.random() * colors.length)]
    color_span.innerText = random_color;
    document.body.style.backgroundColor = random_color;
}

const HEX = () => {
    let random_color = [];
    for (let i=0; i<6;i++){
        random_color.push(letters[(Math.floor(Math.random() * letters.length))]);
    }
    random_color = `#${random_color.join('')}`;
    color_span.innerText = random_color;
    document.body.style.backgroundColor = random_color;
}

const main_function = (number) => {
    if (number == 1){
        simple();
    } else{
        HEX();
    }
}

hex_text.onclick = () => {
    button.value = 0;
    hex_text.style.color = 'rgb(140, 0, 255)';
    simple_text.style.color = 'black';
}

simple_text.onclick = () => {
    button.value = 1;
    hex_text.style.color = 'black';
    simple_text.style.color = 'rgb(140, 0, 255)';
}