import express, { json } from "express"

const app = express()

app.use(express.json())

// mock
const selecoes = [
    {id:1, selecao: 'Brasil', grupo: 'G'},
    {id:2, selecao: 'Suiça', grupo: 'G'},
    {id:3, selecao: 'Servia', grupo: 'G'},
    {id:4, selecao: 'Camarões', grupo: 'G'}
]

// Rota padrão/raiz
app.get("/", (req, res) =>{
    res.send("Olá, Mundo!")
})

app.get("/selecoes", (req, res) => {
    res.status(200).send(selecoes)
})

app.post("/selecoes", (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso.')
})

export default app