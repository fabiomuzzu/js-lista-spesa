// 1 - Creo un array con la lista della spesa
let list = ['uova' , 'pecorino', 'guanciale', 'pepe', 'pasta'];

// 3 - Link ul dell'html nello script
let html_list = document.getElementById('shipping-list');

// 4 - Dichiarazione variabile contatore
let i = 0;

// 5 - Inizializzo il ciclo while
while(i<list.length){
    // 6 - Creo la costante li nello script
    const li = document.createElement('li');
    // 7 - Stampo nella costante li la lista del ciclo while
    li.innerText = list[i];
    // 8 - Linko la costante li come figlio della lista ul presente nell'HTML
    html_list.appendChild(li);    
    i++;
    console.log(li);
}


