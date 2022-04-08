let quantidadeCartas;
let condicaoMaior;
let condicaoMenor;
let condicaoPar;
let condicaoOk;

function checar() {
    quantidadeCartas  = prompt ("Com quantas cartas você quer jogar?");
    condicaoMaior = quantidadeCartas >= 4;
    condicaoMenor = quantidadeCartas <= 14;
    condicaoPar = (quantidadeCartas % 2) === 0;
    condicaoOk = (condicaoMaior && condicaoMenor && condicaoPar)
}
checar();
while (condicaoOk !== true) {   
    alert ("Número inválido, escolha um número par entre 4 e 14");
    checar();
}