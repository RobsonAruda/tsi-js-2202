document.querySelector('button').addEventListener('click', mostraIpca);

function mostraIpca(evento){
    evento.preventDefault();

    document.querySelector('#ipca').innerHTML='';

    const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101';

    fetch(url).then(function(retorno){

        return retorno.text();

    }).then(function(stringJson){

        let anoUsuario =  document.querySelector('#ano').value;

        const indices = JSON.parse(stringJson);

        let indice;
        let ipca =[];
        

            indices.forEach(function (mes) {
                anoString = mes.data.substring(6, 10);
                mesString = mes.data.substring(3, 5);
                anoMesString = anoString + '-' + mesString;

                if(parseInt(anoString) ! = anoUsuario && anoUsuario != ""){
                    return;
                }

                indice = parseFloat (mes.valor);
                ipca.push({month: anoMesString, value: indice});
                
            });
            if (ipca.length == 0){
                alert (`Não há dados paa o ano sem nada ${anoUsuario}`);
            }
            

            console.log(ipca);

        //////  Fazer em casa! //////
        //colocar os dados recuperados da API 
        //no gráfico

        jsonParaMorris = {
                            element: 'ipca',
                                // Dados do gráfico
                            data: ipca,
                        
                            // O nome do eixo com os valores de X
                            xkey: 'month',
                            
                            // Uma lista de nomes dos atributos de dados contidos em Y
                            ykeys: ['value'],
                        
                            // Rótulos para os índices -- aparece quando passa o mouse por cima
                            labels: ['IPCA']
                        };

        new Morris.Line(jsonParaMorris);

    }).catch(function(){

        alert('API do Banco Central fora do ar');
    });
}