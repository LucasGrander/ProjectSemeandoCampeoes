import { db } from '../database/db.js'

// ----------------------------    FILTROS PARA BUSCAR PARTICIPANTES      ---------------------------------------------

export const filterParticipantes = (req, res) => {
    let comboFilters =
    `
    select
    p.nome,
    p.data_de_nascimento,
    p.telefone,
    p.responsavel,
    ct.nome as centro_de_treinamento,
    f.cor_da_faixa 
    from participante p
    join faixa f 
        on p.id_faixa = f.id 
    join centro_de_treinamento ct 
        on p.id_centro_de_treinamento = ct.id 
    where 1 = 1
    `

    const params = []

    // Filtrar nome -->
    if (req.query.nome) {
        comboFilters += " AND p.nome LIKE ?"
        params.push(`%${req.query.nome}%`)
    }

    // Filtrar cor de faixa -->
    if (req.query.corFaixa) {
        const faixas = req.query.corFaixa.split(',').map(faixa => faixa.trim())
        comboFilters += " AND f.cor_da_faixa IN (?)"
        params.push(faixas)
    }

    // Filtrar centro de treinamento -->
    if (req.query.centroTreinamento) {
        comboFilters += " AND ct.nome = ?"
        params.push(req.query.centroTreinamento)
    }

    db.query(comboFilters, params, (err, data) => {
        if (err) {
            console.log("Erro ao buscar participante(s)")
            return res.status(500).json(err)
        } else {
            console.log("Participante(s) filtrados com sucesso")
            return res.status(200).json(data)
        }
    })
}