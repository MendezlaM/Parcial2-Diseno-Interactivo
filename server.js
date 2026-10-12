const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;


// ruta para obtener todos los personajes
app.get("/api/personajes", async (req, res) => {

    try {

        // conectamos con la API oficial de Dragon Ball
        const respuesta = await fetch(
            "https://dragonball-api.com/api/characters?limit=100"
        );

        const datos = await respuesta.json();

        // convertimos los datos a español
        const personajes = datos.items.map(function(personaje) {

            return {

                id: personaje.id,

                nombre: personaje.name,

                ki: personaje.ki,

                kiMaximo: personaje.maxKi,

                raza: personaje.race,

                genero: personaje.gender,

                descripcion: personaje.description,

                imagen: personaje.image,

                afiliacion: personaje.affiliation

            };

        });

        res.json(personajes);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "No se pudieron obtener los personajes."

        });

    }

});


// ruta para buscar un personaje por ID
app.get("/api/personajes/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const respuesta = await fetch(
            `https://dragonball-api.com/api/characters/${id}`
        );

        if (!respuesta.ok) {

            return res.status(404).json({

                mensaje: "Personaje no encontrado."

            });

        }

        const personaje = await respuesta.json();

        const resultado = {

            id: personaje.id,

            nombre: personaje.name,

            ki: personaje.ki,

            kiMaximo: personaje.maxKi,

            raza: personaje.race,

            genero: personaje.gender,

            descripcion: personaje.description,

            imagen: personaje.image,

            afiliacion: personaje.affiliation

        };

        res.json(resultado);

    } catch (error) {

        console.error(error);

        res.status(500).json({

            mensaje: "Error al buscar el personaje."

        });

    }

});


// iniciar servidor
app.listen(PORT, () => {

    console.log(
        `API funcionando en http://localhost:${PORT}`
    );

});