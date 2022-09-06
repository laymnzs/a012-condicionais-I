let idade = Number(prompt("Qual é a sua idade?"))
let isMaiorIdade = confirm("Já terminou o Ensino Médio?")
let isCursandoOutraFaculdade = 0;

if(idade >=8) {
console.log("A pessoa é maior de idade")
}else{
	console.log("A pessoa é menor de idade")
}

if (isMaiorIdade === true) {
    console.log("A pessoa terminou o Ensino Médio")
let isCursandoOutraFaculdade = confirm("Você está cursando alguma faculdade?")
resposta = isCursandoOutraFaculdade;
} else {
    console.log("A pessoa não terminou o Ensino Médio")
}

if (resposta !== true) {
    console.log("A pessoa NÃO está cursando uma faculdade")
} else {
    console.log("A pessoa está cursando uma faculdade")
}