
        document.querySelectorAll('a').forEach(link=>{
    
            link.onclick = function(e){
                 e.preventDefault()
                 const conteudo = document.getElementById("conteudo")
                 fetch(link.href)
                     .then(n => n.text())
                     .then(n => conteudo.innerHTML = n)
            }
        })