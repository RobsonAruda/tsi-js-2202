/*
Criar uma calculadora de valor a ser cobrado do cliente.
O valor do servico pode varias conforme o prazo. 
os valores e prazos devem ser armazenados em uma matriz.
o calculo deve ficar obrigatoriamente em uma função */

let tabela = [ ['$$$','$$','$' ],
               ['$$$$','$$$','$$' ],
               ['NÃO FAZ','--','$$$' ]];

let servico = prompt("Entre com o serviço: \n0 - troca de oléo, \n1 - balanceamento, \n2 - Cambagem ");

let prazo = prompt("Entre com o prazo: \n0 - um dia, \n1 - dois dias, \n2 - Três dias ");

if (validaEntrada (servico) && validaEntrada (prazo)) {
    alert ("O Serviço ficara em: " + tabela [servico] [prazo]);
}else {
    alert (" ERRO: Verifique os valores inseridos e tente novamente");
}

function validaEntrada(dadoUsuario){
    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
}