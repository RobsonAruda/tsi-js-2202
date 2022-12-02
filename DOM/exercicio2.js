let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function (evento){
    evento.preventDefault();

    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');


    let preco = calculaPreco( serv.value, prazo.value);    

/*recuperar os dados da matriz*/


    res.innerText = `O preço é ${preco}`;

  

 //ver dados do evento (click) no console
   // console.log(evento);

    //Obter os valor de serviço e prazo

});

function calculaPreco( servico, prazo){

let tabela = [  ['$$$','$$', '$'],
                ['$$$$', '$$$', '$$'],
                ['Não faz', 'Não faz', '$$$']];

    return tabela[servico][prazo];
}


/*
btnCalcular.addEventListener('click', executa())

function execute(){
    alert('Clicou');
}
*/

//console.log(btnCalcular);