//Desafio Felipão / Feito por Tiago Tozzo

//declaração de variáveis
let nomeHeroi = "THOR"
let xpHeroi = 5500
let nivelHeroi = ""

//testes condicionais e atribuição de valor à variável nivelHeroi
if (xpHeroi <1000){
    nivelHeroi = "Ferro"
}

else if ((xpHeroi > 1000) && (xpHeroi <= 2000)){
    nivelHeroi = "Bronze"
}

else if ((xpHeroi > 2000) && (xpHeroi <= 5000)){
    nivelHeroi = "Prata"
}

//adicionei a saída "não identificado!" porque há uma lacuna entre a pontuação de 5001 a 6000 pontos.
else if ((xpHeroi > 5000) && (xpHeroi <= 6000)){
    nivelHeroi = "não identificado!"
}

else if ((xpHeroi > 6000) && (xpHeroi <= 7000)){
    nivelHeroi = "Ouro"
}

else if ((xpHeroi > 7000) && (xpHeroi <= 8000)){
    nivelHeroi = "Platina"
}

else if ((xpHeroi > 8000) && (xpHeroi <= 9000)){
    nivelHeroi = "Ascendente"
}

else if ((xpHeroi > 9000) && (xpHeroi <= 10000)){
    nivelHeroi = "Imortal"
}

else if (xpHeroi > 10000){
    nivelHeroi = "Radiante"
}

//saída de dados
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)
