import express, { json } from "express"
import conexao from './app/database/conexao.js'
import SelecaoController from "./app/controllers/SelecaoController.js"

const app = express()

app.use(express.json()) //Indicar para express ler body com json

//ROTAS
app.get("/selecoes", SelecaoController.index)

app.get("/selecoes/:id", SelecaoController.show)

app.post("/selecoes", SelecaoController.store)

app.delete("/selecoes/:id", SelecaoController.delete)

app.put('/selecoes/:id', SelecaoController.update)

export default app