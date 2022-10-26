
const conjuntoDeEntradas = [61, 22, 4, 3, 12, 26, 98, 54, 81, 89];
let i = 0;  // contador de chamadas 




function gets() {
    const valor = conjuntoDeEntradas[i];
    i++
    return valor;
};



function print(texto){
    console.log(texto);
}



module.exports = { gets, print };