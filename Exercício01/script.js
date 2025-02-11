function selecionar(nomeElemento){
    //variaveis
    let cursos=document.getElementsByClassName("curso c1")

    for(let contador in cursos){
        if(cursos[contador].innerText == nomeElemento){
            //alterar o estilo
            cursos[contador].classList.toggle("destaque")
        }
    }
}

function copiar(){
    
    //elementos
    let caixa2 = document.getElementById("caixa2")
    let cursos=document.getElementsByClassName("curso c1")

    //adicionar elemento na caixa2
    for(contador in cursos){
        if(cursos[contador].classList && cursos[contador].classList.contains('destaque')){
            //criando elemento   
            novoElemento = document.createElement("div")
            novoElemento.setAttribute('class', 'curso c1')
            novoElemento.innerText = cursos[contador].innerText
            caixa2.appendChild(novoElemento)
        }
    }

    // remover elemento em caixa1
    for(let contador=cursos.length-1; contador >= 0; contador-- ){
        console.log(contador)
        if(cursos[contador].classList && cursos[contador].classList.contains('destaque')){ 

            cursos[contador].remove()

        }
    }
}
