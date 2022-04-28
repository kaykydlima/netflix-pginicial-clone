/* selecionando botoes */
/* primeira pergunta */
const question1 = document.getElementById('question1')
/* segunda pergunta */
const question2 = document.getElementById('question2')
/* terceira pergunta */
const question3 = document.getElementById('question3')
/* quarta pergunta */
const question4 = document.getElementById('question4')
/* quinta pergunta */
const question5 = document.getElementById('question5')
/* sexta pergunta */
const question6 = document.getElementById('question6')

/* selecionando as respostas */
/* primeira resposta */
const targetDiv = document.getElementById('answer1')
/* segunda resposta */
const targetDiv2 = document.getElementById('answer2')
/* terceira resposta */
const targetDiv3 = document.getElementById('answer3')
/* quarta resposta */
const targetDiv4 = document.getElementById('answer4')
/* quinta resposta */
const targetDiv5 = document.getElementById('answer5')
/* sexta resposta */
const targetDiv6 = document.getElementById('answer6')

/* chamando funções para adicionar evento */
/* primeira */
question1.addEventListener("click", open)
/* segunda */
question2.addEventListener("click", open2)
/* terceira */
question3.addEventListener("click", open3)
/* quarta */
question4.addEventListener("click", open4)
/* quinta */
question5.addEventListener("click", open5)
/* sexta */
question6.addEventListener("click", open6)

/* funções */
/* PRIMEIRA FUNÇÃO */
function open () {
    if(targetDiv.style.display !== "none"){
        targetDiv.style.display = "none"
    } else{
        targetDiv.style.display = "block"
    }
    return
}
/* segunda função */
function open2 () {
    if(targetDiv2.style.display !== "none"){
        targetDiv2.style.display = "none"
    } else{
        targetDiv2.style.display = "block"
    }
    return
}
/* terceira função */
function open3 () {
    if(targetDiv3.style.display !== "none"){
        targetDiv3.style.display = "none"
    } else{
        targetDiv3.style.display = "block"
    }
    return
}
/* quarta função */
function open4 () {
    if(targetDiv4.style.display !== "none"){
        targetDiv4.style.display = "none"
    } else{
        targetDiv4.style.display = "block"
    }
    return
}
/* quinta função */
function open5 () {
    if(targetDiv5.style.display !== "none"){
        targetDiv5.style.display = "none"
    } else{
        targetDiv5.style.display = "block"
    }
    return
}
/* sexta função */
function open6 () {
    if(targetDiv6.style.display !== "none"){
        targetDiv6.style.display = "none"
    } else{
        targetDiv6.style.display = "block"
    }
    return
}
