const express = require("express");
const router = express.Router();

const paciente = require("../controllers/paciente.controller");

router.get('/,', paciente.iniciar)

router.post('/create', paciente.create);
router.get('/read', paciente.read);
router.get('/filter', paciente.filter);
router.put('/update/:id', paciente.update);
router.delete('/del/:id', paciente.del);
// router.get('/calcidade', paciente.calcIdade);
// router.get('/calcim', paciente.calcIMC);
// router.get('/calcdiagnostico', paciente.calcDiagnostico);


module.exports = router;
