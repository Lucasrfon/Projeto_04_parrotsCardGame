// Variavéis
let quantidadeCartas;
let condicaoMaior;
let condicaoMenor;
let condicaoPar;
let condicaoOk;
let virada1 = false;
let virada2 = false;
let cartasViradas;

//arrays
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
    if (virada1 === false) {
        virada1 = elemento.querySelector(".verso").querySelector("img")
        elemento.querySelector(".estiloCarta").classList.add("frente")
        elemento.querySelector(".verso").classList.add("vira")
        elemento.querySelector(".verso").classList.remove("verso")
        console.log(virada1)
    }
    else {
        virada2 = elemento.querySelector(".verso").querySelector("img")
        elemento.querySelector(".estiloCarta").classList.add("frente")
        elemento.querySelector(".verso").classList.add("vira")
        elemento.querySelector(".verso").classList.remove("verso")
        console.log(virada2)
        if (virada1 == virada2) {
           cartasViradas += 2;
           console.log(cartasViradas)
           virada1 = false
           virada2 = false
        }
        else {
        }
    }
}
function desvirarCarta() {
    document.querySelector(".vira").classList.add("verso")
    document.querySelector(".vira").classList.remove("vira")
    document.querySelector(".frente").classList.remove("frente")
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
    <div class="carta" onclick="virarCarta(this)">
        <div class="estiloCarta">
            <img src="/imagens/front.png" />
        </div>
        <div class="verso estiloCarta">
            <img src="/imagens/${cartasEmJogo[i]}" />
        </div>
    </div>`
}