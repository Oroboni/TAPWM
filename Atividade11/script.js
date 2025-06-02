function Retangulo(x, y) {
    this.base = x;
    this.altura = y;
  
    this.calcularArea = function () {
      return this.base * this.altura;
    };
  }
  
  function calcularArea() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    const ret = new Retangulo(base, altura);
    document.getElementById("areaResultado").innerText = `Área: ${ret.calcularArea()} m²`;
  }
  
  class Conta {
    constructor() {
      this._nome = "";
      this._banco = "";
      this._numero = "";
      this._saldo = 0;
    }
  
    set nome(val) { this._nome = val; }
    get nome() { return this._nome; }
  
    set banco(val) { this._banco = val; }
    get banco() { return this._banco; }
  
    set numero(val) { this._numero = val; }
    get numero() { return this._numero; }
  
    set saldo(val) { this._saldo = val; }
    get saldo() { return this._saldo; }
  }
  
  class Corrente extends Conta {
    constructor() {
      super();
      this._saldoEspecial = 0;
    }
  
    set saldoEspecial(val) { this._saldoEspecial = val; }
    get saldoEspecial() { return this._saldoEspecial; }
  }
  
  class Poupanca extends Conta {
    constructor() {
      super();
      this._juros = 0;
      this._dataVencimento = "";
    }
  
    set juros(val) { this._juros = val; }
    get juros() { return this._juros; }
  
    set dataVencimento(val) { this._dataVencimento = val; }
    get dataVencimento() { return this._dataVencimento; }
  }
  
  function mostrarContaCorrente() {
    const conta = new Corrente();
    conta.nome = document.getElementById("nomeCorrente").value;
    conta.banco = document.getElementById("bancoCorrente").value;
    conta.numero = document.getElementById("numeroCorrente").value;
    conta.saldo = parseFloat(document.getElementById("saldoCorrente").value);
    conta.saldoEspecial = parseFloat(document.getElementById("especialCorrente").value);
  
    document.getElementById("resultadoCorrente").innerText =
      `Correntista: ${conta.nome} | Banco: ${conta.banco} | Conta: ${conta.numero} | ` +
      `Saldo: R$${conta.saldo} | Especial: R$${conta.saldoEspecial}`;
  }
  
  function mostrarContaPoupanca() {
    const conta = new Poupanca();
    conta.nome = document.getElementById("nomePoupanca").value;
    conta.banco = document.getElementById("bancoPoupanca").value;
    conta.numero = document.getElementById("numeroPoupanca").value;
    conta.saldo = parseFloat(document.getElementById("saldoPoupanca").value);
    conta.juros = parseFloat(document.getElementById("jurosPoupanca").value);
    conta.dataVencimento = document.getElementById("vencimentoPoupanca").value;
  
    document.getElementById("resultadoPoupanca").innerText =
      `Correntista: ${conta.nome} | Banco: ${conta.banco} | Conta: ${conta.numero} | ` +
      `Saldo: R$${conta.saldo} | Juros: ${conta.juros}% | Vencimento: ${conta.dataVencimento}`;
  }
  