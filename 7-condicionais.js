console.log(`Trabalhando com listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //removendo item
}else if(estaAcompanhada == true){
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1,1); //removendo item
}else{
    console.log("Não é maior de Idade e não posso vender");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18); //maior que
// console.log(idadeComprador < 18); //menor que
// console.log(idadeComprador <= 18); //menor ou igual a
// console.log(idadeComprador >= 18); //maior ou igual a
// console.log(idadeComprador == 18); //igual
