// Iniciamos la segunda parte con 
// Object Destructuring

const ObjDestructurin = document.querySelector("#objDestructurin");
let primeraComputadora = '${primeraComputadora}';
let deseada = '${deseada}';
let ObjDestruc = `
<pre>
<code>
    const computadorasOchentosas = {
    sinclair: {
        inicial: "zx-81",
        evolucion: "spectrum",
        final: "2068"
    },
    otras: ["Commodore 64", "Atari Amiga", "Texas TI-99 4A"]
    }

    // Acá vemos cómo se ha definido el objeto
    console.log (computadorasOchentosas);

    // Y accedemos

    let primeraComputadora = computadorasOchentosas.sinclair.inicial;
    let deseada = computadorasOchentosas.otras[0];

    console.log('Mi primera computadora fue una ${primeraComputadora} y todos deseábamos
    la ${deseada}');
</code>
</pre>
`;

ObjDestructurin.innerHTML = ObjDestruc;

// retorno forma clasica

const retornoDestruc = document.querySelector("#retornoDestruc");
let retornoD = `
<pre>
<code>
    > Object
        > otras: (3) ["Commodore 64", "Atari Amiga", "Texas TI-99 4A"]
        > sinclair: {inicial: "zx-81", evolucion: "spectrum", final: "2068"}
        > __proto__: Object
    > Mi primera computadora fue una zx-81 y todos deseábamos la Commodore 64
</code>
</pre>
`;

retornoDestruc.innerHTML = retornoD;

// Con Object Destructuring

const conObjDestruc = document.querySelector("#conObj");
let inicial ='<span class="referencia">${inicial}</span>';
let conObj= `
<pre>
<code>
    let{inicial} = computadorasOchentosas.sinclair;
    console.log('Esto es usando Object Destructuring y traigo ${inicial}');
</code>
</pre>
`;

conObjDestruc.innerHTML = conObj;

// retorno con destructurin

const retornoConObj = document.querySelector("#retornoConObj");
let retornoCon= `
<pre>
<code>
    > Esto es usando Object Destructuring y traigo zx-81
</code>
</pre>
`;

retornoConObj.innerHTML = retornoCon;

