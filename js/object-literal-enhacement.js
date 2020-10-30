// forma antigua

const formaAntigua = document.querySelector("#formaAntigua");
let antigua = `
<pre>
<code>
    let director = "Quentin Tarantino";
    let genero = "Acción";
    let peliculas = ["Kill Bill", "Death Proof", "Jackie Brown"];

    // Hacerlo a la manera antigua

    const quentin = {
       nombre: director,
       genero: genero,
       pelis: peliculas
    };

    console.log(quentin);
</code>
</pre>
`;

formaAntigua.innerHTML = antigua;

// retorno forma antigua

const retornoFormaAntigua = document.querySelector("#retornoFormaAntigua");
let retornoAntigua = `
<pre>
<code>
    > Object
        genero: "Acción"
        nombre: "Quentin Tarantino"
        > pelis: (3) ["Kill Bill", "Death Proof", "Jackie Brown"]
</code>
</pre>
`;

retornoFormaAntigua.innerHTML = retornoAntigua;


// Ahora lo hacemos con OLE

const conOLE = document.querySelector("#conOLE");
let OLE = `
<pre>
<code>
    // Definimos las variables
    let director = "Quentin Tarantino";
    let genero = Acción";
    let peliculas = [Kill Bill", "Death Proof", "Jackie Brown"];
    
    // Unimos las variables al objeto con Object Literal Enhacement
    const quentin_ole = {director, genero, peliculas};
    console.log(quentin_ole);
</code>
</pre>
`;

conOLE.innerHTML = OLE;

// retorno con OLE

const retornoConOLE= document.querySelector("#retornoConOLE");
let retornoCon = `
<pre>
<code>
    > Object
        director: "Quentin Tarantino"
        genero: "Acción"
        > peliculas: (3) ["Kill Bill", "Death Proof", "Jackie Brown"]
</code>
</pre>
`;

retornoConOLE.innerHTML = retornoCon;
