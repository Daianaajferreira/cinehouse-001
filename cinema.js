
// puxar o json dentro de uma variavel
var catalogo = require ("./database/catalogo.json");

console.log(catalogo)

//converte JSON objeto para -   em String para tirar tabulações desnecessarias
var catalogoString = JSON.stringify(catalogo);
console.log(catalogoString)

//converter JSON  como estring, para objeto 
var catalogoObj = JSON.parse(catalogoString)
console.log (catalogoObj)


function listarTodosOsFilmes (filmes){
    for (let i =0, i < filmes.length, i++)
    console.log(filmes[i].titulo)
}
listarTodosOsFilmes(catalogoObj.data)