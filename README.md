# 04-dwbe-node-poo

Exemplos para executar cada algoritmo rapidamente:

```bash
node 01-classe.js
```

```bash
node 02-classe-anonima.js
```

Exemplos alternativos para executar cada algoritmo rapidamente:

```bash
node 01*
```

```bash
node 02*
```

---

# Exercícios

## 1 - Cadastro de aluno

Crie uma classe `Aluno` com os atributos `nome`, `idade` e `notas`.

- O construtor deve receber `nome` e `idade`.
- A classe deve ter um método `adicionarNota(nota)` para armazenar uma nota.
- A classe deve ter um método `media()` para calcular a média das notas.
- Peça para o usuário informar o nome, a idade e 3 notas pelo teclado.
- Exiba a média final do aluno.

Exemplo de saída:

```bash
Informe o nome do aluno: Maria
Informe a idade do aluno: 18
Informe a nota 1: 8
Informe a nota 2: 9
Informe a nota 3: 7
A média de Maria é: 8
```

## 2 - Conta bancária

Crie uma classe `ContaBancaria` com os atributos `titular`, `saldo` e `numeroConta`.

- O construtor deve receber `titular` e `saldoInicial`.
- Crie os métodos `depositar(valor)`, `sacar(valor)` e `consultarSaldo()`.
- O método `sacar(valor)` deve validar se o saldo é suficiente antes de realizar a operação.
- Solicite ao usuário o nome do titular, o número da conta e o saldo inicial.
- Depois, peça para que o usuário informe um valor para depósito e outro para saque.
- Exiba o saldo final.

Exemplo de saída:

```bash
Informe o titular da conta: João
Informe o número da conta: 1234
Informe o saldo inicial: 500
Informe o valor do depósito: 150
Informe o valor do saque: 200
Saldo atual: 450
```

## 3 - Produto em estoque

Crie uma classe `Produto` com os atributos `nome`, `preco` e `quantidadeEmEstoque`.

- O construtor deve receber `nome`, `preco` e `quantidadeEmEstoque`.
- Crie os métodos `adicionarEstoque(quantidade)` e `removerEstoque(quantidade)`.
- Crie um método `valorTotalEmEstoque()` que retorne o valor total do estoque.
- Peça ao usuário para informar os dados do produto e a quantidade de itens comprados ou vendidos.
- Exiba o valor total do estoque atualizado.

Exemplo de saída:

```bash
Informe o nome do produto: Teclado
Informe o preço do produto: 120
Informe a quantidade em estoque: 10
Informe a quantidade a adicionar ao estoque: 5
Valor total em estoque: 1800
```

## 4 - Carrinho de compras

Crie uma classe `Item` para representar um item com `nome`, `preco` e `quantidade`.

- Crie uma classe `Carrinho` para armazenar vários itens.
- O carrinho deve ter um método `adicionarItem(item)` e `totalCompra()`.
- O usuário deve informar os dados de 3 itens: nome, preço e quantidade.
- Ao final, mostre o valor total da compra.

Exemplo de saída:

```bash
Informe o nome do item 1: Mouse
Informe o preço do item 1: 45
Informe a quantidade do item 1: 2
Informe o nome do item 2: Monitor
Informe o preço do item 2: 600
Informe a quantidade do item 2: 1
Total da compra: 690
```

## 5 - Pessoa com endereço

Crie uma classe `Endereco` com os atributos `rua`, `cidade` e `cep`.

- Crie uma classe `Pessoa` com os atributos `nome`, `idade` e `endereco`.
- A classe `Pessoa` deve ter um método `exibir()` para mostrar os dados da pessoa.
- Peça ao usuário para informar nome, idade, rua, cidade e CEP.
- Exiba os dados da pessoa formatados.

Exemplo de saída:

```bash
Informe o nome da pessoa: Carlos
Informe a idade da pessoa: 27
Informe a rua: Rua das Flores
Informe a cidade: São Paulo
Informe o CEP: 01000-000
Nome: Carlos
Idade: 27
Endereço: Rua das Flores, São Paulo - 01000-000
```

### Dica

- Crie uma pasta `util`. 
- Dentro dessa pasta, crie um arquivo `teclado.js` como módulo para ser importado nos arquivos de seus exercícios. 
- Nesse arquivo, escreva o algoritmo para ler dados a partir do teclado.
-- Use o módulo `readline` do Node.js para ler os dados informados pelo usuário via teclado.

```javascript
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Lê uma string informada pelo usuário no teclado.
export async function lerTeclado(texto) {
    const rl = readline.createInterface({ input, output });
    try {
        const resposta = await rl.question(texto);
        return resposta;
    } finally {
        rl.close();
    }
}
```
