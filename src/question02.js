import leia from 'readline-sync';

var nota1 = leia.questionInt("DIGITE A NOTA DO PRIMEIRO BIMESTRE: ");
var nota2 = leia.questionInt("DIGITE A NOTA DO SEGUNDO BIMESTRE: ");
var faltas = leia.questionInt("DIGITE A SUA QUANTIDADE DE FALTAS: ");
var aulas = leia.questionInt("DIGITE A QUANTIDADE DE AULAS: ");
var aulasfrenquencia = (aulas - faltas);
var frequencia = (aulasfrenquencia/aulas) * 100;
var media = (nota1 + nota2) / 2;

if (frequencia >= 75 && media >= 7 ) {
    console.log("APROVADO")
} if (frequencia >= 75 && media >= 6.9 ) {
    console.log("RECUPERACAO")
} if (media < 5 ) {
    console.log("REPROVADO POR NOTA")
}if (frequencia < 75 ) {
    console.log("REPROVADO POR FALTA")
}

console.log(media + frequencia)


