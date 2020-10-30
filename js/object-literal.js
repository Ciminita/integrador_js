
const literal = document.querySelector("#objLiteral");
let objLit= `

<pre>
    <code>
    // Definición de un objeto 
    const deportista = {
        nombre: "Valentino",
        deporte: "Motociclismo"
    };

    // Esto es una definición de algo que no tiene objeto
    let nombreDeportista = "Collin Mc Rae";
    let nombreDeporte = "rally";

    // Mirar las diferencias en la consola, 
    // Cómo los muestra diferentes.
    console.log(deportista);
    console.log(nombreDeportista);
    console.log(nombreDeporte);
    </code>
</pre>

`;

literal.innerHTML = objLit;

// retorno

const retornoLiteral= document.querySelector("#retornoLiteral");
let retornoLit = `
<pre>
<code>
    > Object
        deporte: "Motociclismo"
        nombre: "Valentino"
       
    > Collin Mc Rae
    > rally
</code>
</pre>
`;
retornoLiteral.innerHTML = retornoLit;


const accederAvalores = document.querySelector("#accediendo");
let accederValores = `
<pre>
<code>
    // Para acceder a los valores del objeto
    console.log("Accediendo a los valores del objeto");
    console.log(deportista.nombre);
    console.log(deportista.deporte);

    // Otra manera de acceder 
    console.log(deportista['nombre']);
</code>
</pre>
`;
accederAvalores.innerHTML = accederValores;

const retornoValor = document.querySelector("#retornoValor")
let retornoVal = `
<pre>
<code>
    > Valentino
    > Motociclismo
    > Valentino
</code>
</pre>
`;
retornoValor.innerHTML = retornoVal;

// otro deportista

const otroObjeto = document.querySelector("#otroObjeto");
let otroObj = `
<pre>
<code>
    const deportista_otro = {
    nombre: "Cristiano Ronaldo",
    deporte: "Fútbol"
    };

    console.log("Accediendo a los valores del objeto");
    console.log(deportista_otro.nombre);
    console.log(deportista_otro.deporte);
</code>
</pre>
`;

otroObjeto.innerHTML = otroObj;

// retorno 

const retornoObj = document.querySelector("#retornoObj");
let objRetorno = `
<pre>
<code>
    > Cristiano Ronaldo
    > Fútbol
</code>
</pre>
`;

retornoObj.innerHTML = objRetorno;