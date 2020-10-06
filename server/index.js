const express = require('express')
const app = express()
const router = require('./rotas')

app.use(router)
const port = 8181

app.listen(port,()=>{
    console.log(`Server Iniciado na porta ${port}`)
})