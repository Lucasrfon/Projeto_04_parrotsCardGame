// Variavéis
let quantidadeCartas;
let condicaoMaior;
let condicaoMenor;
let condicaoPar;
let condicaoOk;
let virada1 = false;
let virada2 = false;
let cartasViradas = 0;
let jogarNovamente;
let totalJogadas = 0;

//Arrays
let cartas = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"];
let cartasEmJogo = []
const listaCartas = document.querySelector(".cartas")

//Declaração de funções
function checar() {
    quantidadeCartas  = prompt ("Com quantas cartas você quer jogar?");
    condicaoMaior = quantidadeCartas >= 4;
    condicaoMenor = quantidadeCartas <= 14;
    condicaoPar = (quantidadeCartas % 2) === 0;
    condicaoOk = (condicaoMaior && condicaoMenor && condicaoPar)
}
function comparador() { 
	return Math.random() - 0.5; 
}
function virarCarta(elemento) {
    elemento.querySelector(".estiloCarta").classList.add("frente")
    elemento.querySelector(".verso").classList.add("vira")
    elemento.querySelector(".verso").classList.remove("verso")
}
function desvirarCarta1() {
    document.querySelector(virada1[1]).querySelector(".vira").classList.add("verso")
    document.querySelector(virada1[1]).querySelector(".vira").classList.remove("vira")
    document.querySelector(virada1[1]).querySelector(".frente").classList.remove("frente")
}
function desvirarCarta2() {
    document.querySelector(virada2[1]).querySelector(".vira").classList.add("verso")
    document.querySelector(virada2[1]).querySelector(".vira").classList.remove("vira")
    document.querySelector(virada2[1]).querySelector(".frente").classList.remove("frente")
}

//Recebendo a quantidade de cartas
checar();
while (condicaoOk !== true) {   
    alert ("Número inválido, escolha um número par entre 4 e 14");
    checar();
}

//Armar o jogo
for(let i = 0; i < quantidadeCartas; i ++) {
    cartasEmJogo.push(cartas[i])
}

cartasEmJogo.sort(comparador)

for(let i = 0; i < quantidadeCartas; i ++) {
    listaCartas.innerHTML += `
    <div class="carta ${cartasEmJogo[i].slice(0, 3)}" onclick="jogada(this)">
        <div class="estiloCarta">
            <img src="/imagens/front.png" />
        </div>
        <div class="verso estiloCarta">
            <img src="/imagens/${cartasEmJogo[i]}" />
        </div>
    </div>`
}

//Jogando
function jogada(elemento) {
    if (virada1 === false) {
        virada1 = elemento.classList
        totalJogadas ++
        virarCarta(elemento)
        console.log(elemento)
    }
    else {
        virada2 = elemento.classList
        totalJogadas ++
        virarCarta(elemento)
        console.log(elemento)
        if (virada1[1] == virada2[1]) {
           cartasViradas += 2;
           console.log(cartasViradas)
           virada1 = false
           virada2 = false
           if (cartasViradas == quantidadeCartas) {
               alert(`Parabéns! Você ganho em ${totalJogadas} jogadas!`)
               jogarNovamente = prompt("Gostaria de jogar novamente?")
               while (jogarNovamente != "sim" && jogarNovamente != "não") {
                alert("Resposta inválida. Favor digitar 'sim' ou 'não'.")
                jogarNovamente = prompt("Gostaria de jogar novamente?")
               }
               if (jogarNovamente == "sim") {
                   checar()
               } else {
                   alert ("Obrigado por jogar! Esperamos te ver novamente em breve!")
               }
           }
        }
        else {
            setTimeout(desvirarCarta1(), 1000)
        }
    }
}