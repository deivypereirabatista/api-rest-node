import express, { json } from "express"
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json()) //Indicar para express ler body com json


//FUNÇÕES
//Retornar o objeto por ID
function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)
}

//pegar a posição ou index do elemento no array por ID
function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id ==id)
}

//ROTAS

app.get("/selecoes", (req, res) => {
    //res.status(200).send(selecoes)

    const sql = "SELECT * FROM selecoes"
    conexao.query(sql, (error, result) => {
        if(error){
            console.log(error)
            res.status(404).json({'erro': error})
        }else{
            res.status(200).json(result)
        }
    })
})

app.get("/selecoes/:id", (req, res) => {
    //res.json(buscarSelecaoPorId(req.params.id))
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?"
    conexao.query(sql, id, (error, result) => {
        const linha = result[0]
        if(error){
            console.log(error)
            res.status(404).json({'erro': error})
        }else{
            res.status(200).json(linha)
        }
    })
})

app.post("/selecoes", (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso.')
})

app.delete("/selecoes/:id", (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)// passa posição e quantos elementos cortar
    //splice método usado para remover elemento de um array
    res.send(`Seleção com id ${req.params.id} excluida com sucesso!`)
})


app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

export default app