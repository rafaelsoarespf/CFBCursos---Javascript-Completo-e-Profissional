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
    caixa2 = document.getElementById("caixa2")
    novoElemento = document.createElement("div")
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerText = "teste"


    caixa2.appendChild(novoElemento)
}
