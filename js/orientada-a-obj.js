//creacion

const creamosJugador = document.querySelector("#jugador");
let jugador= `
<pre>
<code>
    // Creamos un objeto y lo instanciamos varias veces

    class Jugador { constructor (nombre, posicion) {
        this.nombre = nombre;
        this.posicion = posicion
    }
  };

    let jugador1 = new Jugador("Lionel Messi", "10");
    let jugador2 = new Jugador("Cristiano Ronaldo", "7");
    let jugador3 = new Jugador("Franco Armani", "Arquero");

    console.log (jugador1);
    console.log (jugador2);
    console.log (jugador3);
</code>
</pre>
`;

creamosJugador.innerHTML = jugador;

// retorno 

const retornoJugador= document.querySelector("#retornoJugador");
let retornoJ= `
<pre>
<code>
    > Jugador
        nombre: "Lionel Messi"
        posicion: "10"

    > Jugador
        nombre: "Cristiano Ronaldo"
        posicion: "7"

    > Jugador
        nombre: "Franco Armani"
        posicion: "Arquero"
</code>
</pre>
`;

retornoJugador.innerHTML = retornoJ;

// creacion otro objetos

const otroObjeto = document.querySelector("#otroJugador");
let nombre ='${this.nombre}';
let posicion = '${this.posicion}';
let otroObj = `
<pre>
<code>
    // Esto lo podemos ver desplegando la estructura y fijándose en Prototypes
    // Antes solo figuraba la clase

    class JugadorLeyenda { constructor (nombre, posicion) {
        this.nombre = nombre;
        this.posicion = posicion
    }
    mostrar() {
        return 'La leyenda ${this.nombre} jugaba de ${this.posicion}';
    }
  };

    let jugadorLeyenda1 = new JugadorLeyenda("Diego Maradona", "El 10 eterno");
    console.log(jugadorLeyenda1);
    console.log (jugadorLeyenda1.mostrar());
</code>
</pre>
`;

otroObjeto.innerHTML = otroObj;

// retorno otro objeto

const retornoOtro = document.querySelector("#retornoOtroJugador");
let retornoOtroJ = `
<pre>
<code>
    > JugadorLeyenda
        nombre: "Diego Maradona"
        posicion: "El 10 eterno"
        
    > La leyenda Diego Maradona jugaba de El 10 eterno
</code>
</pre>
`;

retornoOtro.innerHTML = retornoOtroJ;

// extends

const extendsJugador = document.querySelector("#extendsJugador");
let epoca ='${this.epoca}';
let extendsJ = `
<pre>
<code>
    // Ojo en la construcción, no hay que traer todos los this.sarasa porque te va a dar error
    // Se superponen con "super" y luego se agregan los que querramos.


    class JugadorFracasado extends JugadorLeyenda {
    constructor(nombre, posicion, epoca) {
        super(nombre, posicion);
        this.epoca = epoca
    };
    saludar(){
        return 'Hola ${this.nombre}, fracasado!. Te vi una vez ${this.epoca}.';
    }
  }

    //Creo una instancia de esta nueva clase
    let fracasado = new JugadorFracasado('Javier Castrillo', 'El último 11', 'en los 80');


    // Ya heredo los métodos
    console.log(fracasado.mostrar());

    // Y uso el nuevo 
    console.log(fracasado.saludar());
</code>
</pre>
`;

extendsJugador.innerHTML = extendsJ;

// retorno extends

const retornoExtends = document.querySelector("#retornoExtends");
let retornoExt = `
<pre>
<code>
    > La leyenda Javier Castrillo jugaba de El último 11
    > Hola Javier Castrillo, fracasado!. Te vi una vez en los 80.
</code>
</pre>
`;

retornoExtends.innerHTML = retornoExt;