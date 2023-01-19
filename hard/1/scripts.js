let main_div = document.querySelector('div');

function change_color(event) {
    let element = event.target
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    element.setAttribute('style', 'background-color: rgb(' + r + ', ' + g + ', ' + b + ');');
}

main_div.addEventListener("click", change_color);

