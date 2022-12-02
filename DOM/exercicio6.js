//Como atualizar o elemento com JS

//Criamos um elento
const novoTitulo = document.createElement('h2');
//como carcterizar o nosso 
novoTitulo.id = 'task-title';
novoTitulo.appendChild(document.createTextNode('Nova Lista'));

//CAPTURAMOS O ELEMENTO H5 (que está originalmente 
//no html)
const tituloAtual = document.getElementById('task-title');

//Captuamos o elemento mã/pai do ekemento que 
//queremos atualizar
let divMaeDoTitulo =
     document.getElementsByClassName('card-action');

     divMaeDoTitulo[0].replaceChild(novoTitulo, tituloAtual);



