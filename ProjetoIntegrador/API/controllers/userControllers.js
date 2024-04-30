import { db } from '../database/db.js'

export const getUsers = (_, res) => {
    const sql = "select a.id as id, p.nome as nome, f.cor_da_faixa as faixa from aluno a join pessoa p on a.id_pessoa = p.id join faixa f on a.id_faixa = f.id "

    db.query (sql, (err, data)=> {
        if(err){
            console.log("Erro ao processar a requisição.")
            return res.status(500).json(data)
        }
        else{
            console.log("Dados dos usuários obtidos com sucesso.")
            return res.status(200).json(data)
        }
    })
}

export const addUsers = (req, res) => {
    const sql = "insert into aluno (id, id_pessoa, id_faixa) value (?, ?, ?)"

    const {id, id_pessoa, id_faixa} = req.body

    db.query(sql, [id, id_pessoa, id_faixa], (err, data) => {
        if(err){
            console.log("Erro ao processar a requisição")
            return res.status(500).json(err)
        }
        else{
            console.log("Requisição bem sucedida!")
            return res.status(201).json(data)
        }
    })
}

export const updateUsers = (req, res) => {
    const sql = "update aluno set id_pessoa = ?, id_faixa = ? where id = ?"

    const {id_pessoa, id_faixa, id } = req.body;

    db.query(sql, [id_pessoa, id_faixa, id ], (err, data) => {
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
    const sql = "delete from pessoa where id = ?";

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