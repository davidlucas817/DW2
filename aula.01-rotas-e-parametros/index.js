// Importando o Express na aplicação //
const express = require("express") // CommonJS Modules (Node, forma antiga)

// Criando uma instância do Express //
const app = express()

//Criando a rota principal
app.get("/", (req, res) => {
    res.send("<h1>Hello world! <br>Olá....</h1>")
})

//Criando a rota Perfil
// :nome é um parâmetro obrigatório
app.get("/perfil/:nome", (req,res) => {
    const nome = req.params.nome // Coletando o parâmetro e guardando na variável
    res.send(`<h1>Perfil do usuário ${nome}!!</h1>`)
})

//Criando a rota Perfil
app.get("/videos", (req,res) => {
    res.send("<h1>Página de vídeos</h1>")
})

//Iniciando o servidor na porta 8080 //
app.listen(8080, function(error) {
    if(error){
        console.log(`Ocorreu um erro: ${error}`)
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})