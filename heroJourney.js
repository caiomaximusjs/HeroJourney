console.clear();
var prompt = require('prompt-sync')();
let red = '\u001b[31m';
let blue = '\u001b[34m';
let reset = '\u001b[0m';
let green = '\u001b[32m';
let erro = "------DIGITE UMA RESPOSTA VALIDA------";
let inicio = "------Aperte ENTER para continuar------";
let guia = "Responda 'SIM' ou 'NAO' para as perguntas de [1] até [5]";
// HISTORIA
while(true) {

console.log(green + `Mais um dia na farmácia chega ao fim, clientes chatos, receitas falsas e furtos.
Ludmilla está cansada e acabou de fechar a farmácia, responda essas perguntas e defina o seu futuro
no emprego: 

`)

 console.log(red + guia + reset);
 console.log();
 console.log(green + inicio + reset);
 let enter = prompt();
console.clear();
// PERGUNTAS
let perguntas = ["ZERO", "[1] Você limpou a poeira das prateleiras? ", "[2] Você organizou a perfumaria? ",
"[3] Você conferiu a validade dos produtos? ", "[4] Você conferiu a entrega de medicamentos? ",
"[5] Você fechou o caixa antes de sair? "];
// CONSEQUENCIAS
let consequencias = ["ZERO", 
"Você jamais será uma boa farmacêutica, foi demitida e vai morar na rua.", 
"Você vai acabar sendo demitida, foi descontada em 200 reais no seu salário",
"Você vai ser descontada da próxima vez, teve que fazer hora extra e não conseguiu ir a faculdade.",
"Você não pode cometer esses erros, levou uma advertência de sua Patroa.",
"Parabéns!! Você é uma excelente funcionária, foi promovida e seu salário foi triplicado!!!"]
// PERGUNTAS 

console.log(perguntas[1]);
let resposta1 = prompt().toLowerCase().trim();
while (resposta1 != 'sim' && resposta1 != 'nao'){
    console.clear();
    console.log(red + erro + reset)
    resposta1 = prompt(perguntas[1]).toLowerCase().trim();
}
console.clear();
console.log(perguntas[2]);
let resposta2 = prompt().toLowerCase().trim();
while (resposta2 != 'sim' && resposta2 != 'nao'){
    console.clear();
    console.log(red + erro + reset)
    resposta2 = prompt(perguntas[2]).toLowerCase().trim();
}
console.clear();
console.log(perguntas[3]);
let resposta3 = prompt().toLowerCase().trim();
while (resposta3 != 'sim' && resposta3 != 'nao'){
    console.clear();
    console.log(red + erro + reset)
    resposta3 = prompt(perguntas[3]).toLowerCase().trim();
}
console.clear();
console.log(perguntas[4]);
let resposta4 = prompt().toLowerCase().trim();
while (resposta4 != 'sim' && resposta4 != 'nao'){
    console.clear();
    console.log(red + erro + reset)
    resposta4 = prompt(perguntas[4]).toLowerCase().trim();
}
console.clear();
console.log(perguntas[5]);
let resposta5 = prompt().toLowerCase().trim();
while (resposta5 != 'sim' && resposta5 != 'nao'){
    console.clear();
    console.log(red + erro + reset)
    resposta5 = prompt(perguntas[5]).toLowerCase().trim();
}
// CONTADOR DE 'SIM'
let contador = 0;
if (resposta1 == 'sim') {
    contador++
}
if (resposta2 == 'sim') {
    contador++
}
if (resposta3 == 'sim') {
    contador++
}
if (resposta4 == 'sim') {
    contador++
}
if (resposta5 == 'sim') {
    contador ++
}

console.clear();
// RESPOSTAS CONFORME A QUANTIDADE DE 'SIM'
if(contador == 5){
    console.log(green + consequencias[5])
}
else if(contador == 4){
    console.log(red + consequencias[4])
}
else if(contador == 3){
    console.log(red + consequencias[3])
}
else if(contador == 2){
    console.log(red + consequencias[2])
}
else if(contador == 1){
    console.log(red + consequencias[2])
}
else {
    console.log(red + consequencias[1])
}

console.log(`


`);
console.log(blue + "Obrigado por participar da jornada do herói" + reset);
console.log(`

`);
repetir = prompt(green + "Você deseja jogar novamente?" + reset).toLowerCase().trim();
console.clear();
if (repetir == 'nao') {
     break
 }
}
console.clear();
console.log(red + `                                      FIM DE JOGO


` + reset)


