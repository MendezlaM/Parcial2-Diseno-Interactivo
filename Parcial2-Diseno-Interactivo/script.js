async function buscarPersonaje() {

    let nombre = document.getElementById("nombrePersonaje").value.trim();

    let mensaje = document.getElementById("mensaje");
    let resultado = document.getElementById("resultado");

    if (nombre === "") {
        mensaje.textContent = "Escribe el nombre de un personaje.";
        return;
    }

    mensaje.textContent = "Buscando personaje...";

    try {

        let respuesta = await fetch(
            "http://localhost:3000/api/personajes"
        );

        let datos = await respuesta.json();

        console.log(datos);

        let personaje = datos.find(function(personaje) {

            return personaje.nombre.toLowerCase() === nombre.toLowerCase();

        });

        if (personaje) {

            mensaje.textContent = "¡Personaje encontrado!";

            resultado.innerHTML = `

                <div class="tarjeta">

                    <img 
                        src="${personaje.imagen}" 
                        alt="${personaje.nombre}"
                    >

                    <div class="informacion">

                        <h2>${personaje.nombre}</h2>

                        <p>
                            <strong>Raza:</strong>
                            ${personaje.raza}
                        </p>

                        <p>
                            <strong>Genero:</strong>
                            ${personaje.genero}
                        </p>

                        <p>
                            <strong>Ki:</strong>
                            ${personaje.ki}
                        </p>

                        <p>
                            <strong>Afiliacion:</strong>
                            ${personaje.afiliacion}
                        </p>

                    </div>

                </div>

            `;

        } else {

            mensaje.textContent =
                "No encontramos ese personaje.";

            resultado.innerHTML = "";

        }

    } catch (error) {

        console.error(error);

        mensaje.textContent =
            "No se pudo conectar con la API.";

        resultado.innerHTML = "";

    }
}