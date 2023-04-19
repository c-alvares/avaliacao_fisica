const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const iniciar = async (req, res) => {
	res.render("index");
};

const create = async (req, res) => {
    let parse = {
        nome_completo: req.body.nome_completo,
        nascimento: new Date(req.body.nascimento),
        peso: Number(req.body.peso),
        altura: Number(req.body.altura)
    }
    let dadosPaciente = await prisma.paciente.create({
        data: parse
    })
    res.status(201).json(dadosPaciente).end();
    // res.redirect('/?msg=OS criada com sucesso!')
}

const read = async (req, res) => {
    let dadosPaciente = await prisma.paciente.findMany()

    // let IMC = dadosPaciente.peso / (dadosPaciente.altura * dadosPaciente.altura);
    res.status(200).json(dadosPaciente).end();
}

const filter = async (req, res) => {
    let dadosPaciente = await prisma.paciente.findMany()

    let filtro = dadosPaciente.filter((paciente) => {
        let imc = paciente.peso / (paciente.altura * paciente.altura) < 25
        return imc
    })
    res.status(200).json(filtro).end();
}

const update = async (req, res) => {
    let parse = {
        nome_completo: req.body.nome_completo,
        nascimento: new Date(req.body.nascimento),
        peso: Number(req.body.peso),
        altura: Number(req.body.altura),
    }
    let dadosPaciente = await prisma.paciente.update({
        data: parse,
        where: {
            id: Number(req.params.id)
        }
    });
    // res.redirect('/?msg=Os alterada!')
    res.status(200).json(dadosPaciente).end()
}

const del = async (req, res) => {
    let dadosPaciente = await prisma.paciente.delete({
        where: {
            id: Number(req.params.id)
        }
    });
    // res.redirect('/?msg=OS excluída com sucesso!')
    res.status(200).json("Paciente excluído com sucesso").end()
}

module.exports = {
	iniciar,
    create,
    read,
    filter,
    update,
    del,
    // calcIdade,
    // calcIMC,
    // calcDiagnostico
};
