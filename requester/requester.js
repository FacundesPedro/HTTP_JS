const axios = require('axios').default


async function func(url,joke){
    
    await axios.get(url)
        .then(res=>{
        console.log(res.headers["content-type"])
        const {setup,flags} = res.data
        joke = setup
        console.log(joke)
    })
    .catch(erro =>{
        console.log(erro)
    })
    return joke
}

module.exports = func

