// funcion Base

const definicionFuncion = document.querySelector("#definicion");
let defFun = `
<pre>
    <code>
    // Primero se define</span>
    function hola() {
        console.log("Acá la función hola");
    };

    // Luego se llama a la función
    hola();
    </code>
</pre>
`;


// retorno

definicionFuncion.innerHTML = defFun;

const retornoFuncion = document.querySelector("#retorno");
let retFun = `
<pre>
    <code> > Acá la función hola </code>
</pre>
`;

retornoFuncion.innerHTML = retFun;


// asignar la función a una variable

const funcionEnVariable = document.querySelector("#funcionVariable");
let funVar = `
<pre>
    <code>
    let alumno = function(apellido) {
    console.log("Alumno apellido ___", apellido);
    }
    alumno(Cimino");
    </code>
</pre>
`;

funcionEnVariable.innerHTML = funVar;


// retorno funcion en variable

const retornoFunVar = document.querySelector("#retornoFuncion");
let varFun = `
<pre>
    <code>
    > Alumno apellido Cimino.
    </code>
</pre>
`;

retornoFunVar.innerHTML = varFun;
