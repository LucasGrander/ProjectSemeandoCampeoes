import { db } from '../database/db.js'

export const getUsers = (_, res) => {
    const sql = "select * from usuario"

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
    const sql = "insert into usuario (nome) value (?)"

    const {nome} = req.body

    db.query(sql, [nome], (err, data) => {
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
    const sql = "update usuario set nome = ? where id = ?"

    const {nome, id } = req.body;

    db.query(sql, [nome, id], (err, data) => {
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
    const sql = "delete from usuario where id = ?";

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