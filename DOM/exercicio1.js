//console.log(window);

//Como utilizar atributos de um objeto
//alert(`Sua resolução é: ${window.innerWidth} x ${window.innerHeight}`);

/*
let meuTitulo =  document.getElementById('titulo');

if(confirm('Deixe uma mensagem')){
    
    let msg = prompt('Mensagem')
    meuTitulo.innerText = msg; 
    meuTitulo.style.background = 'blue';
    
}else{
   meuTitulo.innerText = 'Sem mensagem'; 
   meuTitulo.style.background = 'orangered';
}
*/

let nav = window.navigator.vendor;

console.log(`Você está usando o navegador ${nav}`);


