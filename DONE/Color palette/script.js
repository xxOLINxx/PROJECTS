const letters = 'ABCDEF1234567890';
const colorSquares = document.querySelectorAll('.color');
const changeButton = document.getElementById('button');

  function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

const colorChange = () => {
    colorSquares.forEach(item => {
    let random_color = [];
    for (let i=0; i<6;i++){
        random_color.push(letters[(Math.floor(Math.random() * letters.length))]);
    }
    random_color = `#${random_color.join('')}`;
    item.innerHTML = `<div class="upper" style="background-color:${random_color}"></div>
    <div class="lower">${random_color}</div>`;
    item.value = random_color;
    })
}

colorSquares.forEach(item => {
    item.addEventListener('click',()=> {
        copyTextToClipboard(item.value);
        colorSquares.forEach(item => {
            item.innerHTML = item.innerHTML = `<div class="upper"
            style="background-color:${item.value}"></div>
            <div class="lower">${item.value}</div>`;
        })
        item.innerHTML = item.innerHTML = `<div class="upper" style="background-color:${item.value}"></div>
        <div class="lower">Copied!</div>`;
    })
})

colorChange();

