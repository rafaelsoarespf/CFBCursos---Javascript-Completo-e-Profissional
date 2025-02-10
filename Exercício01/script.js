let selecionado = [false,false,false,false,false,false]

function selecionar(numElemento){
    
    let cursos=document.getElementsByClassName("curso c1")

    //se elemento não estiver selecionado
    if(!selecionado[numElemento]){

        //alterar o estilo
        cursos[numElemento].classList.add("destaque")
        //adicionar elemento no vetor "selecionado"
        selecionado[numElemento] = true

    }else{

        //remover estilo
        cursos[numElemento].classList.remove("destaque")
        //elemento recebe false - não selecionado
        selecionado[numElemento] = false
       
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
