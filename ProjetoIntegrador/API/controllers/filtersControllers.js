import { db } from '../database/db.js'

// ----------------------------    FILTROS PARA BUSCAR PARTICIPANTES      ---------------------------------------------

export const filterParticipantes = (req, res) => {
    let comboFilters =
    `
    select
    p.id,
    f.id as fid,
    ct.id as cdtid,
    p.nome,
    p.data_de_nascimento,
    p.telefone,
    p.responsavel,
    ct.nome as centro_de_treinamento,
    f.cor_da_faixa,
    e.bairro,
    e.rua,
    e.numero,
    c.nome_cidade
    from participante p
    join faixa f 
        on p.id_faixa = f.id 
    join centro_de_treinamento ct 
        on p.id_centro_de_treinamento = ct.id 
    join endereco e 
        on p.id_endereco = e.id
    join cidade c 
        on e.id_cidade = c.id
    where 1 = 1
    `

    const params = []

    // Filtrar nome -->
    if (req.query.nome) {
        comboFilters += " and p.nome like ?"
        params.push(`${req.query.nome}%`)
    }

    // Filtrar cor de faixa -->
    if (req.query.cor_da_faixa) {
        comboFilters += " and f.cor_da_faixa like ?"
        params.push(`%${req.query.cor_da_faixa}%`)
    }

    // Filtrar centro de treinamento -->
    if (req.query.centro_de_treino) {
        comboFilters += " and ct.nome = ?"
        params.push(req.query.centro_de_treino)
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