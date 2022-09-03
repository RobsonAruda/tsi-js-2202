let vetor = ['Robson', 'arruda', 'lima'];

//loping com vetor

for (var i = 0 ; i < vetor.length; i++ )
{
    console.log(`nome: ${vetor[i]}`);
}

//Foreach for = para each = cada

vetor.forEach(function (valor, indice ){
    console.log(`${indice}: ${valor}`);
});


vetor.map(function(valor, indice){
    
    console.log(`${indice}: ${valor}`);
})

