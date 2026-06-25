import express, { json } from "express"

const app = express()

app.use(express.json()) //Indicar para express ler body com json

// mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'G'},
    {id:2, selecao: 'Suiça', grupo: 'G'},
    {id:3, selecao: 'Camarões', grupo: 'G'},
    {id:4, selecao: 'Servia', grupo: 'G'}
    
]


//Funçoes

//Retornar o objeto por ID
function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)
}

//pegar a posição ou index do elemento no array por ID
function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id ==id)
}


// Rota padrão/raiz
app.get("/", (req, res) =>{
    res.send("Olá, Mundo!")
})

app.get("/selecoes", (req, res) => {
    res.status(200).send(selecoes)
})

app.get("/selecoes/:id", (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
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




export default app