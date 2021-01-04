function Pessoa(nome) {
  this.nome = nome;

  this.falar = () => console.log('meu nome é', this.nome);
}

const tonio = new Pessoa('tanohso')

tonio.falar()