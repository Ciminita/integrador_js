// definicion

const definicionArreglos = document.querySelector("#definicion");
let arreglos = `
<pre>
<code>
    // Definimos dos arreglos
    heroes = ["Leia", Han", Luke"];
    villanos = [Jabba", Darth Maul", "Lord Vader"];
</code>
</pre>
`;

definicionArreglos.innerHTML = arreglos;

// forma tradicional de concatenacion

const formaTradicional = document.querySelector("#formaTradicional");
let tradicional = `
<pre>
<code>
    let combinado = heroes.concat(villanos);
    console.log(combinado);  
</code>
</pre>
`;

formaTradicional.innerHTML = tradicional;

// forma nueva de concatenacion

const formaNueva = document.querySelector("#formaNueva");
let nueva = `
<pre>
<code>
    let combinado_nuevo = [...heroes, ...villanos];
    console.log(combinado_nuevo);  
</code>
</pre>
`;

formaNueva.innerHTML = nueva;

// tres puntos

const duplicarArray = document.querySelector("#duplicar");
let duplicar = `

<pre>
<code>
    let dupli_heroes = [...heroes];
    console.log("Duplicados");
    console.log(dupli_heroes);
</code>
</pre>
`;

duplicarArray.innerHTML = duplicar;

// reverse

const reverseArray = document.querySelector("#reverse");
let reverse = `

<pre>
<code>
    let [editado] = heroes.reverse();

    console.log(editado);
    console.log(heroes);

    // Para que no pase esto 
    let [editado_dos] = [...heroes].reverse();
    
    console.log(editado_dos);
    console.log(heroes);
</code>
</pre>
`;

reverseArray.innerHTML = reverse;

// operaciones

const operacionesArrays = document.querySelector("#operaciones");
let operaciones = `
<pre>
<code>
    let suma =  (primero, segundo, tercero) => {
       console.log(primero + segundo + tercero);
    };

    numeros = [4,5,6];

    suma(...numeros);
</code>
</pre>
`;

operacionesArrays.innerHTML = operaciones;

// mas ejemplos

const otroEjemplo = document.querySelector("#ejemplo");
let ejemplo = `
<pre>
<code>
    let personalidades = [
       {nombre: "Mozart", area: "Música", nacio: 1756, pais: "Salzburgo"},
       {nombre: "Einstein", area: "Física", nacio: 1879, pais: "Alemania"},
       {nombre: "Tesla", area: "Electricidad", nacio: 1856, pais: "Imperio Austro Húngaro"},
       {nombre: "Ada Lovelace", area: "Matemática", nacio: 1815, pais: "Inglaterra"},
       {nombre: "Lola Mora", area: "Escultura", nacio: 1866, pais: "Argentina"},
    ];

    console.log(personalidades);
</code>
</pre>
`;

otroEjemplo.innerHTML = ejemplo;

// filtrar por año

const filtrarPorAnio = document.querySelector("#filtrarAnio");
let filter = `
<pre>
<code>
    // Filtrar por año los que nacieron luego de 1850
    // con filter itera sobre todos los elementos

    personalidades.filter(personalidad => {
       console.log(personalidad); 
    });

    // Ahora vamos a filtrar los que el año de nacimiento
    // sea mayor a 1850

    const mayores = personalidades.filter(personalidad => {
       return personalidad.nacio > 1850;
    });

    console.log(mayores);
</code>
</pre>
`;

filtrarPorAnio.innerHTML = filter;

// Extraer datos

const extraerDatos = document.querySelector("#extraer");
let extraerDat = `
<pre>
<code>
    // Queremos traer los datos de Tesla

    const tesla = personalidades.find(personalidad => {
       return personalidad.nombre === "Tesla";
    });

    console.log("Nikola tesla se dedicó al área de " + tesla.area);
</code>
</pre>
`;

extraerDatos.innerHTML = extraerDat;

// reduce

const reduceA = document.querySelector("#reduce");
let reduce = `

<pre>
<code>
    let total_anios = personalidades.reduce((anios_total, personalidad) => {
       return anios_total + personalidad.nacio;
    }, 0);

    console.log ("Si sumamos los años de nacimiento de todxs nos da " + total_anios );
    console.log("El año promedio de nacimiento es " + (total_anios/personalidades.length));
</code>
</pre>
`;

reduceA.innerHTML = reduce;