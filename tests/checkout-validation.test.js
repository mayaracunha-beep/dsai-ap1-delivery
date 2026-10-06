import { validarCheckout } from "../src/js/checkout-validation.js";

function testar(descricao, condicao) {
    if (!condicao) {
        throw new Error(`FALHOU: ${descricao}`);
    }

    console.log(`PASSOU: ${descricao}`);
}

const pedidoValido = {
    itens: [{ id: 1, nome: "Hambúrguer", quantidade: 1 }],
    nome: "Mayara",
    endereco: "Rua de teste, 100",
    total: 25.90
};

testar(
    "rejeita carrinho vazio",
    validarCheckout({ ...pedidoValido, itens: [] }).valido === false
);

testar(
    "rejeita nome ausente",
    validarCheckout({ ...pedidoValido, nome: "" }).valido === false
);

testar(
    "rejeita endereco ausente",
    validarCheckout({ ...pedidoValido, endereco: "" }).valido === false
);

testar(
    "rejeita total igual ou menor que zero",
    validarCheckout({ ...pedidoValido, total: 0 }).valido === false
);

testar(
    "aceita pedido valido",
    validarCheckout(pedidoValido).valido === true
);

console.log("Todos os testes de checkout foram executados com sucesso.");