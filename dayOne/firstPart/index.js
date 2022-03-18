const fs = require('fs')
const path = require('path')
const stringaInput = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
const arrayInput = stringaInput.split("\n");
arrayInput.forEach(function(valore, index) {
    this[index] = parseInt(valore, 10);
}, arrayInput); // use arr as this

var misurazionePrecedente = 0
var contatoreIncremento = 0

arrayInput.forEach( valore => {
    if(misurazionePrecedente){
        if(valore > misurazionePrecedente) contatoreIncremento++;
    }
    misurazionePrecedente = valore
})

console.log("Totale incremento: "+ contatoreIncremento)


