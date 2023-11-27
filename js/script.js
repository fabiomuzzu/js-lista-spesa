// 1 - Creo un array con la lista della spesa
let list = ['uova' , 'pecorino', 'guanciale', 'pepe', 'pasta'];

// 3 - Link ul dell'html nello script
let html_list = document.getElementById('shipping-list');

// 4 -Dichiarazione variabile contatore
let i = 0;

// 5 - Dichiaro variabile di partenza della lista
let list_print = '';

// 6 - Inizializzo il ciclo while
while(list[i]){
    // 7 - Cambio la variabile vuota di list_print aggiungendo gli elementi dell'array
    list_print += list[i];
    // 8 - Creo la costante li nello script
    const li = document.createElement('li');
    // 9 - Stampo nella costante li la lista del ciclo while
    li.innerText = list[i];
    // 10 - Linko la costante li come figlio della lista ul presente nell'HTML
    html_list.appendChild(li);    
    i++;
    console.log(li);
}


