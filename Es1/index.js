
let numero = prompt("Inserisci il voto che hai preso");
function Voto()  {
    if (numero < 18) {
        
        console.log("Insufficente");
    } else if (numero >= 18 && numero < 21) {
        console.log("Sufficente");
        
    } else if (numero >= 21 && numero < 24) {
        console.log("Buono");
    } else if (numero >= 24 && numero < 27) {
        console.log("Distinto");
    } else if (numero >= 27 && numero <= 29) {
        console.log("Ottimo");
    } else if (numero == 30) {
        console.log("Eccellente");
    }
}
Voto(numero);
