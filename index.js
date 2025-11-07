// index.js - Arquivo principal do projeto RI7
// Este arquivo demonstra o uso de interfaces e polimorfismo em JavaScript

// Definindo uma interface simples usando uma classe abstrata
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  // Método abstrato que deve ser implementado pelas subclasses
  fazerSom() {
    throw new Error('Método fazerSom deve ser implementado');
  }

  // Método comum
  apresentar() {
    console.log(`Olá, eu sou ${this.nome}!`);
  }
}

// Implementando a interface com diferentes classes
class Cachorro extends Animal {
  fazerSom() {
    console.log('Au au!');
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log('Miau!');
  }
}

class Vaca extends Animal {
  fazerSom() {
    console.log('Muu!');
  }
}

// Função que demonstra polimorfismo
function fazerBarulho(animal) {
  animal.apresentar();
  animal.fazerSom();
}

// Criando instâncias dos animais
const cachorro = new Cachorro('Rex');
const gato = new Gato('Whiskers');
const vaca = new Vaca('Bessie');

// Demonstrando polimorfismo
console.log('Demonstrando polimorfismo com interfaces:');
fazerBarulho(cachorro);
fazerBarulho(gato);
fazerBarulho(vaca);

// Usando readline para entrada do usuário
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome de um animal (cachorro, gato ou vaca): ', (resposta) => {
  let animal;
  switch (resposta.toLowerCase()) {
    case 'cachorro':
      animal = new Cachorro('Seu cachorro');
      break;
    case 'gato':
      animal = new Gato('Seu gato');
      break;
    case 'vaca':
      animal = new Vaca('Sua vaca');
      break;
    default:
      console.log('Animal não reconhecido. Usando cachorro como padrão.');
      animal = new Cachorro('Cachorro padrão');
  }

  console.log('\nAnimal criado baseado na sua entrada:');
  fazerBarulho(animal);

  rl.close();
});
