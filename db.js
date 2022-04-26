const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/web-app')

const conn = mongoose.connection

const produtoSchema = new mongoose.Schema({
    nome: String,
    preco: Number
},{collection:'produto'}
)

const ObjectId = require("mongodb").ObjectId

module.exports = {Mongoose: mongoose,ProdutoSchema:produtoSchema}