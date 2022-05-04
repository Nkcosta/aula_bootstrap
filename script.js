/*Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.*/


class contaBancaria {
    constructor (agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    
    sacar(valor){
        if (valor > this._saldo){
            return console.log ('Operação negada; saldo insuficiente');
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    set saldo(valor) {
    this._saldo = valor;
    }

    get saldo(){
    return this._saldo;
    }
}

class ContaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
        }
}

class ContaUniversitaria extends contaBancaria  {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
        }
}

    sacar(valor) {
        if (valor > 500) {
            return 'Operação negada';
        }

            this.saldo = this._saldo - valor;
            return this._saldo;
        }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);

//O super precisa de uma classe pai, então tenho que colocar o extends contaBancaria
//ctrol+shift+i quando abrir o html na web
//super (classe): mandar tudo o que recebemos para a classe pai, para setar para a contat corrente todas essas propriedades
//Mas temos que ver se temos saldo suficiente para sacar


/*
obs: Sempre que tivermos um get e um set, colocar um anderlaine na frente dos atributos/propriedades, para que o getter e o set possam utilizar o parametro 


new: referencia para o operador recém criado
class: declaração da entidade que estamos nos referindo

[class] - classe: pessoa , conta [class]
[constructor] - atributos/parametros (definição de propriedades/caracteristicas da classe) pessoa: nome, altura, idade, peso 
métodos (funções/ações que pdoe realizar): comer(), pular(), andar(), crescer()
[this] - se refere ao objeto que a gente pretende chamar, que estão dentro do constructor, ex: this.numero, this.tipo, this.agencia
return



estrutura: class pessoa {
idade;
calcularIdade ()
}
return ano-nascimento;
}
}

método: lógica, programação dentro da classe (sequencia de comandos) para que possa ter comportamentos
ex: a classe pessoa, pode ter métodos: nascer, comer e morrer

pilares:
0abstração: representar um objeto de uma forma abstrata, herdada por outra classe

1herança: relacionamento entre classes, no qual uma classe herda (atributos e métodos) de outra classe;

2encapsulamento: (pegar códigos que fazem determinada ação e juntar em um grupo)
combinação de atributos e métodos em uma classe, deixando  visível apenas o necesário para a comunicação entre objetos; ou capacidade de esconder detalhes da implementação do objeto e deixar visível somente o que deve ser acessado publicamente)

3polimorfismo: a mesma chamada pode resultar em mais de um comportamento, dependendo de como é chamado. (capacitade de um objeto que sejam compativeis de se passar por outro em determinadas circunstancias - (reescrita de um método herdado de uma classe sem utilizar nenhum comportamento da classe pai para esse método))

objetos > vão ter atributos e métodos
atributos (caracteristicas próprias)
métodos (ações que executa)
this: se refere ao objeto que é conta bancária
constructor: ficam as minhas variáveis (parametros do que ter na classe)


*/ 

