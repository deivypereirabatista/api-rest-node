import express, { json } from "express"
import conexao from './app/database/conexao.js'
import routes from './routes.js'


const app = express()

app.use(express.json()) //Indicar para express ler body com json

//usar o routes
app.use(routes)

export default app