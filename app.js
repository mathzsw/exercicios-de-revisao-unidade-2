const express = require("express");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");

const db = require("./db");
const Estudante = require("./models/Estudante");

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended:true }));
app.use(methodOverride("_method"));

db.sync();

app.get("/", async(req, res) => {

    const Estudantes = await Estudante.FindAll({
        raw: true
    });

    res.render("listarEstudantes", {
        estudantes
    });
});

app.get("/estudantes/create", (req, res) => {

    res.render("cadastrarEstudante");

});

app.post("/estudantes/" async(req, res) => {

    await = Estudante.create({
        nome: req.body.nome,
        idade: req.body.idade
    });

    res.redirect("/");
});

app.delete("/estudades/:id" async (req, res) =>{

    await = Estudante.destroy({

        where: {
            id: req.params.id
        }
    });

    res. redirect("/");
});

app.get("/estudantes/:id/edit", async (req, res) => {

    const Estudante = await Estudante.findOne({
        where: {
            id: req.params.id
        },

        raw: true
    });

    res.render("editarEstudante", {
        estudante
    })
});

app.put("/estudante/:id", async(req, res) => {
    await Empresa.update(

        {
            nome: req.body.nome,
            idade: req.body.idade
        },

        {
            where: {
                id: req.params.id
            }
        }
    );

    res.redirect("/");
});