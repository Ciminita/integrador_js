
const representacionString = document.querySelector("#string");
const nombre ="${nombre}";
const posicion ="${posicion}";
const numero = 10;
let strings = `

<pre>
<code>
    const nombre = "Maradona";
    const posicion = "10";

    // Primer caso
    console.log (nombre + " juega de " + posicion);

    // Segundo caso
    console.log ("${nombre} juega de ${posicion}" );

    // Tercer caso
    console.log ('${nombre} juega de ${posicion}');
</code>
</pre>
`;

representacionString.innerHTML = strings;

const retornoString = document.querySelector("#retorno");
let string = `
<pre>
<code> 
    // Nos devuelve un resultado correcto
    > Maradona juega de 10

    // Al usar comillas dobles, JavaScript nos convirtió todo a string
    > ${nombre} juega de ${posicion}

    // Resultado correcto al utilizar las comillas simples
    > Maradona juega de 10
</code>
</pre>
`;

retornoString.innerHTML = string;