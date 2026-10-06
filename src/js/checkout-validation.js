export function validarCheckout(pedido) {
    if (!pedido || !Array.isArray(pedido.itens) || pedido.itens.length === 0) {
        return { valido: false, erro: "O carrinho não pode estar vazio." };
    }

    if (!pedido.nome || pedido.nome.trim() === "") {
        return { valido: false, erro: "O nome do cliente é obrigatório." };
    }

    if (!pedido.endereco || pedido.endereco.trim() === "") {
        return { valido: false, erro: "O endereço de entrega é obrigatório." };
    }

    if (typeof pedido.total !== "number" || pedido.total <= 0) {
        return { valido: false, erro: "O valor total deve ser maior que zero." };
    }

    return { valido: true, erro: null };
}