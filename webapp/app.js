require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const methodOverride = require("method-override");

const app = express();

app.use(express.json())

const routes = require('./src/routes/routes')
app.set('view engine', 'pug')
	.use(express.urlencoded({ extended: true }))
	.use(express.static("public"))
	.use(methodOverride("_method"))
	.use('/', routes)
app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));

// Para renderizar é só colocar no navegador http://localhost:3000/