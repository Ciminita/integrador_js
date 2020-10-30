// Object contructor

const constructor = document.querySelector("#objConstructor");
let objCons= `
<pre>
<code>
    function Guerrero(nombre, bando, locacion){
    this.nombre = nombre;
    this.bando = bando;
    this.locacion = locacion;
    }
    
    const protagonista1 = new Guerrero('Uthred', 'Sajones', 'Bebbanbourg');
    const protagonista2 = new Guerrero('Kanut', 'Vikingo');

    console.log (protagonista1);
    console.log (protagonista2);
    
    // Accediendo a los valores
    console.log(protagonista1.nombre);
</code>
</pre>
`;

constructor.innerHTML = objCons;

// retorno

const retornoConstructor= document.querySelector("#retornoConstructor");
let retornoC = `
<pre>
<code>
    > Guerrero
        nombre: "Uthred"
        bando: "Sajones"
        locacion: "Bebbanbourg"
        
        
    > Guerrero
        nombre: "Kanut"
        bando: "Vikingo"
        locacion: undefined
        
</code>
</pre>
`;

retornoConstructor.innerHTML = retornoC;
