let e;

e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(val) {

    //val.innerText = 'Outra Tarefa';

    console.log(val.innerText);
});

console.log();


//Seleciona cada elemento de pela como se fosse busncado algo pelo ad no css/comparação 

// Com QuerySelecAll
e =  document.querySelectorAll('li');
//ele permiti que execute uma ação para cada item.
e.forEach(function(val){

    console.log(val.innerText);
});

// somente imapres (para apres, evem)
e = document.querySelectorAll('li:nth-child(odd)');

e.forEach(function(val){

    val.style.backgound = '#dedede';   
});

//Sem usar função
e.forEach(fazAlgumaCoisa);

function fazAlgumaCoisa (val){
    console.log(val);

}

e = document.querySelectorAll('ul.collection');

//console.log(e.lastchild);
//aconsole.log(e.childElementCoun);
//console.log(e.children[2]);
