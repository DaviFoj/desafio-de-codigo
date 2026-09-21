const ESTOQUE = [12, 5, 8, 2, 0, 15, 4];

const ContaEstoque = () => {
    const estoqueBaixo = ESTOQUE.filter((item) => item <= 5);
    return estoqueBaixo.length;
}

console.log(`Estoque baixo: ${ContaEstoque()}`);