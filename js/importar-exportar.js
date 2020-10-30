
// Exportar

const exportar = document.querySelector("#exportar");
let anio ='<span class="referencia">${anio}</span>';
let circunstancia ='<span class="referencia">${circunstancia}</span>';
let marca ='<span class="referencia">${this.marca}</span>';
let pais ='<span class="referencia">${this.pais}</span>';
let expor = `

<pre>
<code>
    export const materia = "Construcción de Interfases de Usuario";

    // También hay una exportación por default
    // que no requiere mantener el nombre

    const universidad = "Universidad Nacional de Hurlingham";
    export default universidad;

    // Claro que puedo exportar un objeto

    export const diaClase = {
       dia: "Jueves",
       hora: "18:00"
    };

    // Y una función entera

    export const recordar = (anio, circunstancia) => {
       return 'El año ${anio} será recordado por ${circunstancia}';
    };

    // Y por supuesto una clase también!

    export class Auto { constructor (marca, pais) {
       this.marca = marca;
       this.pais = pais
    }
    };

    // Y por supuesto la clase con método 

    export class Moto { constructor (marca, pais) {
       this.marca = marca;
       this.pais= pais
    }

    describir() {
    return 'La moto ${this.marca} es originaria de ${this.pais}';
    }
    };
</code>
</pre>
`;

exportar.innerHTML = expor;

// importar

const importar = document.querySelector("#importar");
let importarr = `

<pre>
<code>
    // Primero realizamos los import que deseemos

    import {materia} from './exportar.js';
    import miFacu from './exportar.js';
    import {diaClase} from './exportar.js';
    import {recordar} from './exportar.js';
    import {Auto} from './exportar.js';
    import {Moto} from './exportar.js';

    // Acá imprimo la variable que traje con el mismo nombre
    console.log(materia);

    // Y acá importé el default, por eso puedo poner el nombre que quiera}
    console.log(miFacu);

    // Imprimo el objeto importado
    console.log(diaClase);

    // Uso una función importada
    const anioActual = recordar("2020", "pandemia");
    console.log(anioActual);

    // Y una clase también
    const auto1 = new Auto("Ferrari", "Italia");
    console.log(auto1);

    // Y por supuesto una clase con método
    const moto1 = new Moto("Ducati", "Italia");
    const salida = moto1.describir();
    console.log(salida);
</code>
</pre>
`;

importar.innerHTML = importarr;


// retorno importar

const retornoImportar = document.querySelector("#retornoImportar");
let retornoImport = `
<pre>
<code>
    > Construcción de Interfases de Usuario
    > Universidad Nacional de Hurlingham
    > {dia: "Jueves", hora: "18:00"}
    > El año 2020 será recordado por pandemia
    > Auto {marca: "Ferrari", pais: "Italia"}
    > La moto Ducati es originaria de Italia
</code>
</pre>
`;

retornoImportar.innerHTML = retornoImport;