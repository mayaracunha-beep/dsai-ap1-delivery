# DSAI - Atividade Prática 1 (AP1)

## Dupla
- Mayara Cunha da Silva
- Matheus Raiol

## Aplicação
- **Nome:** DeliveryFast
- **Descrição:** Aplicativo web de delivery de comida desenvolvido com SDD (Spec-Driven Development) e apoio de IA.

## Tecnologias (Stack)
- HTML5
- Tailwind CSS (via CDN)
- JavaScript
- Git / GitHub
- Netlify

## Ferramentas de IA Utilizadas
- **Gemini:** apoio na geração de código, especificações e estruturação de prompts.
- **ChatGPT:** apoio na revisão da entrega, documentação e validação dos requisitos da AP1.

## 🚀 Acesso à Aplicação

**URL Pública:** https://admirable-quokka-46ca6a.netlify.app/

A aplicação está publicada no Netlify e pode ser acessada diretamente pelo endereço acima.

## Como executar o projeto

O DeliveryFast é uma aplicação web desenvolvida com HTML, JavaScript e Tailwind CSS.

Para executar localmente:

1. Clone o repositório.
2. Acesse a pasta do projeto.
3. Abra o arquivo `src/index.html` em um navegador.

A versão publicada está disponível em:

https://admirable-quokka-46ca6a.netlify.app/

## Testes automatizados

O projeto possui testes automatizados para as regras de validação do checkout.

Para executar:

```bash
node tests/checkout-validation.test.js
```

Os testes verificam:

- rejeição de carrinho vazio;
- obrigatoriedade do nome do cliente;
- obrigatoriedade do endereço;
- rejeição de valor total inválido;
- aceitação de um pedido válido.

Resultado atual: **5 testes executados com sucesso**.

Contagem atual dos testes pelo cloc:

| Linguagem | Arquivos | Código |
|---|---:|---:|
| JavaScript | 1 | 34 |

## Especificações

As especificações utilizadas no desenvolvimento estão armazenadas no diretório `SPEC/`.

Atualmente estão documentadas:

- `2026-10-01-visao-geral.md`
- `2026-10-06-validacao-checkout.md`
- `2026-10-06-cardapio-visual.md`

A especificação de validação do checkout foi versionada antes da implementação e dos respectivos testes.

A especificação do cardápio visual foi versionada antes da implementação das melhorias visuais correspondentes.

## Registro de prompts

Os registros das interações utilizadas durante o desenvolvimento estão armazenados no diretório:

`prompts/sessoes/`

Os registros devem corresponder às interações efetivamente utilizadas durante o desenvolvimento.

## Contagem de Linhas (cloc)

A contagem foi realizada utilizando o comando definido no enunciado da AP1:

```bash
cloc . --vcs=git --exclude-dir=node_modules,vendor,dist,build,prompts --exclude-lang=Markdown,JSON,YAML,CSV,Text,SVG --not-match-f="(lock|\.min\.)"
```

Resultado:

| Linguagem | Arquivos | Linhas em branco | Comentários | Código |
|---|---:|---:|---:|---:|
| JavaScript | 12 | 28.146 | 57 | 137.682 |
| HTML | 1 | 6 | 0 | 31 |
| Python | 1 | 5 | 2 | 20 |
| **TOTAL** | **14** | **28.157** | **59** | **137.733** |

**Resultado bruto do comando oficial do cloc: 137.733 linhas de código.**

> Observação: o repositório contém código gerado e estruturas repetitivas utilizadas na composição da volumetria do projeto. A contagem representa o volume de código versionado segundo o comando oficial da atividade e não a quantidade de linhas escritas manualmente.

### Contagem dos testes

A contagem dos testes foi realizada separadamente:

```bash
cloc tests --exclude-lang=Markdown,JSON,YAML,CSV,Text,SVG
```

| Linguagem | Arquivos | Linhas em branco | Comentários | Código |
|---|---:|---:|---:|---:|
| JavaScript | 1 | 9 | 0 | 34 |
| **TOTAL** | **1** | **9** | **0** | **34** |

Os testes automatizados verificam:

- rejeição de carrinho vazio;
- rejeição de nome ausente;
- rejeição de endereço ausente;
- rejeição de valor total igual ou menor que zero;
- aceitação de pedido válido.

Os cinco testes de validação do checkout estão passando.