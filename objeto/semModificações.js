const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = ' borracha escolar branca'
delete produto.tag
console.log(produto);

const pessoa = { nome: 'juliana', idade: 35 }
Object.seal(produto)
console.log('seladp:', Object.isSealed(produto));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

