class Avaliacao {
    // @param id
    // @param nome_completo
    // @param nascimento
    // @param peso
    // @param altura
    constructor(i, motivo) {
        if (motivo == "ler") {
            this.id = Number(i.id)
            this.nome_completo = i.nome_completo
            this.nascimento = new Date(i.nascimento)
            this.peso = Number(i.peso)
            this.altura = Number(i.altura)
            this.imc = Number(this.calculoImc())
        }
        if (motivo == "criar") {
            this.nome_completo = i.nome_completo
            this.nascimento = new Date(i.nascimento)
            this.peso = Number(i.peso)
            this.altura = Number(i.altura)
        }
        if (motivo == "alterar") {
            this.nome_completo = i.nome_completo
            this.peso = Number(i.peso)
            this.altura = Number(i.altura)
        }
    }

    calculoImc() {

    }
}

module.exports = Avaliacao