//Desenvolva sua lógica aqui utilizando o método de array sort

//1) Dado o array [200, 153, 875, 53, 20, 62, 428, 5], ordene os números em ordem crescente.
const numbers = [200, 153, 875, 53, 20, 62, 428, 5];
console.log('Ordering numbers in crescent order')
console.log(numbers.sort((a, b) => {
  if (a < b) {
    return -1
  } 
}))
console.log('Ordering numbers in decrescent order')
console.log(numbers.sort((a, b) => {
  if (a > b) {
    return -1
  } 
}))

//2) Utilizando o array do exemplo anterior, ordene os números em ordem decrescente.

//3) Dado o array ['Matheus', 'Samuel', 'Bruna', 'Patrick', 'Yan', 'Amanda', 'Carlos'], ordene os nomes em ordem alfabética
const names = [
  'Matheus',
  'Samuel',
  'Bruna',
  'Patrick',
  'Yan',
  'Amanda',
  'Carlos',
];
console.log('Ordering array in alphabetical order:')
console.log(names.sort())

//DESAFIO
//4) Dado um objeto "loja", acesse a propriedade "produtos", filtre apenas os elementos que possuem o preço maior que 100 e ordene em ordem crescente.
const loja = {
  nome: 'Kenzie Store',
  local: 'Brasil',
  produtos: [
    {
      nomeProduto: 'Moletom',
      preco: 250,
    },
    {
      nomeProduto: 'Casaco',
      preco: 100,
    },
    {
      nomeProduto: 'Tênis',
      preco: 180,
    },
    {
      nomeProduto: 'Regata',
      preco: 50,
    },
    {
      nomeProduto: 'Calça',
      preco: 120,
    },
  ],
};

loja.produtos = loja.produtos.filter(products => products.preco >= 100).sort((a, b) => {
  if (a.preco < b.preco) return -1
})
console.log(loja)
