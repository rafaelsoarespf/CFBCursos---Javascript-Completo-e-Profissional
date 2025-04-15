const cursos = [...document.querySelectorAll(".curso")];
const btnCopiar= document.querySelector("#btn_copiar");
const caixa = document.querySelectorAll(".caixa")

btnCopiar.addEventListener('click',()=>{
    cursos.map((curso) => {
        if(curso.classList.contains("destaque")){
            caixa[1].appendChild(curso)
        }else{
            caixa[0].appendChild(curso)
        }
    })
})

//altera a cor quando clica no curso para cor da class .destaque
cursos.map((curso)=>{
    curso.addEventListener('click', ()=>{
        curso.classList.toggle("destaque");
    })
})