const entradaTarefa = document.querySelector('#tarefa');
const btnAddTarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){

    //Quando a pagina for carregada, chama recuperaTarefa
    document.addEventListener('DomcontentLoaded ', recuperaTarefa);

    //evento para adicionar a tarefa
    btnAddTarefa.addEventListener('click', adicionarTarefa);

    //evento para fazer o x funcionar (apagar uma única tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);

    //evento para limpar toda a lista
    btnLimpaTudo.addEventListener('click', apagarTudo);

    //evento para filtrar as tarefas
    filtroDeTarefa.addEventListener('keyup', filtrar);

}

carregaMonitoresDeEventos();

function recuperaTarefa(evento){
     
    //Recuperar dados do localStorage
     let tarefas = localStorage.getItem('tarefas')  
     
     //Verificar se há dados recperados 
     //se não existir trasnforma em vetor 
     if(tarefas == null){
        tarefas = [];
        
     }

     tarefas = JSON.parse(tarefas);

     tarefas.forEach(function(tarefas){
        const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    //cria a onde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //cria ícone com x para apagar a tarefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    //monta o elemento li para colocar em ul
    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

     });
}


function filtrar(evento){

    //capturamos o que o usuário está digitando
    //passando tudo para minúsculo
    const procurado = evento.target.value.toLowerCase();

    //capturamos todos os elementos <li> existentes 
    const tarefas = document.querySelectorAll('.collection-item');

    //Para cada tarefa existente, busque a string
    //desejada
    tarefas.forEach(function(tarefa){

        //Recuperamos apenas o texto do elemento 
        //<li> onde está a tarefa
        textoTarefa = tarefa.innerText;

        //Procuramos a string digitada no filtro
        //no texto que está no <li>
        if( textoTarefa.toLowerCase().indexOf(procurado) != -1 ){
            tarefa.style.display = 'block';

        }else{

            tarefa.style.display = 'none';
        }
    });
}

function apagarTudo(evento){

    evento.preventDefault();
    listaDeTarefas.innerHTML = '';    

    localStorage.removeItem('tarefas');
}

function apagarTarefa(evento){

    //se o elemento pai tiver a classe apaga-tarefa,
    //ou seja, for o elemento "a", apague li, ou seja, 
    //a tarefa
    if( evento.target.parentElement.classList.contains('apaga-tarefa') ){

        //apaga o elemento pai do "a", ou seja, o li, pois
        //o elemento alvo do evento foi o i 
        evento.target.parentElement.parentElement.remove();

        apagarDoLocalStorage(evento.target.parentElement.parentElement.remove);
    }
}

function apagarDoLocalStorage(tarefa){
    console.log(tarefa.innerText);

    let tarefaParaSerApagada = tarefa.innerText;
    let tarefas = [];
    //recuperar i que já existe no localstorage
    if(localStorage.getItem('tarefas') !== null){
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }
    //transforma em um obejeto JSON, não ua stiring



    //fazer um loping  para buscar tarefas
    tarefas.forEach(function(tarefa, indice){
        //se encontramos  oque queremos apagar, apagamos.
        if(tarefaParaSerApagada == tarefa){
            //apagamos a tarefa igual que o 
            //usuario clicou 
            tarefas.splice(indice,1);
        }
    });
    //retirad tarefa do objeto JASON

    //Gravar o objet oque sobrou 
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function adicionarTarefa(evento){
    evento.preventDefault();

    //verifica se usuário entrou com uma tarefa
    if( entradaTarefa.value === '' ){
        alert('Entre com uma tarefa');
        return false;
    }

    //cria li com a nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    //cria a onde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //cria ícone com x para apagar a tarefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    //monta o elemento li para colocar em ul
    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

    //gravar a tarefa no localStorage
    gravarTarefa(entradaTarefa.value);
   
    //apaga o input para entrada
   entradaTarefa.value = '';
}

function gravarTarefa(tarefa){

    let tarefas = [];
    let tarefaDoStorage = localStorage.getItem('tarefas');

    if( tarefaDoStorage != null ){
        tarefas = JSON.parse(tarefaDoStorage);
    }

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}