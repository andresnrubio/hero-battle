//------BIENVENIDA------//
function saludo() {
    alert("Bienvenido, esto es un simulador de batallas a dos round");
}

//------INGRESO DE PLAYER------//
function solicitarNombre(player) {
    nombre = prompt("Ingrese el nombre " + player);
    return nombre;
}

let player1 = solicitarNombre("su luchador");
let player2 = solicitarNombre("su contrincante");

//CARGA VALORES ATQ / DEF / SPD / INT
let atq = prompt("Ingresa tu nivel de ataque");
atq = parseInt(atq);
console.log(`atq = ${atq}`)
let def = prompt("Ingresa tu nivel de defensa");
def = parseInt(def);
console.log(`def = ${def}`)
let spd = prompt("Ingresa tu nivel de velocidad");
spd = parseInt(spd);
console.log(`spd = ${spd}`)
let int = prompt("Ingresa tu nivel de inteligencia");
int = parseInt(int);
console.log(`int = ${int}`)

//Para simplificar los valores del segundo jugador ya estan definidos
atq2 = 55;
def2 = 70;
spd2 = 77;
int2 = 66;

//------COMBATE------//

document.write("Da inicio la batalla entre " + player1 + " y " + player2 + "!" + `<br>`);

const diferencia = (a, b) => a - b;

//Ingresar valores de Atq vs Defensa o Velocidad vs Inteligencia devuelve true en caso de victoria de player 1, false en caso de victoria player 2 o null en caso de empate

function round(a, b, c, d) {
    document.write("Comienzo del round!" + `<br>`);

    hit1 = diferencia(a, d);
    document.write("Atacas!" + `<br>`);
    if (hit1 > 0) {
        document.write(`Hiciste ${hit1} de daño<br>`);
    } else if (hit1 < 0) {
        document.write(`Tu golpe te daño a ti!<br>`);
    } else {
        document.write(`Tu golpe no tuvo efecto!<br>`);
    }

    hit2 = diferencia(c, b);
    document.write("Defiendes!" + `<br>`);
    if (hit2 > 0) {
        document.write(`Recibiste ${hit2} de daño<br>`);
    } else if (hit2 < 0) {
        document.write(`Devolviste el ataque!<br>`);
    } else {
        document.write(`El golpe no tuvo efecto!<br>`);
    }

    if (hit1 > hit2) {
        return true;
    } else if (hit2 > hit1) {
        return false;
    } else {
        return null;
    }
}

document.write("Round 1" + `<br>`);

roundA = round(atq, def, atq2, def2);
console.log(`resultado de roundA ${roundA}<br>`);

document.write("Round 2" + `<br>`);

roundB = round(spd, int, spd2, int2);
console.log(`resultado de roundB ${roundB}<br>`);

//Compara resultados de los round para definir ganador o empate

function batalla(round1, round2) {
    if (
        (round1 === true && round2 === true) ||
        (round1 === true && round2 === null) ||
        (round1 === null && round2 === true)
    ) {
        return true;
    } else if (
        (round1 === false && round2 === false) ||
        (round1 === true && round2 === null) ||
        (round1 === null && round2 === false)
    ) {
        return false;
    } else if (
        (round1 === true && round2 === false) ||
        (round1 === false && round2 === true) ||
        (round1 === null && round2 === null)
    ) {
        return null;
    }
}

let winner = batalla(roundA, roundB);
console.log(`resultado de batalla ${winner}<br>`);

document.write("La batalla a finalizado..." + `<br>`);

//------RESULTADO------//

if (winner === true) {
    document.write(player1 + " ha Ganado!");
} else if (winner === false) {
    document.write(player2 + " a ganado esta batalla");
} else {
    document.write(player1 + " y " + player2 + " quedaron empatados!");
}

//------SALIDA/SALUDO------//
alert("Gracias por participar!");

//Se dejaron console.log de control en cada salida para chequear el correcto funcionamiento.
