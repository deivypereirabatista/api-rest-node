import app from './app.js'

const PORT = process.env. PORT || 3000

//Escutar a porta 3000
app.listen(PORT, () => {
            console.log("Rodando na porta http://localhost:3000")
        })
