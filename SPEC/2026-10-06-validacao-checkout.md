# SPEC — Validação do Checkout

Data: 2026-10-06

## Objetivo

Adicionar regras de validação ao fluxo de checkout do DeliveryFast para impedir a finalização de pedidos com dados obrigatórios ausentes ou inválidos.

## Motivação

O fluxo de compra precisa validar os dados do pedido antes da confirmação, evitando pedidos incompletos e melhorando a confiabilidade da aplicação.

## Critérios de aceitação

1. O checkout deve rejeitar carrinho vazio.
2. O checkout deve exigir nome do cliente.
3. O checkout deve exigir endereço de entrega.
4. O checkout deve rejeitar valor total igual ou menor que zero.
5. Um pedido com todos os dados válidos deve ser aceito.
6. As regras devem possuir testes automatizados.

## Fora do escopo

- Integração com gateway de pagamento real.
- Cadastro de cartão.
- Integração com banco de dados externo.
- Autenticação de usuário.
- Rastreamento real do entregador.

## Testes esperados

Devem existir testes para:

- carrinho vazio;
- nome ausente;
- endereço ausente;
- valor inválido;
- pedido válido.