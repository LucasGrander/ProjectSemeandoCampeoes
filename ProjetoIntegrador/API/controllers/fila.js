import { db } from '../database/db.js'

export const getFila = (_, res) => {
    const sql =
`
select fe.id,
fe.nome as Nome,
fe.data_de_nascimento,
fe.telefone, 
fe.responsavel,
cdt.id as centro_de_treinamento,
e.bairro,
e.rua,
e.numero,
c.nome_cidade
 from fila_de_espera fe
 join centro_de_treinamento cdt 
 	on fe.id_centro_de_treinamento = cdt.id
 join endereco e
 	on fe.id_endereco = e.id
 join cidade c 
 	on fe.id_cidade = c.id
`

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

// -----------------------------------    ADD FILA      ------------------------------------------------------------

export const addFila = (req, res) => {
        const { nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, rua, numero, bairro, nome_cidade } = req.body

    const sqlCidade = `insert into cidade (nome_cidade) values (?)`
    db.query(sqlCidade, [nome_cidade], function(err, resultCidade) {
        if (err) {
            console.log("Erro ao inserir na tabela cidade:", err)
            return res.status(500).json({ error: "Erro ao processar a requisição" })
        }

        const cidadeId = resultCidade.insertId

        const sqlEndereco = `insert into endereco (id_cidade, rua, numero, bairro) values (?, ?, ?, ?)`
        db.query(sqlEndereco, [cidadeId, rua, numero, bairro], function(err, resultEndereco) {
            if (err) { 
                console.log("Erro ao inserir na tabela endereco:", err)
                return res.status(500).json({ error: "Erro ao processar a requisição" })
            }

            const enderecoId = resultEndereco.insertId

            const sqlPessoa = `insert into fila_de_espera (nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, id_endereco) values (?, ?, ?, ?, ?, ?)`
            db.query(sqlPessoa, [nome, data_de_nascimento, telefone, responsavel, id_centro_de_treinamento, enderecoId], function(err, resultPessoa) {
                if (err) { 
                    console.log("Erro ao inserir na tabela pessoa:", err)
                    return res.status(500).json({ error: "Erro ao processar a requisição" })
                }

                console.log("Requisição bem sucedida!")
                return res.status(201).json({ pessoaId: resultPessoa.insertId, enderecoId, cidadeId })
            })
        })
    })
}

