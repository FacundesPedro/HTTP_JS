const axios = require('axios').default


async function func(url){
    let joke = '';
    await axios.get(url)
        .then(res=>{
        console.log(res.headers["content-type"])
        const {delivery,setup,flags} = res.data
        joke = `${setup} ${delivery}`
        console.log(joke)
    })
    .catch(erro =>{
        console.log(erro)
    })
    return joke
}

module.exports = func

