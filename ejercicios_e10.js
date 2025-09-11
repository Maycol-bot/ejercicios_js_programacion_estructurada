const partidos = [{
juego: 1,
losToros:0,
san_fernando:1
}, 
{
    juego: 2,
    losToros: 6,
    san_fernando: 5
},
{
    juego: 3,
    losToros: 0,
    san_fernando: 1
},
{
    juego: 4,
    losToros: 3,
    san_fernando: 2
},
{
    juego: 5,
    losToros: 2,
    san_fernando: 4
},
{
    juego: 6,
    losToros: 5,
    san_fernando: 3
}
];

//mostrar todos los partidos
const numPartidos = partidos.length;

for (let i = 0; i < numPartidos; i++) {
    let p = partidos.shift();
    console.log(`Partido ${p.juego}: Los Toros ${p.losToros} 
        - San Fernando ${p.san_fernando}`);
 };



    // resultado del partido 1
const p1 = partidos.shift();
console.log(`Resultado del partido 1: Los Toros ${p1.losToros}
     - San Fernando ${p1.san_fernando}`);

// resultado del partido 2
const p2 = partidos.shift();
console.log(`Resultado del partido 2: Los Toros ${p2.losToros}
     - San Fernando ${p2.san_fernando}`);

// resultado del partido 3
const p3 = partidos.shift();
console.log(`Resultado del partido 3: Los Toros ${p3.losToros}
     - San Fernando ${p3.san_fernando}`);

// resultado del partido 4
const p4 = partidos.shift();
console.log(`Resultado del partido 4: Los Toros ${p4.losToros}
     - San Fernando ${p4.san_fernando}`);

// resultado del partido 5
const p5 = partidos.shift();
console.log(`Resultado del partido 5: Los Toros ${p5.losToros}
     - San Fernando ${p5.san_fernando}`);

// resultado del partido 6
const p6 = partidos.shift();
console.log(`Resultado del partido 6: Los Toros ${p6.losToros}
     - San Fernando ${p6.san_fernando}`);