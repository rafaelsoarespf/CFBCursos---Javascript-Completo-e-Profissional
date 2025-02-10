let selecionado = [false,false,false,false,false,false]

function selecionar(nomeElemento){
    
    //variaveis
    let cursos=document.getElementsByClassName("curso c1")
    let posicao = -1;

    for(let contador in cursos){
        if(cursos[contador].innerText == nomeElemento){
            posicao = contador
        }
    }

    //se elemento não estiver selecionado
    if(!selecionado[posicao]){

        //alterar o estilo
        cursos[posicao].classList.add("destaque")
        //adicionar elemento no vetor "selecionado"
        selecionado[posicao] = true

    }else{

        //remover estilo
        cursos[posicao].classList.remove("destaque")
        //elemento recebe false - não selecionado
        selecionado[posicao] = false
       
    }
}

function copiar(){
    
    //elementos
    let caixa2 = document.getElementById("caixa2")
    let cursos=document.getElementsByClassName("curso c1")


    for(contador in selecionado){
        if(selecionado[contador]){

            //criando elemento   
            novoElemento = document.createElement("div")
            novoElemento.setAttribute('class', 'curso c1')
            novoElemento.innerText = cursos[contador].innerText
            caixa2.appendChild(novoElemento)

            //remover elementos
            cursos[contador].remove()
        }
    }

    //arrumando o array
    for(contador in selecionado){
        if(selecionado[contador]){
            console.log("deletando posição: " + contador + " marcado como " + selecionado[contador] )
            selecionado.splice(contador,1)
            console.log(selecionado)
        }
    }
    


}
