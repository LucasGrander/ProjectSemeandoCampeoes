import { db } from '../database/db.js'

export const getUsers = (_, res) => {
    const sql =
    // `select a.id as id,
    // p.nome as nome,
    // p.data_de_nascimento as data_de_nascimento,
    // p.telefone as telefone,
    // p.responsavel as responsavel,
    // ct.nome as centro_treino,
    // f.cor_da_faixa as faixa
    // from pessoa p 
    // left join professor pf on p.id = pf.id_pessoa
    // left join aluno a on p.id = a.id_pessoa
    // left join faixa f on a.id_faixa = f.id 
    // left join centro_de_treinamento ct on p.id_centro_de_treinamento = ct.id`

//     `SELECT 
//     CASE 
//         WHEN a.id IS NULL THEN pf.id
//         WHEN pf.id IS NULL THEN a.id
//         ELSE a.id  -- ou pf.id, dependendo de qual deseja priorizar
//     END AS id,
//     p.nome AS nome,
//     p.data_de_nascimento AS data_de_nascimento,
//     p.telefone AS telefone,
//     p.responsavel AS responsavel,
//     ct.nome AS centro_treino,
//     CASE 
//         WHEN f.cor_da_faixa IS NULL THEN ff.cor_da_faixa
//         WHEN ff.cor_da_faixa IS NULL THEN f.cor_da_faixa
//         ELSE f.cor_da_faixa  -- ou ff.cor_da_faixa, dependendo de qual deseja priorizar
//     END AS faixa
// FROM 
//     pessoa p 
// LEFT JOIN 
//     professor pf ON p.id = pf.id_pessoa
// LEFT JOIN 
//     aluno a ON p.id = a.id_pessoa
// LEFT JOIN 
//     faixa f ON a.id_faixa = f.id
// LEFT JOIN 
//     faixa ff ON pf.id_faixa = ff.id
// JOIN 
//     centro_de_treinamento ct ON p.id_centro_de_treinamento = ct.id;
// `

    `select * from pessoa`

    db.query (sql, (err, data)=> {
        if(err){
            console.log("Erro ao processar a requisição.", err)
            return res.status(500).json(data)
        }
        else{
            console.log("Dados dos usuários obtidos com sucesso.")
            return res.status(200).json(data)
        }
    })
}

export const addUsers = (req, res) => {
    const sql =
    `insert into pessoa (nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_endereco) values (?, ?, ?, ?, ?, ?)`;

    const { nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_endereco } = req.body;

    db.query(sql, [nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_endereco], (err, data) => {
        if (err) {
            console.log("Erro ao processar a requisição");
            return res.status(500).json(err);
        } else {
            console.log("Requisição bem sucedida!");
            return res.status(201).json(data);
        }
    });
}

export const updateUsers = (req, res) => {
    const sql =
    `update pessoa
    set nome = ?,
    data_de_nascimento = ?,
    telefone = ?,
    responsavel = ?
    id_centro_de_treinamento = ?
    id_endereco = ?
    where id = ?`

    const {nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_endereco, id} = req.body;


    db.query(sql, [nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_endereco, id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição")
            return res.status(500).json(err)
        }
        else{
            console.log("Dados do usuário alterados com sucesso")
            return res.status(200).json(data)
        }
    })
}

export const deleteUsers = (req, res) => {
    const sql = "delete from aluno where id = ?";

    const { id } = req.query;

    db.query(sql, [id], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição")
            return res.status(500).json(err)
        }
        else{
            console.log("Dados do usuário remo com sucesso")
            return res.status(200).json(data)
        }
    })
}