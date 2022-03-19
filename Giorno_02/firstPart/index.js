const fs = require('fs')
const path = require('path')
const stringaInput = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
const arrayInput = stringaInput.split("\n");


posizioneOrizzontale = 0
profondita = 0

arrayInput.forEach( (valore, indice) => {
    comando = valore.substring(0, valore.indexOf(' '));
    valoreComando = valore.substring(valore.indexOf(' '), );
    switch(comando){
        case 'forward':
            posizioneOrizzontale = posizioneOrizzontale + parseInt(valoreComando, 10)
            break;
        case 'down': 
            profondita = profondita + parseInt(valoreComando, 10)
            break;
        case 'up':
            profondita = profondita - parseInt(valoreComando, 10)
    }
})

console.log("La posizione orizzontale è: "+posizioneOrizzontale+" mentre la profondità è: "+profondita+". Quindi i valori moltiplicati tra loro sono: "+posizioneOrizzontale*profondita)




