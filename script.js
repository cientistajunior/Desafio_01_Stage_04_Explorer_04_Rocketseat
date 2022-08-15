/*
  Nesse desafio, você irá solicitar ao usuário que ele insira DOIS NÚMEROS e,
  a partir daí, calcular:

  - A soma do dois números;
  - A subtração dos dois números;
  - A multiplicação dos dois números;
  - A divisão dos dois números;
  - O resto da divisão dos números;
  - Verifique se a soma dos dois números é par;
  - Verifique se os dois números inseridos são iguais.
*/
alert("DESAFIO DOS OPERADORES. INSIRA DOIS NÚMEROS.")
let numberOne = Number(prompt("Insira um número: "));
let numberTwo = Number(prompt("Insira outro número: "));
let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;
let module = numberOne % numberTwo;

alert(`Somando ${numberOne} com ${numberTwo} o resultado é: ${sum}`) /* SOMA */
alert(`Subitraindo ${numberOne} com ${numberTwo} o resultado é: ${subtraction}`) /* SUBTRAÇÃO */
alert(`Multiplicando ${numberOne} com ${numberTwo} o resultado é: ${multiplication}`) /* MULTIPLICAÇÃO */
alert(`Dividindo ${numberOne} com ${numberTwo} o resultado é: ${division}`) /* DIVISÃO */
alert(`módulo de${numberOne} com ${numberTwo} o resultado é: ${module}`) /* MÓDULO | RESTO DA DIVISÃO */

if(sum % 2 == 0){ /* VERIFICANDO SE A SOMA DOS NPUMEROS É PAR ou não */
  alert(`O número ${sum} é PAR`)
} else {
  alert(`O número ${sum} é ÍMPAR`)
}

if(numberOne === numberTwo){ /* VERIFICANDO SE OS NUMEROS INSERIDOS SÃO IGUAIS */
  alert(`O número ${numberOne} e o ${numberTwo} são IGUAIS`);
} else {
  alert(`O número ${numberOne} e o ${numberTwo} são DIFERENTES`);
}

