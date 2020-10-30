// Forma tradicional

const formaTradicional = document.querySelector("#tradicional");
const pintor = '${pintor}';
let formaT = `
<pre>
<code>
    tradicional = function(pintor){
        console.log('Mi pintor favorito es ${pintor}');
    }
    tradicional("Michelangelo Buonarotti");
</code>
</pre>
`;

formaTradicional.innerHTML = formaT;

// retorno

const retornoTradicional = document.querySelector("#retornoTradicional");
let retornoT = `
<pre>
<code> 
    > Mi pintor favorito es Michelangelo Buonarotti 
</code>
</pre>
`;

retornoTradicional.innerHTML = retornoT;

// aplicando arrow function

const aplicandoArrow = document.querySelector("#funcionArrow");
let arrow = `
<pre>
<code>
    // La función pierde el nombre y se manda solo el parámetro</span>
    // si es un solo parámetro, puede ir sin paréntesis</span>
    let obra = pintor => {
        return 'Mi pintor favorito es <span class="referencia">${pintor};
    }
   
    // Opcion 1
    let favorito = obra("Álvaro Castagnet");
    console.log(favorito); 
    
    // Opcion 2
    console.log(obra("Leonardo da Vinci"));
</code>
</pre>
`;

aplicandoArrow.innerHTML = arrow;

// retorno

const retornoArrow = document.querySelector("#retorno");
let arrowRetorno = `
<pre>
<code>
    > Mi pintor favorito es Álvaro Castagnet
    > Mi pintor favorito es Leonardo da Vinci
</code>
</pre>
`;

// arrow function simplificada 

const simplificacionArrow = document.querySelector("#simplificacion");
let eleccion = '${eleccion}';
let simplicada = `
<pre>
<code>
    // para hacer más simple, se sacan las llaves</span>
    let ciudad_favorita = eleccion => console.log('Me encantaría vivir en ${eleccion});
    
    // Opcion 1</span>
    ciudad_favorita("Roma");
    
   // Opcion 2
   let elegida = ciudad_favorita("Florencia");
</code>
</pre>
`;

simplificacionArrow.innerHTML = simplicada;

// retorno

const retornoSimplificada = document.querySelector("#retSim");
let retornoS = `
<pre>
<code>
    > Me encantaría vivir en Roma
    > Me encantaría vivir en Florencia
</code>
</pre>
`;

retornoSimplificada.innerHTML = retornoS;

// arrow function con variantes
const funcionVariante = document.querySelector("#funVar");
let eleccion1 = "${eleccion1}";
let eleccion2 = "${eleccion2}";
let variante = `
<pre>
<code>
    // Si van más de un parámetro, tenemos que poner un paréntesis
    let favorita_city = (eleccion1, eleccion2) => console.log ('Me encantaría vivir en ${eleccion1} o en ${eleccion2});
    
    favorita_city("Estambul", "Venecia");
</code>
</pre>
`;

funcionVariante.innerHTML = variante;

// retorno variante

const retornoVariante = document.querySelector("#variante");
let retornoV = `
<pre>
<code> 
    > Me encantaría vivir en Estambul o en Venecia
</code>
</pre>
`;

retornoVariante.innerHTML = retornoV;
