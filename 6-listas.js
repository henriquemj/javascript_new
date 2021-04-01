console.log(`Trabalhando com listas`);
// const salvador = 
// const saoPaulo =
// const rioDeJaneiro =
// Use o comendo " CTRL + K + C " para marca todos os comentários 
// Use o comendo " CTRL + K + U " para desmarca todos os comentários 

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//Podemos usar o "push" para acrescentar um item a nossa lista
listaDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro) >> usar dessa forma seria muito mais trabalhoso.

console.log(listaDeDestinos);


listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);