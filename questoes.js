/*1. Cálculo de Desconto Progressivo: simule o cálculo de um desconto em uma loja. Declare uma variável
valorCompra e atribua um valor numérico a ela. A regra de desconto é a seguinte: se o valor da compra for
maior ou igual a R$ 1.000,00, o desconto será de 20%; se for maior ou igual a R$ 500,00 (mas menor que R$
1.000,00), o desconto será de 10%; caso contrário, não haverá desconto. Calcule o valor final da compra já com
o desconto aplicado e exiba no console uma mensagem clara, como: "Valor final: R$ [valor]".*/

/*
let valorCompra = 300
let valorFinal = 0
if (valorCompra >= 1000){
    valorFinal = valorCompra - (valorCompra * 20) / 100
    console.log(`Valor final: R$ ${valorFinal}`)
}
else if (valorCompra >= 500 && valorCompra < 1000) {
    valorFinal = valorCompra - (valorCompra * 10) / 100
    console.log(`Valor final: R$ ${valorFinal}`)
}
else {
    console.log(`Valor final: R$ ${valorCompra}`)
}*/


/*2. Sistema de Pontos de Fidelidade: desenvolva um programa que determine a pontuação de um cliente com
base em sua categoria de fidelidade. Crie uma variável categoria e atribua a ela uma das seguintes strings:
"Ouro", "Prata" ou "Bronze". Utilizando uma estrutura switch, exiba no console a quantidade de pontos que o
cliente ganha: 20 pontos para "Ouro", 15 para "Prata" e 10 para "Bronze". Inclua um caso default para exibir a
mensagem "Categoria inválida" se a variável não corresponder a nenhuma das opções.*/

/*
let categoria = "Ouro";
switch (categoria){
    case "Ouro":
        console.log("Quantidade de pontos ganhos: 20 pontos");
        break;
    case "Prata":
        console.log("Quantidade de pontos ganhos: 15 pontos");
        break;
    case "Bronze":
        console.log("Quantidade de pontos ganhos: 10 pontos");
        break;
    default:
        console.log("Categoria inválida!")
}
*/


/*3. Sequência de Fibonacci: a sequência de Fibonacci é uma série de números onde cada número é a soma
dos dois anteriores, começando com 0 e 1. Crie um script que use um laço for para gerar e exibir no console os
10 primeiros números desta sequência, que são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.*/

/*
let numero = 0
for (let i = 1; i <=34; i+=numero) {
     console.log(`${numero += i}`);
}
*/

/*4. Simulador de Bateria: escreva um programa que simule o descarregamento de uma bateria de celular. Crie
uma variável nivelBateria iniciando com o valor 100. Use um laço while para diminuir o nível da bateria em 10
unidades a cada iteração (simulando a passagem de uma hora). O laço deve continuar enquanto o nível for
maior que 0. A cada "hora", exiba o nível atual. Ao final do laço, exiba a mensagem "Bateria esgotada".*/

/*
let nivelBateria = 100
while (nivelBateria > 0) {
    console.log(`Nível da bateria: ${nivelBateria}`);
    nivelBateria = nivelBateria-10;
}
console.log("Bateria esgotada!")
*/


/*5. Função para Calcular Dias de Vida: crie uma função chamada calcularDiasDeVida que aceite um único
parâmetro: idadeEmAnos. A função deve calcular e retornar o número aproximado de dias que uma pessoa
viveu, baseando-se na premissa de que um ano tem 365 dias. Fora da função, chame-a com um valor de idade
e exiba o resultado de forma clara no console, por exemplo: "Uma pessoa de 30 anos viveu aproximadamente
10950 dias."*/

/*
let idadeEmAnos = 18
function calcularDiasDeVida(idadeEmAnos){
    return idadeEmAnos * 365 

}
console.log(`Uma pessoa de ${idadeEmAnos} anos viveu aproximadamente ${calcularDiasDeVida(idadeEmAnos)} dias.`)
*/


/*6. Verificador de Aprovação Escolar: desenvolva um script que determine se um aluno foi "Aprovado" ou
"Reprovado". Para isso, declare variáveis para as quatro notas bimestrais e uma para a frequência em
porcentagem (ex: 85 para 85%). O aluno só é aprovado se atender a duas condições simultaneamente: ter uma
média final igual ou superior a 6 e uma frequência igual ou superior a 75%. Calcule a média, verifique as
condições e exiba o resultado final no console.*/

/*
let n1 = 8 // 0 a 10
let n2 = 6
let n3 = 7
let n4 = 9
let frequencia = 78 // 0 a 100%
let media = (n1 + n2 + n3 + n4) / 4
if (media >= 6 && frequencia >= 75){
    console.log("Aprovado")
}
else{
    console.log("Reprovado")
}
*/

/*7. Menor Número da Lista: declare um array de números chamado listaDeNumeros. Use um laço for...of para
percorrer o array e encontrar o menor número entre eles. Ao final, exiba o menor número encontrado no console.*/

/*
const listaDeNumeros = [1,3,4,5,6,7,8,9,10,24,77,56];
let menorNumero = listaDeNumeros[0];
for (const numero of listaDeNumeros) {
 if (numero < menorNumero) {
 menorNumero = numero;
 }
}
console.log(`O menor número é: ${menorNumero}`);
*/