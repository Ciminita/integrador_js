// simulada

const promiseSimulada = document.querySelector("#simulada");
let simulada = `
<pre>
<code>
    let darDeBaja = new Promise((resolve, reject) => {
    // Para simular una consulta
    // con timeout y error 
    
    setTimeout(() => {
        let baja = true;

        if (baja) {
            resolve("Se ha dado de baja");
        } else {
            reject("No se ha podido dar de baja");
        }
    }, 2500);
  });

    console.log (darDeBaja);
</pre>
`;

promiseSimulada.innerHTML = simulada;

// Simulada 2

const promiseSimulada2 = document.querySelector("#simulada2");
let simulada2 = `
<pre>
<code>
    darDeBaja.then(resultado_consulta => {
       console.log(resultado_consulta);
    })
</code>
</pre>
`;

promiseSimulada2.innerHTML = simulada2;

// ejemplo real

const ejemploReal = document.querySelector("#real");
let cantidad = '${cantidad}';
let real = `
<pre>
<code>
    const traerUsers = cantidad => new Promise((resolve, reject) => {

    // Vamos por partes
    // Primero la url de la api

    const url = 'https://randomuser.me/api/?results=${cantidad}&nat=us';

    // Segundo el llamado a AJAX
    const xhr = new XMLHttpRequest();

    // Tercero, abrimos la conexión
    // El "true" es si es síncrono

    xhr.open('GET', url, true);

    // Cuarto, estamos ya trayendo los registros
    // El 200 es el código que todo salió bien
    // El "results" viene del JSON de la API.
    // esta es la parte más compleja.

    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            reject(Error(xhr.statusText));
        };
    };

    // Quinto opcional - On Error
    xhr.onerror = (error) => reject(error);

    // Quinto o sexto, parte final, enviarlo
    xhr.send();
    });

    // Y armamos todo para sacarlo por la consola

    traerUsers(15).then(
      usuarios => console.log(usuarios),
      error => console.error(
        new Error("Se produjo el error" + error),
    )
    );
</code>
</pre>
`;

ejemploReal.innerHTML = real;


// recorrer array

const recorrerArray = document.querySelector("#recorrer");
let name = '${registro.name.first}';
let lastName = '${registro.name.last}';
let pais = '${registro.nat}';
let img = '${registro.picture.medium}';
let recorrer = `

<pre>
<code>
    traerUsers(10).then(
      registros => generarHTML(registros),
      error => console.error(
        new Error("Se produjo el error" + error),
    )
    );

    // Ahora defino la generarlHTML

    function generarHTML(registros) {
       let html_generado = "";    
        registros.forEach(registro => {
        console.log(registro);
        html_generado += '
            <li>
            <b>
                Nombre: ${registro.name.first} ${registro.name.last}
            </b>   
                País: ${registro.nat}
                Imagen:
                    <img src="${registro.picture.medium}" />
            </li>
            ';

    // Acordarse de la lógica "dónde lo ubico, qué ubico"
    const contenedorAPI = document.querySelector('#app_api');
    contenedorAPI.innerHTML = html_generado;         
    })
</code>
</pre>
`;

recorrerArray.innerHTML = recorrer;