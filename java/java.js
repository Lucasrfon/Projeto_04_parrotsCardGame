// Variavéis
let quantidadeCartas;
let condicaoMaior;
let condicaoMenor;
let condicaoPar;
let condicaoOk;

//funções
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

//Js da página
checar();
while (condicaoOk !== true) {   
    alert ("Número inválido, escolha um número par entre 4 e 14");
    checar();
}