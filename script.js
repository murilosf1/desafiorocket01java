let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicação: " + multi)
alert("Divisão: " + div)
alert("Resto da divisão: " + restDiv)



if(numberOne === numberTwo){

  alert(`Os números são iguais!`)

}
else if(numberOne !== numberTwo){

  alert(`Os Números são diferentes`)
}

if (sum % 2 === 0){

  alert(`O número é par`)
}

else {
  alert(`O número é impar`)
}

