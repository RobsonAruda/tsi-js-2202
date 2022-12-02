document.
    querySelector('button').
        addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){

    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://127.0.0.1:5500/ajax/conteudo.txt', true);

    XHR.onload = function(){

        if(this.status == 200){
            //recupera a sring JSON e trasnforma 
            //em objeto JSON
            let dados = JASON.parse(this.responseText);
             let saida ='';

            //Lopping para ler todo o vetor 
            dados.forEach(function(aluno){
             
                //Verifcar a idade da pessoa 
                //para mostrar se é maior o menor
                //de idade 
                saida += aluno.idade >= 18 ? `${aluno.nome} é maior de idade <br>` : `${aluno.nome} é menor de idade <br>`;

            });

            document.querySelector('#dadoRecuperado').innerHTML 
                = saida; 
                
        }
    }

    XHR.send();
}     