//console.log(window);

//como utlizar a tributos e um objeito 
//alert(`Sua resolução é: ${window.innerHeight} x ${window.innerWidth}`);

let meuTitulo = document.getElementById ('titulo');

if(confirm('Deixe uma mensagem')){
    let msg = prompt('Mensagem')
    meuTitulo.innerText = msg;
    meuTitulo.style.background = "blue";

}else{
    meuTitulo.innerText = 'Sem mensagem'
    meuTitulo.style.background = "red";
}

let nav = window.navigator.userAgent;
console.log(window.navigator);


