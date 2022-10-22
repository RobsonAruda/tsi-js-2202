const entradaTarefa = document.querySelector('#tarefa'); 
const btnAddTarefa = document.querySelector('.btn'); 
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){

    //evento para adicionar a tarefa
    btnAddTarefa.addEventListener('click', adicioneTarefa);
    //enevento para o X funcianar (apagar uma unica tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);
    //Evento para limpar toda a lista
    btnLimpaTudo.addEventListener('click', apagaTudo);
    filtroDeTarefa.addEventListener('keyup', filtrar)

}


carregaMonitoresDeEventos();

function filtrar(evento){

    const procurado = (evento.target.value.toLowercasw());

    console.logdocument.querySelectorAll('collection-item');

    tarefas.forEach(function (tarefa){

        textoTarefa = tarefa.innerText;

        if ( textoTarefa.toLowercasw().indexOf(procurado) =! -1){

            tarefa.style.display = 'block';

        }else{

            tarefa.style.display = 'none';

        }

    });

}

function apagaTudo(evento){

    evento.preventDefault();
    listaDeTarefas.innerHTML = '';
}

//const AP = document.createElement('apagaTudo');
    AP.className = 'limpar-tarefas btn black';//

function apagarTarefa(evento){

    //se o elementopai tiver a classe apaga-tarefa, 
    //ou seja, for o emento "a" apague li, ou seja  atarefa
    if(evento.target.parentElement.classList.contains('apaga-tarefa')){

        //apagar o elemento pai do "a" ou seja, o li, pois 
        //o elemento alvo do evento foi o i 
        evento.target.parentElement.parentElement.remove();
    }

}

function adicioneTarefa(evento){

    evento.preventDefault();

    //verifica se o usuário entrou com uma tarefa
    if(entradaTarefa.value === ''){

        alert('Entre com uma tarefa');
        return false;
    }

    //Cria li com a nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    //cria aonde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
     a.className = 'apaga-tarefa secondary-content';

    //cria ícone com x para apagar a tarefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    //monta o elemento li para colocar em ul
    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

      //Gravar a tarefa no localStorange
      gravarTarefa(entradaTarefa.value);

    //apaga o input para entrada
    entradaTarefa.value = '';
  
}

function gravarTarefa(tarefa){

    let tarefa = [];
    
    let tarefaDoStorage = localStorage.getItem('tarefas');

    if(localStorage != null){
        tarefas = JSON.parse(tarefaDoStorage);
    }

    tarefas.push(tarefa);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));

}