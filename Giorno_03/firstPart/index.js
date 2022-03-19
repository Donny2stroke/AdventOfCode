const fs = require('fs')
const path = require('path')
const stringaInput = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
const arrayInput = stringaInput.split("\r\n");

var tassoGamma = ""
var tassoEpsylon = ""
var contatoreZero = 0
var contatoreUno = 0

for(let i=0; i<12; i++){
    arrayInput.forEach( (value, index) => {
        if (value[i]=="1") contatoreUno++
        else contatoreZero++
    })
    if(contatoreUno>contatoreZero){
        tassoGamma= tassoGamma+"1"
        tassoEpsylon= tassoEpsylon+"0"
    }else{
        tassoGamma= tassoGamma+"0"
        tassoEpsylon= tassoEpsylon+"1"  
    }
    contatoreUno=0;
    contatoreZero=0;
}


console.log("tassoGammaBinario: "+tassoGamma+" tassoEpsylonBinario: "+tassoEpsylon);
console.log("tassoGammaDecimale: "+parseInt(tassoGamma, 2)+" tassoEpsylonDecimale: "+parseInt(tassoEpsylon, 2));
console.log("Consumo di energia: "+(parseInt(tassoGamma, 2)*parseInt(tassoEpsylon, 2)))



