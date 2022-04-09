// Variavéis
let quantidadeCartas;
let condicaoMaior;
let condicaoMenor;
let condicaoPar;
let condicaoOk;
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
    <div class="carta">
        <div class="frente estiloCarta">
            <img src="/imagens/front.png" />
        </div>
        <div class="verso estiloCarta">
            <img src="/imagens/${cartasEmJogo[i]}" />
        </div>
    </div>`
}