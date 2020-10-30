//definimos

const definicionPrototipos = document.querySelector("#prototypes");
let nombre = '${this.nombre}';
let ocupacion = '${this.ocupacion}';
let prototipos = `
<pre>
<code>
    // Definimos un objeto mediante Object Constructor
    function Personaje(nombre, ocupacion){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
    }
    
    // Y armamos un Prototype para este objeto
    // anteponiendo su nombre y "prototype"
    Personaje.prototype.describirPersonaje = function(){
        return 'El personaje es ${nombre} y su ocupación es ${ocupacion}';
    }
    
    const personaje1 = new Personaje("Dr. Emmet Brown", Científico");
    const personaje2 = new Personaje("Marthy Mc Fly", "Viajero en el tiempo");
    
    // Accedemos a la construcción del objeto
    console.log (personaje1);
    console.log (personaje2);

    // Y acá accedemos a los datos a través del Prototype que creamos
   let doc = personaje1.describirPersonaje();
    console.log(doc);
    
    let marthy = personaje2.describirPersonaje();
    console.log(marthy);
</code>
</pre>
`;

definicionPrototipos.innerHTML = prototipos;

// retorno
const retornoPrototipos = document.querySelector("#retornoPrototypes");
let retornoP = `
<pre>
<code>
    > El personaje es Dr. Emmet Brown y su ocupación es Científico
    > El personaje es Marthy Mc Fly y su ocupación es Viajero en el tiempo
</code>
</pre>
`;

retornoPrototipos.innerHTML = retornoP;