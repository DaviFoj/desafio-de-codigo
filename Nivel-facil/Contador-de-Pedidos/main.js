let arr = [100,50,200,400,500,100,330,220,100,203,499,599,100,488,290,100,200,100];

function separaIguais (arr) {
    let arrIgual = [];
    for (let i in arr) {
        let value = arr[i];
        if (value >= 100) {
            arrIgual.push(value);
        }
    }
    return arrIgual
}

function quantidadePedidos(arr) {
    let quantidadePedidos = 0
    for (let i in arr) {
        quantidadePedidos += 1;
    }
    return quantidadePedidos
}

function somaArr(arr) {
    let total = 0;
    for (let i in arr) { 
        total += arr[i];
    }
    return total;
}

let arrIgual = separaIguais(arr);


console.log(`Valor total é: ${somaArr(arrIgual)} e total de itens são: ${quantidadePedidos(arrIgual)}`);