document.querySelector('button').addEventListener('click', recuperaDados)

function recuperaDados(evento){

    evento.preventDefault();

    //Fazemos a chamada                             //então(ou, depois)
    fetch('127.0.0.1:5500/ajax/conteudo.txt').then(function(ret){

        //pegamos apenas o conteúdo do retorno
        return ret.text();

        //então
    }).then(function(cont){

        //trabalhamos com o conteúdo retornado
        //Recupera a string JSON e transforma em objeto JSON
        let dados = JSON.parse(cont);

        let saida = '';

        //Looping para ler todo o vetor
        dados.forEach(function(aluno){

            //Verifica a idade da pessoa para mostrar se é maior
            //ou menor de idade.
            saida += aluno.idade >= 18 ? `${aluno.nome} é maior de idade <br>`
                                        :
                                        `${aluno.nome} é menor de idade <br>`;

    });

        document.querySelector('#dadoRecuperado').innerHTML = saida;

});

}