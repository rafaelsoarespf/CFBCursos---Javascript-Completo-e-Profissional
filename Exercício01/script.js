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

function removerSelecionado(numElemento){
    for(let contador in selecionado){
        //se for igual
        if(selecionado[contador] == numElemento){
            selecionado[contador] = selecionado[contador+1 ]
        }
    }
}

function copiar(){
}
