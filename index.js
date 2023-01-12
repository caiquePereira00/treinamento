const express =require('express')
const app = express()
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT


//Rotas Api
app.use('/users', require('./api/users'))
app.use('/puppeteer', require('./api/puppeteer'))

//é o que faz o servidor escutar as requisições vindas,
// da porta definida
app.listen( port ,()=>{
    console.log('O servidor está rodando na porta %s', port)
})