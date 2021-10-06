function peleador(nombre, atq, def, spd, int, id, img, life, universe) {
  this.nombre = nombre;
  this.atq = atq;
  this.def = def;
  this.spd = spd;
  this.int = int;
  this.id = id;
  this.img = img;
  this.life = life;
  this.universe = universe;
  this.saludoPeleador = function () {
    console.log("Hola soy " + this.nombre + " y ganaré esta pelea");
  };
}

//------BIENVENIDA------//

let start = document.getElementById("startGame");
start.addEventListener("click", respuestaStart);

const playerOne = new peleador();

function respuestaStart() {
  // document.getElementById("bienvenida").style.display = "none";
  $("#bienvenida").fadeOut();
  showAndSelect();
}

// console.log(playerOne["nombre"]);

// // -------SELECCION DE PERSONAJE-----------/
console.log(playerOne);

function showAndSelect() {
  fetch("./js/heroes.json",{
         headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
  })
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos.heroes);

      const heroes = datos.heroes;

      for (const heroe of heroes) {
        //Por cada heroe además de los datos agregamos un botón

        $("#seleccion").append(
          `<div>
                        <div class="heroCard playerOne selectGrid" id="jugadorUno">
                        <div class="avatar crop" id="avatarJugadorUno">
                        <img src="media/characters/${heroe.img}" id="crop" alt="${heroe.nombre}">
                        </div>
                        <div class="lifeBar" id="lifeBar"></div>
                        <div class="Name" id="playerLeftTitle">${heroe.nombre}</div>
                        <button id="btn${heroe.id}" class="btnSelect">Seleccionar</button>
                        </div>
                        </div>`
        );

        //Asociamos el evento a botón recién creado.

        $(`#btn${heroe.id}`).on("click", function () {
          document.getElementById("seleccion").style.display = "none";
          document.getElementById("game").style.display = "grid";
          console.log(`Seleccionaste a  ${heroe.nombre}`);

          playerOne["nombre"] = `${heroe.nombre}`;
          playerOne["atq"] = `${heroe.atq}`;
          playerOne["def"] = `${heroe.def}`;
          playerOne["spd"] = `${heroe.spd}`;
          playerOne["int"] = `${heroe.int}`;
          playerOne["img"] = `${heroe.img}`;
          playerOne["id"] = `${heroe.id}`;
          playerOne["universe"] = `${heroe.universe}`;
          playerOne["life"] = `${heroe.life}`;

          const playerTwo = playerTwoSeleccion(playerOne.id);
        //   console.log(playerTwo);
        //   console.log(
        //     "Jugador 2 " + playerTwo[nombre] + " Jugador 1 " + playerOne.nombre
        //   );

          setBattle(playerOne, playerTwo);
        });
      }

      function playerTwoSeleccion(playerOne) {
          
        function randomId(min, max) {
          id = Math.random() * (max - min) + min;
          id = Math.round(id);
          console.log("id " + id);
          return id;
        }

        const totalHeroes = heroes.length;

        let seleccion = playerOne;
        let playerTwo = {};

        while (seleccion === playerOne  ){

        seleccion = randomId(1, totalHeroes);

        playerTwo = heroes.find(function (element) {

          return element.id == seleccion;

        });
        }

        return playerTwo;
      }

      function setBattle(playerOne, playerTwo) {
        
        $("#jugadorUnoBattle").append(
          `
                        <div class="heroCard playerOne" id="jugadorUno">
                        <div class="avatar crop" id="avatarJugadorUno">
                        <img src="media/characters/${playerOne.img}" id="crop" alt="${playerOne.nombre}">
                        </div>
                        <div class="lifeBar" id="lifeBar"></div>
                        <div class="Name" id="playerLeftTitle">${playerOne.nombre}</div>
                        <button id="btnAtqOne" class="atq botonBatalla">Fuerza</button>
                        <button id="btnSpdOne" class="spd  botonBatalla">Velocidad</button>
                        <button id="btnDefOne" class="def  botonBatalla">Defensa</button>
                        <button id="btnIntOne" class="int  botonBatalla">Inteligencia</button>
                        </div>
                        `
        );

        $("#jugadorDosBattle").append(
          `
                        <div class="heroCard playerTwo" id="jugadorUno">
                        <div class="avatar crop" id="avatarJugadorDos">
                        <img src="media/characters/${playerTwo.img}" id="crop" alt="${playerTwo.nombre}">
                        </div>
                        <div class="lifeBar" id="lifeBar"></div>
                        <div class="Name" id="playerRightTitle">${playerTwo.nombre}</div>
                        <button id="btnAtqTwo" class="atq botonBatalla">Fuerza</button>
                        <button id="btnSpdTwo" class="spd botonBatalla">Velocidad</button>
                        <button id="btnDefTwo" class="def botonBatalla">Defensa</button>
                        <button id="btnIntTwo" class="int botonBatalla">Inteligencia</button>
                        </div>
                        `
        ); 
        battle (playerOne,playerTwo);                                                             
      }


function battle (playerOne,playerTwo){
      
    console.log("el player es ", playerOne.nombre);
    console.log(playerTwo);
    console.log("el player dos es ", playerTwo.nombre);

      $(`#btnAtqOne`).on("click", function () {
        console.log("Atacaste con fuerza")
      })
      $(`#btnSpdOne`).on("click", function () {
        console.log("Te mueves rapido")
      })
      $(`#btnDefOne`).on("click", function () {
        console.log("Te defendiste")
      })
      $(`#btnIntOne`).on("click", function () {
        console.log("Fuiste Inteligente")
      })
    
     $(`#btnAtqTwo`).on("click", function () {
        console.log("Atacaste con fuerza")
      })

      $(`#btnSpdTwo`).on("click", function () {
        console.log("Te mueves rapido")
      })

      $(`#btnDefTwo`).on("click", function () {
        console.log("Te defendiste")
      })

      $(`#btnIntTwo`).on("click", function () {
        console.log("Fuiste Inteligente")
      })

    }

    function golpe (atq, spd, def, int){

        // ataque directo

        
    }

    //Cierre Then;
    })}

//------COMBATE------//

//     let botonAtqOne = document.getElementById("btnAtqPlayerOne")
//     botonAtqOne.addEventListener("click", respuestaAtqOne)

//     function respuestaAtqOne() {
//         console.log("Respuesta evento Ataque 1");
//     }
//     let botonSpdOne = document.getElementById("btnSpdPlayerOne")
//     botonSpdOne.addEventListener("click", respuestaSpdOne)

//     function respuestaSpdOne() {
//         console.log("Respuesta evento Speed 1");
//     }

//     let botonAtqTwo = document.getElementById("btnAtqlayerTwo")
//     botonAtqTwo.addEventListener("click", respuestaAtqTwo)

//     function respuestaAtqTwo() {
//         console.log("Respuesta evento Ataque 2");
//     }
//     let botonSpdTwo = document.getElementById("btnSpdPlayerTwo")
//     botonSpdTwo.addEventListener("click", respuestaSpdTwo)

//     function respuestaSpdTwo() {
//         console.log("Respuesta evento Speed 2");
//     }

//     const playerLeftTitle = document.getElementById("playerLeftTitle");
//     playerLeftTitle.innerHTML = `${playerOne["nombre"]}`;

//     const playerRightTitle = document.getElementById("playerRightTitle");
//     playerRightTitle.innerHTML = `${playerTwo["nombre"]}`;

// }

// var contenido = querySelector('#seleccion')

// console.log(playerOne);
// console.log("Hola Juan Carlos");
// console.log(playerOne["nombre"]);
// console.log(playerOne["atq"]);
// console.log(playerOne["def"]);
// console.log(playerOne["spd"]);
// console.log(playerOne["int"]);
// console.log(playerOne["id"]);

//Ingresar valores de Atq vs Defensa o Velocidad vs Inteligencia devuelve true en caso de victoria de player 1, false en caso de victoria player 2 o null en caso de empate

// setBattle(playerOne, playerTwo);

// let comienzo = "";

// const diferencia = (a, b) => a - b;

// function round(a, b, c, d) {

//     comienzo += "<p>Comienzo del round! </p>";
//     hit1 = diferencia(a, d);
//     comienzo += "<p>Atacas!</p>";
//     console.log(hit1);
//     if (hit1 > 0) {
//         comienzo += `<p>Hiciste ${hit1} de daño</p>`;
//     } else if (hit1 < 0) {
//         comienzo += `<p>Tu golpe te daño a ti!</p>`;
//     } else {
//         comienzo += `<p>Tu golpe no tuvo efecto!</p>`;
//     }

//     hit2 = diferencia(c, b);
//     comienzo += `<p>"Defiendes!"</p>`;
//     if (hit2 > 0) {
//         comienzo += `<p>Recibiste ${hit2} de daño</p>`;
//     } else if (hit2 < 0) {
//         comienzo += `<p>Devolviste el ataque!</p>`;
//     } else {
//         comienzo += `<p>El golpe no tuvo efecto!</p>`;
//     }

//     if (hit1 > hit2) {
//         return true;
//     } else if (hit2 > hit1) {
//         return false;
//     } else {
//         return null;
//     }

// }

// comienzo += "<p>Round 1</p>";

// roundA = round(playerOne["atq"], playerOne["def"], playerTwo["atq"], playerTwo["def"]);
// console.log(`resultado de roundA ${roundA}<br>`);

// roundB = round(playerOne["spd"], playerOne["int"], playerTwo["spd"], playerTwo["int"]);
// console.log(`resultado de roundB ${roundB}<br>`);

// const roundCenter = document.getElementById("rounds")
// roundCenter.innerHTML = comienzo;

//Compara resultados de los round para definir ganador o empate

// function batalla(round1, round2) {
//     if (
//         (round1 === true && round2 === true) ||
//         (round1 === true && round2 === null) ||
//         (round1 === null && round2 === true)
//     ) {
//         return true;
//     } else if (
//         (round1 === false && round2 === false) ||
//         (round1 === true && round2 === null) ||
//         (round1 === null && round2 === false)
//     ) {
//         return false;
//     } else if (
//         (round1 === true && round2 === false) ||
//         (round1 === false && round2 === true) ||
//         (round1 === null && round2 === null)
//     ) {
//         return null;
//     }
// }

// let winner = batalla(roundA, roundB);

// console.log(`resultado de batalla ${winner}<br>`);

// //------RESULTADO------//

// let ganador = "";

// if (winner === true) {

//     ganador = `<p id="finalBaner">${playerOne["nombre"]} ha Ganado!</p>`;
// } else if (winner === false) {
//     ganador = `<p id="finalBaner">${playerTwo["nombre"]} a ganado esta batalla</p>`;
// } else {
//     ganador = `<p id="finalBaner">${playerOne["nombre"]} y  ${playerTwo["nombre"]} han empatado!</p>`;
// }

// const final = document.getElementById("final")
// final.innerHTML = ganador;

//------SALIDA/SALUDO------//
/* alert("Gracias por participar!"); */

//Se dejaron console.log de control en cada salida para chequear el correcto funcionamiento
