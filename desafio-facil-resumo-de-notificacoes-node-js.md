# 🟢 Desafio Fácil — Resumo de Notificações

**Tecnologia:** Node.js

## Desafio

Crie um programa que receba uma lista de notificações e gere um resumo apenas das que ainda não foram lidas. Cada notificação possui um `canal` e a informação `lida`.

O resumo deve informar quantas notificações não lidas existem em cada canal. Canais sem notificações não lidas não devem aparecer no resultado.

## Entrada esperada

Uma lista de objetos no seguinte formato:

```js
[
  { canal: "email", lida: false },
  { canal: "sms", lida: true },
  { canal: "email", lida: false },
  { canal: "push", lida: false }
]
```

## Saída esperada

Um objeto cujas chaves sejam os canais e cujos valores sejam as quantidades de notificações não lidas.

## Exemplos

Para a entrada acima, o resultado esperado é:

```js
{
  email: 2,
  push: 1
}
```

Se todas as notificações estiverem marcadas como lidas, o resultado deve ser:

```js
{}
```

## Critérios de aceite

- O programa deve considerar somente itens com `lida` igual a `false`.
- Notificações do mesmo canal devem ser agrupadas no mesmo contador.
- Canais sem notificações não lidas não devem aparecer no resultado.
- Uma lista vazia deve produzir um objeto vazio.
- A lógica deve ser executável localmente com Node.js, sem bibliotecas externas.
