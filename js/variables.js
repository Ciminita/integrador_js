// definicion
const js = document.querySelector('#js');
let variables = ''

variables += `
<pre>
<code>
    // Variable
    var saludo = "Hola";
    
    // Let
    let num = "14";
    
    // Constante
    const bicicleta = "Playera";
</code>
</pre>
`;

js.innerHTML = variables;


// diferencias

const diferenciasContenedor = document.querySelector("#diferencias");
let diferenciasHTML = '';

diferenciasHTML += `
<pre>
<code>
    var auto = Ferrari";
    let moto = "Ducati";
    
    if (auto) {
        var auto = "Porsche";
        console.log ('Adentro del if: ', auto);
    };
    console.log ('Afuera del if:', auto);
    
    if (moto) {
        let moto = "Yamaha";
        console.log ('Adentro del if: ', moto);
    };
    
    console.log ('Afuera del if:', moto);

</code>
</pre>
`;
diferenciasContenedor.innerHTML = diferenciasHTML;

// rtorno

const diferenciasRetornoContenedor = document.querySelector("#retorno");
let retornoDiferenciasHTML = '';

retornoDiferenciasHTML += `
<pre>
<code>
    > Dentro del if:  Porsche
    > Fuera del if: Porsche
    > Dentro del if:  Yamaha
    > Fuera del if: Ducati
</code>
</pre>
`;

diferenciasRetornoContenedor.innerHTML = retornoDiferenciasHTML;