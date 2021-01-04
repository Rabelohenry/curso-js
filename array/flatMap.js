const escola = [{
  nome: 'turma m1',
  alunos: [{
    nome: 'gustavo',
    nota: 8.1
  }, {
    nome: 'Ana',
    nota: 9.3
  }]
},
{
  nome: 'turma m2',
  alunos: [{
    nome: 'rebeca',
    nota: 8.9
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}]

const getNotaAluno = a => a.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1);

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2);