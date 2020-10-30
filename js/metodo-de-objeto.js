// creando metodos

const metodosObj = document.querySelector("#metodosObj");
let nombre = '${this.nombre}';
let titulo = '${this.titulo}';
let arma = '${this.arma}';

let metodosObjetos = `
<pre>
<code>
    const obiWan = {
       nombre: "Obi Wan Kenobi",
       titulo: "Master Jedi",
       armado: true,
       arma: "Sable laser",
       descripcion(){
         console.log('El personaje ${this.nombre} es ${this.titulo} y está armado con ${this.arma}');
    }
 } 

    obiWan.descripcion();
</code>
</pre>
`;

metodosObj.innerHTML = metodosObjetos;

// retorno metodos

const retornoMetodos = document.querySelector("#retornoMetodos");
let retornoMet = `
<pre>
<code>
    > El personaje Obi Wan Kenobi es Master Jedi y está armado con Sable laser
</code>
</pre>
`;

retornoMetodos.innerHTML = retornoMet;