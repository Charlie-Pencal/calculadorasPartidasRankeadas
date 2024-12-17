// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// // "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**

const readline = require('readline-sync')

function calculoVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}
let totalVitorias = calculoVitorias(readline.question('Quantas vitorias? '), readline.question('Quantas derrotas? '))
let rank = ''

if (totalVitorias >= 101) {
    rank = 'Imortal'

} else if (totalVitorias <= 100 && totalVitorias >= 91) {
    rank = 'Lendario'

} else if (totalVitorias <= 90 && totalVitorias >= 81) {
    rank = 'Diamante'

} else if (totalVitorias <= 80 && totalVitorias >= 51) {
    rank = 'Ouro'

} else if (totalVitorias <= 50 && totalVitorias >= 21) {
    rank = 'Prata'

} else if (totalVitorias <= 20 && totalVitorias >= 11) {
    rank = 'Bronze'

} else {
    rank = 'Ferro'
}

console.log(`O Herói tem saldo de ${totalVitorias}, portanto está no rank ${rank}`)