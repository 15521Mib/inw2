const prompt = require('prompt-sync')();

class ContaCorrente {
  constructor(nomeTitular, saldo, dataAniversario) {
    this.nomeTitular = nomeTitular;
    this.saldo = saldo;
    this.dataAniversario = dataAniversario;
  }

  realizarMovimento() {
    console.log('Conta Corrente - "!lesma rica de conhecimento!"');
    console.log(`Nome: ${this.nomeTitular}`);
    console.log(`Saldo: $${this.saldo}`);
    console.log(`Data de Aniversário: ${this.dataAniversario}`);
    console.log();

    const tipoMovimento = prompt('Débito ou Crédito? (D/C): ');

    if (tipoMovimento.toLowerCase() === 'd') {
      const valor = parseFloat(prompt('Quanto deseja inserir? $'));
      if (valor < 0) {
        console.log('Valor inválido.');
      } else if (valor > this.saldo) {
        console.log('Saldo insuficiente.');
      } else {
        this.saldo -= valor;
        console.log(`Valor de $${valor} debitado.`);
      }
    } else if (tipoMovimento.toLowerCase() === 'c') {
      const valor = parseFloat(prompt('Quanto deseja inserir? $'));
      if (valor < 0) {
        console.log('Valor inválido.');
      } else {
        this.saldo += valor;
        console.log(`Valor de $${valor} creditado.`);
      }
    } else {
      console.log('Opção inválida.');
    }

    console.log();

    const continuar = prompt('Deseja continuar? (S/N): ');
    if (continuar.toLowerCase() === 'n') {
      return;
    } else {
      console.log('Valor inserido.');
    }

    console.log();
    exibirMenu();
    selecionarOpcao();
  }
}

class ContaPoupanca {
  constructor(nomeTitular, saldo, dataAniversario) {
    this.nomeTitular = nomeTitular;
    this.saldo = saldo;
    this.dataAniversario = dataAniversario;
  }

  realizarMovimento() {
    console.log('Conta Poupança - "!lesma detalhista!"');
    console.log(`Nome: ${this.nomeTitular}`);
    console.log(`Saldo: $${this.saldo}`);
    console.log(`Data de Aniversário: ${this.dataAniversario}`);
    console.log();

    let movimentos = 0;
    while (movimentos < 10) {
      const tipoMovimento = prompt('Débito ou Crédito? (D/C): ');

      if (tipoMovimento.toLowerCase() === 'd') {
        const valor = parseFloat(prompt('Quanto deseja inserir? $'));
        if (valor < 0) {
          console.log('Valor inválido.');
        } else if (valor > this.saldo) {
          console.log('Saldo insuficiente.');
        } else {
          this.saldo -= valor;
          console.log(`Valor de $${valor} debitado.`);
        }
      } else if (tipoMovimento.toLowerCase() === 'c') {
        const valor = parseFloat(prompt('Quanto deseja inserir? $'));
        if (valor < 0) {
          console.log('Valor inválido.');
        } else {
          this.saldo += valor;
          console.log(`Valor de $${valor} creditado.`);
        }
      } else {
        console.log('Opção inválida.');
      }

      movimentos++;

      console.log();
      const continuar = prompt('Deseja continuar? (S/N): ');
      if (continuar.toLowerCase() === 'n') {
        return;
      } else {
        console.log('Valor inserido.');
      }

      console.log();
    }

    console.log('Limite de movimentos alcançado.');
    console.log();
    exibirMenu();
    selecionarOpcao();
  }
}

class ContaEspecial {
  constructor(nomeTitular, saldo, dataAniversario, numero, cpf) {
    this.nomeTitular = nomeTitular;
    this.saldo = saldo;
    this.dataAniversario = dataAniversario;
    this.numero = numero;
    this.cpf = cpf;
    this.ativado = true;
  }

  realizarMovimento() {
    console.log('Conta Especial - "!lesma fortificada!"');
    console.log(`Nome: ${this.nomeTitular}`);
    console.log(`Saldo: $${this.saldo}`);
    console.log(`Data de Aniversário: ${this.dataAniversario}`);
    console.log(`Número: ${this.numero}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Status: ${this.ativado ? 'Ativado' : 'Desativado'}`);
    console.log();

    const tipoMovimento = prompt('Débito ou Crédito? (D/C): ');

    if (tipoMovimento.toLowerCase() === 'd') {
      const valor = parseFloat(prompt('Quanto deseja inserir? $'));
      if (valor < 0) {
        console.log('Valor inválido.');
      } else if (valor > this.saldo) {
        console.log('Saldo insuficiente.');
      } else {
        this.saldo -= valor;
        console.log(`Valor de $${valor} debitado.`);
      }
    } else if (tipoMovimento.toLowerCase() === 'c') {
      const valor = parseFloat(prompt('Quanto deseja inserir? $'));
      if (valor < 0) {
        console.log('Valor inválido.');
      } else {
        this.saldo += valor;
        console.log(`Valor de $${valor} creditado.`);
      }
    } else {
      console.log('Opção inválida.');
    }

    console.log();

    const continuar = prompt('Deseja continuar? (S/N): ');
    if (continuar.toLowerCase() === 'n') {
      return;
    } else {
      console.log('Valor inserido.');
    }

    console.log();
    exibirMenu();
    selecionarOpcao();
  }
}

function exibirMenu() {
  console.log('---------------------------------------');
  console.log('      Slug Thug - "Uma lesma Economizadora."');
  console.log('---------------------------------------');
  console.log('Opções:');
  console.log('1. Conta Poupança');
  console.log('2. Conta Corrente');
  console.log('3. Conta Especial');
  console.log('4. Sair');
  console.log('---------------------------------------');
}

function selecionarOpcao() {
  const opcao = parseInt(prompt('Escolha uma opção: '));

  switch (opcao) {
    case 1:
      const contaPoupanca = new ContaPoupanca('Nicolás', 3500, '07/10/1890');
      contaPoupanca.realizarMovimento();
      break;
    case 2:
      const contaCorrente = new ContaCorrente('Nicolás', 3500, '07/10/1890');
      contaCorrente.realizarMovimento();
      break;
    case 3:
      const contaEspecial = new ContaEspecial(
        'Michael',
        3500,
        '12/05/1970',
        '11+ 55 5038 94875',
        '555.777.878.123.77'
      );
      contaEspecial.realizarMovimento();
      break;
    case 4:
      console.log('Encerrando o programa...');
      return;
    default:
      console.log('Opção inválida.');
  }

  console.log();
  exibirMenu();
  selecionarOpcao();
}

exibirMenu();
selecionarOpcao();
