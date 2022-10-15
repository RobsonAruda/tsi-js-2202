sessionStorage.setItem('nome', 'Camila');

sessionStorage.setItem('sobrenome', 'Silva');

let btn = document.getElementById('botao');

//Estou pendurando o event listener no botao

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();

        let entrada = document.getElementById('entrada');  
        let mostrando = document.getElementById('mostrar');  
        let valor = entrada.value;
        mostrando.innerText = valor;
        entrada.value = '';

        //após obtermos o dado do usuário 
        //vamos guardá-lo no local storage

        sessionStorage.setItem('dadoDoUsuario', valor);
}
    //Para recuperar o dado do local storage 

    //usamos o sessionStorage.getItem()
    document.querySelector('#mostrar').innerText = 
        sessionStorage.getItem('dadoDoUsuario');
    //E para apagar no local storage?
    //removeItem()
    //sessionStorage.removeItem('dadoDoUsuario');

let vetor = ['pera ', 'banana ', 'manga '];

//Para guardar  algo que não seja uma String no LocalStorage
//ou SessionStorage, temos que converter para string.
//Com o método "JSON.stringify()", transformamos vetores e objetos
//em string
sessionStorage.setItem('frutas', JSON.stringify(vetor));

//let recuperaDado = sessionStorage.getItem('frutas');
//console.log(recuperaDado[1]);

let recupDado = JSON.parse(sessionStorage.getItem('frutas'));
//Alteração de vetor recuperado 
recupDado[3] ='morango';
recupDado[1] ='parchita';

//trasnformado o vetor em string para poder 
let strRecupDados = JSON.stringify(recupDado);

console.log(strRecupDados);

sessionStorage.setItem('frutas', strRecupDados);