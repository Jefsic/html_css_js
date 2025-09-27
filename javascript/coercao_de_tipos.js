//COERÇÃO (CONVERSÃO) DE TIPOS

// coerção explicita (manual)
console.clear
const numero = 10
console.log(numero, typeof numero)
const numeroEmFormaDeString = String(numero)
console.log(numeroEmFormaDeString, typeof numeroEmFormaDeString)

//se somar um número string a um numero numero, tudo vira string
console.log("5" + 2 + 3)
// resultado "523"