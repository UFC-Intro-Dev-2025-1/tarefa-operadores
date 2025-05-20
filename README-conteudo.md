# Operadores

<!-- toc -->

-   [Operadores em JavaScript](#operadores-em-javascript)
    -   [Operadores aritméticos](#operadores-aritméticos)
    -   [Operadores de atribuição](#operadores-de-atribuição)
    -   [Operadores de comparação](#operadores-de-comparação)
    -   [Operadores lógicos](#operadores-lógicos)
    -   [Operadores de tipo](#operadores-de-tipo)
-   [Matemática em JavaScript](#matemática-em-javascript)
    -   [Números em JavaScript](#números-em-javascript)
    -   [Operações matemáticas básicas](#operações-matemáticas-básicas)
    -   [A ordem das operações](#a-ordem-das-operações)
    -   [A classe Math](#a-classe-math)
    -   [Exemplos de uso de Math](#exemplos-de-uso-de-math)
-   [Referências](#referências)

<!-- toc -->

## Operadores em JavaScript

Operadores são usados para realizar operações em variáveis e valores. JavaScript possui diferentes tipos de operadores, como aritméticos, de atribuição, comparação, lógicos e de tipo.

### Operadores aritméticos

Os operadores aritméticos são usados para realizar operações matemáticas entre números.

| Operador | Descrição     | Exemplo              | Resultado |
| -------- | ------------- | -------------------- | --------- |
| +        | Adição        | `let soma = 5 + 2;`  | 7         |
| -        | Subtração     | `let sub = 5 - 2;`   | 3         |
| \*       | Multiplicação | `let mult = 5 * 2;`  | 10        |
| /        | Divisão       | `let div = 5 / 2;`   | 2.5       |
| %        | Módulo        | `let resto = 5 % 2;` | 1         |
| ++       | Incremento    | `let x = 5; x++;`    | 6         |
| --       | Decremento    | `let y = 5; y--;`    | 4         |

### Operadores de atribuição

Os operadores de atribuição atribuem valores às variáveis.

| Operador | Exemplo       | Igual a      |
| -------- | ------------- | ------------ |
| =        | `let a = 10;` | 10           |
| +=       | `a += 5;`     | `a = a + 5;` |
| -=       | `a -= 2;`     | `a = a - 2;` |
| \*=      | `a *= 3;`     | `a = a * 3;` |
| /=       | `a /= 2;`     | `a = a / 2;` |
| %=       | `a %= 3;`     | `a = a % 3;` |

### Operadores de comparação

Usados para comparar dois valores e retornar verdadeiro ou falso.

| Operador | Descrição              | Exemplo     | Resultado |
| -------- | ---------------------- | ----------- | --------- |
| ==       | Igual a                | `5 == "5"`  | true      |
| ===      | Estritamente igual     | `5 === "5"` | false     |
| !=       | Diferente de           | `5 != "5"`  | false     |
| !==      | Estritamente diferente | `5 !== "5"` | true      |
| >        | Maior que              | `5 > 2`     | true      |
| <        | Menor que              | `5 < 2`     | false     |
| >=       | Maior ou igual a       | `5 >= 5`    | true      |
| <=       | Menor ou igual a       | `5 <= 2`    | false     |

### Operadores lógicos

Permitem combinar valores booleanos.

| Operador | Descrição | Exemplo              | Resultado |
| -------- | --------- | -------------------- | --------- |
| &&       | E (AND)   | `(5 > 2 && 3 < 4)`   | true      |
| \|\|     | OU (OR)   | `(5 < 2 \|\| 3 < 4)` | true      |
| !        | NÃO (NOT) | `!(5 == 5)`          | false     |

### Operadores de tipo

Permitem verificar ou converter tipos de dados.

| Operador   | Descrição                                 | Exemplo                   | Resultado  |
| ---------- | ----------------------------------------- | ------------------------- | ---------- |
| typeof     | Retorna o tipo                            | `typeof "texto"`          | "string"   |
| instanceof | Retorna verdadeiro se objeto é de um tipo | `objeto instanceof Array` | true/false |

## Matemática em JavaScript

### Números em JavaScript

Em JavaScript, todos os números são representados como números de ponto flutuante de 64 bits. Não há distinção entre inteiros e números de ponto flutuante.

```js
let idade = 25;
let altura = 1.75;
```

### Operações matemáticas básicas

Você pode realizar operações matemáticas básicas usando operadores aritméticos:

```js
let soma = 10 + 5; // 15
let subtracao = 10 - 5; // 5
let multiplicacao = 10 * 5; // 50
let divisao = 10 / 5; // 2
let resto = 10 % 3; // 1
```

### A ordem das operações

Assim como na matemática tradicional, a ordem das operações é importante. Parênteses podem ser usados para definir a ordem:

```js
let resultado1 = 3 + 4 * 5; // 23
let resultado2 = (3 + 4) * 5; // 35
```

### A classe Math

O objeto `Math` fornece propriedades e métodos para constantes e funções matemáticas.

```js
let raizQuadrada = Math.sqrt(16); // 4
let potencia = Math.pow(2, 3); // 8
let aleatorio = Math.random(); // Número aleatório entre 0 e 1
let arredondado = Math.round(4.7); // 5
let menor = Math.min(1, 2, 3); // 1
let maior = Math.max(1, 2, 3); // 3
```

### Exemplos de uso de Math

```js
let preco = 19.99;
let precoArredondado = Math.round(preco); // 20

let numeroAleatorio = Math.floor(Math.random() * 10); // Inteiro entre 0 e 9
```

## Referências

[qxcodefup/arcade](https://github.com/qxcodefup/arcade)  
[W3Schools: JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)  
[MDN: Matemática em JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Math)
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math
