// 1 - Creo un array con la lista della spesa
let list = ['uova' , 'pecorino', 'guanciale', 'pepe', 'pasta'];


// Dichiarazione variabile contatore
let i = 0;
let list_print = '';
let html_list = document.getElementById('shipping-list');

// 4 - Creo il ciclo while
while(list[i]){
    list_print += list[i];
    const li = document.createElement('li');
    li.innerText = list[i];
    console.log(li);
    html_list.appendChild(li);    
    i++;
}


