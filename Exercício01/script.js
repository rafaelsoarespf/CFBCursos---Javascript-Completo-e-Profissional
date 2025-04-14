const cursos = [...document.querySelectorAll(".curso")];
const btnCopiar= document.querySelector("#btn_copiar");

const caixa2 = document.querySelector("#caixa2")

btnCopiar.addEventListener('click',()=>{
    cursos.map((curso, indice) => {
        if(curso.classList.contains("destaque")){
            caixa2.appendChild(curso)
            curso.classList.remove("destaque");
        }
    })
})

//altera a cor quando clica no curso para cor da class .destaque
cursos.map((curso,indice)=>{
    curso.addEventListener('click', ()=>{
        curso.classList.toggle("destaque");
    })
})