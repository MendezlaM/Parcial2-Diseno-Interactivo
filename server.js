const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

const personajes = [

    {
        id: 1,
        name: "Goku",
        ki: "60.000.000",
        maxKi: "90 Septillion",
        race: "Saiyan",
        gender: "Male",
        description: "El protagonista de Dragon Ball.",
        image: "https://dragonball-api.com/characters/goku_normal.webp",
        affiliation: "Z Fighter"
    },

    {
        id: 2,
        name: "Vegeta",
        ki: "54.000.000",
        maxKi: "19.84 Septillion",
        race: "Saiyan",
        gender: "Male",
        description: "El principe de los Saiyans.",
        image: "https://dragonball-api.com/characters/vegeta_normal.webp",
        affiliation: "Z Fighter"
    },

    {
        id: 3,
        name: "Piccolo",
        ki: "2.000.000",
        maxKi: "500.000.000",
        race: "Namekian",
        gender: "Male",
        description: "Guerrero Namekiano y miembro de los Guerreros Z.",
        image: "https://dragonball-api.com/characters/picolo_normal.webp",
        affiliation: "Z Fighter"
    },

    {
        id: 4,
        name: "Gohan",
        ki: "45.000.000",
        maxKi: "40 septillion",
        race: "Saiyan",
        gender: "Male",
        description: "Hijo de Goku y uno de los guerreros más importantes.",
        image: "https://dragonball-api.com/characters/gohan.webp",
        affiliation: "Z Fighter"
    },

    {
        id: 5,
        name: "Bulma",
        ki: "0",
        maxKi: "0",
        race: "Human",
        gender: "Female",
        description: "Una de las mejores amigas de Goku.",
        image: "https://dragonball-api.com/characters/bulma.webp",
        affiliation: "Z Fighter"
    }

];

app.get("/api/personajes", (req, res) => {

    res.json(personajes);

});

app.get("/api/personajes/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const personaje = personajes.find(
        p => p.id === id
    );

    if (!personaje) {

        return res.status(404).json({
            mensaje: "Personaje no encontrado"
        });

    }

    res.json(personaje);

});

app.listen(PORT, () => {

    console.log(`API funcionando en http://localhost:${PORT}`);

});