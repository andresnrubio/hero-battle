//------BIENVENIDA------//
function saludo() {
    alert("Bienvenido, esto es un simulador de batallas a dos round");
}

//------INGRESO DE PLAYER------//

function peleador(nombre, atq, def, spd, int, id, img) {
    this.nombre = nombre;
    this.atq = atq;
    this.def = def;
    this.spd = spd;
    this.int = int;
    this.id = id;
    this.img = img;
    this.saludoPeleador = function() { console.log("Hola soy " + this.nombre + " y ganaré esta pelea") }
}

/*
function solicitarNombre(player) {
    nombre = prompt("Ingrese el nombre " + player);
    return nombre;
}

 nombre = solicitarNombre("su luchador");

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
id = 0;


const playerOne = new peleador(nombre, atq, def, spd, int, id);

 */
const playerOne = new peleador("CARLOS", 150, 80, 20, 90, 1, "no-avatar.jfif");

console.log(playerOne["nombre"]);
console.log(playerOne["atq"]);
console.log(playerOne["def"]);
console.log(playerOne["spd"]);
console.log(playerOne["int"]);
console.log(playerOne["id"]);
playerOne.saludoPeleador();



//Para simplificar los valores del segundo jugador ya estan definidos

const batman = new peleador("Batman", 13, 12, 20, 90, 1, "batman-prime-earth.jpg");
const flash = new peleador("Flash", 13, 12, 20, 90, 2, "the-flash-prime-earth.jpg");
const superman = new peleador("Superman", 13, 12, 20, 90, 3, "superman-prime-earth.jpg");
const capitanAmerica = new peleador("Capitan America", 13, 12, 20, 90, 4, "captain-america-earth-616.jpg");
const ironMan = new peleador("Iron Man", 75, 60, 50, 90, 5, "iron-man-earth-616.jpg");
const scarletWitch = new peleador("Scarlet Witch", 13, 12, 20, 90, 6, "scarlet-witch-earth-616.jpg");
const saitama = new peleador("Saitama", 100, 95, 85, 50, 7, "saitama-opm.jpg");


// se declara y pushean los objetos dentro del array
const heroes = []

heroes.push(batman);
heroes.push(flash);
heroes.push(superman);
heroes.push(capitanAmerica);
heroes.push(ironMan);
heroes.push(scarletWitch);
heroes.push(saitama);

console.log(heroes);

// se ordena array que contiene heroes por su poder de ataque

const ordenados = heroes.sort((a, b) =>
    a.atq < b.atq ? 1 : b.atq < a.atq ? -1 : 0
);
console.log(ordenados);

function randomId(min, max) {
    id = Math.random() * (max - min) + min;

    id = Math.round(id)
    console.log("id " + id)
    return (id);
}

const playerTwo = new peleador("playerTwo", 0, 0, 0, 0, 0);

playerTwo["id"] = randomId(1, 7);

console.log(playerTwo["nombre"]);
console.log(playerTwo["atq"]);
console.log(playerTwo["def"]);
console.log(playerTwo["spd"]);
console.log(playerTwo["int"]);
console.log(playerTwo["id"]);


switch (playerTwo["id"]) {
    case 1:
        playerTwo["nombre"] = batman["nombre"];
        playerTwo["atq"] = batman["atq"];
        playerTwo["def"] = batman["def"];
        playerTwo["spd"] = batman["spd"];
        playerTwo["int"] = batman["int"];
        playerTwo["img"] = batman["img"];
        break;
    case 2:
        playerTwo["nombre"] = flash["nombre"];
        playerTwo["atq"] = flash["atq"];
        playerTwo["def"] = flash["def"];
        playerTwo["spd"] = flash["spd"];
        playerTwo["int"] = flash["int"];
        playerTwo["img"] = flash["img"];
        break;
    case 3:
        playerTwo["nombre"] = superman["nombre"];
        playerTwo["atq"] = superman["atq"];
        playerTwo["def"] = superman["def"];
        playerTwo["spd"] = superman["spd"];
        playerTwo["int"] = superman["int"];
        playerTwo["img"] = superman["img"];
        break;
    case 4:
        playerTwo["nombre"] = capitanAmerica["nombre"];
        playerTwo["atq"] = capitanAmerica["atq"];
        playerTwo["def"] = capitanAmerica["def"];
        playerTwo["spd"] = capitanAmerica["spd"];
        playerTwo["int"] = capitanAmerica["int"];
        playerTwo["img"] = capitanAmerica["img"];
        break;
    case 5:
        playerTwo["nombre"] = ironMan["nombre"];
        playerTwo["atq"] = ironMan["atq"];
        playerTwo["def"] = ironMan["def"];
        playerTwo["spd"] = ironMan["spd"];
        playerTwo["int"] = ironMan["int"];
        playerTwo["img"] = ironMan["img"];
        break;
    case 6:
        playerTwo["nombre"] = scarletWitch["nombre"];
        playerTwo["atq"] = scarletWitch["atq"];
        playerTwo["def"] = scarletWitch["def"];
        playerTwo["spd"] = scarletWitch["spd"];
        playerTwo["int"] = scarletWitch["int"];
        playerTwo["img"] = scarletWitch["img"];
        break;
    case 7:
        playerTwo["nombre"] = saitama["nombre"];
        playerTwo["atq"] = saitama["atq"];
        playerTwo["def"] = saitama["def"];
        playerTwo["spd"] = saitama["spd"];
        playerTwo["int"] = saitama["int"];
        playerTwo["img"] = saitama["img"];
        break;
    default:
        break;
}
console.log(playerTwo["nombre"]);
console.log(playerTwo["atq"]);
console.log(playerTwo["def"]);
console.log(playerTwo["spd"]);
console.log(playerTwo["int"]);
console.log(playerTwo["id"]);


playerTwo.saludoPeleador();

let playerRight = document.createElement("img");
playerRight.src = `../media/characters/${playerTwo["img"]}`;
playerRight.alt = "Jugador Derecho";
document.getElementById("jugadorDos").appendChild(playerRight);

let playerLeft = document.createElement("img");
playerLeft.src = `../media/characters/${playerOne["img"]}`;
playerLeft.alt = "Jugador Derecho";
document.getElementById("jugadorUno").appendChild(playerLeft);



//------COMBATE------//


const playerLeftTitle = document.getElementById("playerLeftTitle");
playerLeftTitle.innerHTML = `${playerOne["nombre"]}`;

const playerRightTitle = document.getElementById("playerRightTitle");
playerRightTitle.innerHTML = `${playerTwo["nombre"]}`;


const diferencia = (a, b) => a - b;

//Ingresar valores de Atq vs Defensa o Velocidad vs Inteligencia devuelve true en caso de victoria de player 1, false en caso de victoria player 2 o null en caso de empate


let comienzo = "";

function round(a, b, c, d) {

    comienzo += "<p>Comienzo del round! </p>";
    hit1 = diferencia(a, d);
    comienzo += "<p>Atacas!</p>";
    console.log(hit1);
    if (hit1 > 0) {
        comienzo += `<p>Hiciste ${hit1} de daño</p>`;
    } else if (hit1 < 0) {
        comienzo += `<p>Tu golpe te daño a ti!</p>`;
    } else {
        comienzo += `<p>Tu golpe no tuvo efecto!</p>`;
    }


    hit2 = diferencia(c, b);
    comienzo += `<p>"Defiendes!"</p>`;
    if (hit2 > 0) {
        comienzo += `<p>Recibiste ${hit2} de daño</p>`;
    } else if (hit2 < 0) {
        comienzo += `<p>Devolviste el ataque!</p>`;
    } else {
        comienzo += `<p>El golpe no tuvo efecto!</p>`;
    }



    if (hit1 > hit2) {
        return true;
    } else if (hit2 > hit1) {
        return false;
    } else {
        return null;
    }

}


comienzo += "<p>Round 1</p>";

roundA = round(playerOne["atq"], playerOne["def"], playerTwo["atq"], playerTwo["def"]);
console.log(`resultado de roundA ${roundA}<br>`);

roundB = round(playerOne["spd"], playerOne["int"], playerTwo["spd"], playerTwo["int"]);
console.log(`resultado de roundB ${roundB}<br>`);

const roundCenter = document.getElementById("rounds")
roundCenter.innerHTML = comienzo;

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
/* 
document.write("La batalla a finalizado..." + `<br>`);
 */
//------RESULTADO------//

let ganador = "";

if (winner === true) {

    ganador = `<p id="finalBaner">${playerOne["nombre"]} ha Ganado!</p>`;
} else if (winner === false) {
    ganador = `<p id="finalBaner">${playerTwo["nombre"]} a ganado esta batalla</p>`;
} else {
    ganador = `<p id="finalBaner">${playerOne["nombre"]} y  ${playerTwo["nombre"]} han empatado!</p>`;
}

const final = document.getElementById("final")
final.innerHTML = ganador;


//------SALIDA/SALUDO------//
/* alert("Gracias por participar!"); */

//Se dejaron console.log de control en cada salida para chequear el correcto funcionamiento.