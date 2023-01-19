let table = document.querySelector('table');

for(let i = 0; i < 5; i++){
    let new_tr = document.createElement('tr');
    for(let j = 0; j < 5; j++){
        let cell = String(Math.round(Math.random() * 1000));
        let cell_html = document.createElement('td');
        cell_html.setAttribute('style', 'padding: 10px')
        cell_html.innerText = cell;
        new_tr.appendChild(cell_html);
    }
    table.appendChild(new_tr);
}

function compare(a, b)
{
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function sort(){
    let arr = [];
    let cells = table.getElementsByTagName('td');
    for(let i = 0; i < cells.length; i++){
        arr.push(Number(cells[i].innerText));
    }
    arr.sort(compare); 
    for(let i = 0; i < cells.length; i++){
        cells[i].innerText = arr[i];
    }
}