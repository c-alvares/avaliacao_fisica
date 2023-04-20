const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Avaliacao = require('../model/avaliacao.model')

const iniciar = async (req, res) => {
	res.render('index');
};

const modelarFicha = (ficha) => {
    for (let i = 0; i < ficha.length; i++)
        ficha[i] = new Avaliacao(ficha[i], "ler")
    return ficha
}

const create = async (req, res) => {

    let dadosPaciente = await prisma.paciente.create({
        data: new Avaliacao(req.body, "criar")
    })
    res.redirect('/')
}

const read = async (req, res) => {
    let dadosPaciente = await prisma.paciente.findMany()
    res.render('index', { fichas: modelarFicha(fichas) })
}


const update = async (req, res) => {
    let dadosPaciente = await prisma.paciente.update({
        data: new Avaliacao(req.body, "alterar"),
        where: {
            id: Number(req.body.id)
        }
    });
    res.redirect('/')
}

const del = async (req, res) => {
    let dadosPaciente = await prisma.paciente.delete({
        where: {
            id: Number(req.params.id)
        }
    });
    res.redirect('/')
}

module.exports = {
	iniciar,
    create,
    read,
    update,
    del,
    // calcIdade,
    // calcIMC,
    // calcDiagnostico
};
