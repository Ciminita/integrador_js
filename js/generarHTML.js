// forma tradicional

const formaTradicional= document.querySelector("#formaTradicional");
let deporte ='${deporte}';
let tradicional = `

<pre>
<code>
    let deportes_olimpicos = ["Remo", "Atletismo", "Lucha Libre", "Tenis de mesa"];

    // Vemos el array
    console.log(deportes_olimpicos);

    // Defino un contenedor, lo apunto según el id que le puse en el documento html
    const contenedor = document.querySelector("#app");

    // Defino el contenido, primero como una cadena vacía
    let html = '';

    // Y luego creo la cadena, iterando sobre el array
    // Hay varias maneras, (while - for)
    // Vamos a usar por ejemplo el forEach
    // Itera sobre los elementos del array y la variable "deporte" va tomando el valor
    // de esos elementos.

    deportes_olimpicos.forEach(deporte => {
       html += '<li>${deporte}</li>';
    });

    // Y luego lo "renderizamos" con innerHTML
    contenedor.innerHTML = html;
</code>
</pre>
`;

formaTradicional.innerHTML = tradicional;

// utilizando map

const formaMap = document.querySelector("#formaMap");
let map = `
<pre>
<code>
    deportes_olimpicos.map(deporte => {
       console.log("El deporte es " + deporte);
    });
</code>
</pre>
`;

formaMap.innerHTML = map;


