import leia from 'readline-sync';

var vitorias = leia.questionInt("DIGITE QUANTIDADE DE VITORIAS: ");
var empates = leia.questionInt("DIGITE QUANTIDADE DE EMPATES: ");
var derrotas = leia.questionInt("DIGITE QUANTIDADE DE DERROTAS: ");
var bonus = leia.questionInt("DIGITE QUANTIDADE DE BONUS CONQUISTADOS: ");

var pontos = ((vitorias * 3) + (empates * 1 ) + (bonus * 1));
var partidasDisputadas = (vitorias + empates + derrotas);

if ( pontos < 10 ) {
    console.log("INICIANTE")
}
if ( pontos <= 24 ) {
    console.log("COMPETIDOR")
}
if ( pontos <= 39 ) {
    console.log("AVANCADO")
}
if ( pontos <= 59 ) {
    console.log("ELITE")
}
if ( pontos > 60 ) {
    console.log("LENDA DA COMPETICAO")
}

console.log( pontos, partidasDisputadas)

