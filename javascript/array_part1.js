//criação do array
let arr = ['Wallison', 26, 1.77, true]
/*console.log('primeiro elemento: ', arr[0])
console.log('outro elemento: ', arr[1])
console.log('outro elemento: ', arr[2])
console.log('outro elemento: ', arr[3])
console.log('tamanho do array: ', arr.length)*/
console.clear
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.clear
// for of, percorre os elementos do array
for (let variavel of arr) {
    console.log(variavel)
}
// for in, percorre os indices do array
for (let indice in arr) {
    console.log(indice, arr[indice])
}
