const {readFileSync} = require('fs')
const requester = require('../../requester/requester')

module.exports = {
 
    async getHtml(req,res){
       res.set('Content-Type','text/html')
        const html = await readFileSync('/home/pedro/Documentos/Curso_Web/html/index.html','utf-8')
        res.status(200).send(html)
    },
    async getJSON(req,res){
        const url = 'https://sv443.net/jokeapi/v2/joke/any'
        res.set('Content-Type','text/plain')
        
        const joke = await requester(url)
        res.status(200).send(joke)
    }


}