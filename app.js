const express = require('express')

const app = express()

const porta = 3000

const rota = express.Router()


app.use('/', rota)

app.use(express.json())


const db = require('../loja/db')

const Produto = db.Mongoose.model('esquemaProduto',db.ProdutoSchema,'produto')


rota.get('/', async(requisicao,resposta) =>{
    resposta.send('<h1>Servidor de internet NodeJS funcionando</h1>')
})

rota.get('/produtos', async(requisicao,resposta) =>{
    await Produto.find({}).lean().exec(function (e,listaRegistros){
        resposta.json(listaRegistros)
        resposta.end()
    })
})

app.set('view engine','ejs')

rota.get('/produtoshtml', async(requisicao,resposta) => {
    const listaProdutos = await Produto.find({}).lean().exec()
    resposta.render('formprodutos',{listaProdutos})
})

app.listen(porta)
console.log('NodeJS Funcionando na porta 3000!')