const fs = require('fs')
const path = require('path')
const stringaInput = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
const arrayInput = stringaInput.split("\n");
arrayInput.forEach(function(valore, index) {
    this[index] = parseInt(valore, 10);
}, arrayInput); // use arr as this


var misurazionePrecedente = 0
var contatoreIncremento = 0
arrayInput.forEach( (valore, indice) => {
    if(misurazionePrecedente){
        if(indice+2 <= arrayInput.length-1){
            if (misurazionePrecedente < valore+arrayInput[indice+1]+arrayInput[indice+2]){
                contatoreIncremento++;
            }
        }
    }
    misurazionePrecedente = valore+arrayInput[indice+1]+arrayInput[indice+2];
})

console.log(contatoreIncremento);


