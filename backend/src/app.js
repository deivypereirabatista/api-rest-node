import express, { json } from "express"
import { engine } from "express-handlebars" //Faz com que o Express entenda o Handlebars
import path from "node:path" //Ajuda a construir caminhos de pastas corretamente
import conexao from './app/database/conexao.js'
import routes from './routes.js'


const app = express()

//Registra Handlebars
app.engine(
    "handlebars",
    engine({
        defaultLayout: "main"
    })
)

//Definindo o mecanismo
//Informa que o mecanismo padrão das páginas sera o Handlebars
app.set("view engine", "handlebars")

//Informar onde as pastas estão
app.set(
    "views",
    path.resolve("views")
)

app.use(express.json()) //Indicar para express ler body com json

//usar o routes
app.use(routes)

export default app
