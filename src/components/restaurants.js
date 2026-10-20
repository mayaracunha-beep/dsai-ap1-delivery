import { abrirCardapio } from './menu.js';

export const restaurantes = [
  { id: 1, name: 'Burger House', category: 'Hambúrgueres suculentos', time: '30-40 min', badge: 'Entrega grátis' },
  { id: 2, name: 'Bella Italia', category: 'Massas e Pizzas artesanais', time: '40-50 min', badge: 'Entrega grátis' },
  { id: 3, name: 'Sushi Kai', category: 'Comida japonesa fresca', time: '25-35 min', badge: 'Entrega grátis' },
  { id: 4, name: 'Sabor do Brasil', category: 'Comida típica e caseira', time: '35-45 min', badge: 'Entrega grátis' }
];

export function renderRestaurantes() {
  const container = document.getElementById('app');
  const btnInicio = document.getElementById('btn-inicio');

  // Esconde o botão "Início" na tela principal
  if (btnInicio) {
    btnInicio.classList.add('hidden');
  }

  // Remove o widget flutuante se o usuário voltar para a lista de restaurantes
  const widgetCarrinho = document.getElementById('cart-floating-widget');
  if (widgetCarrinho) {
    widgetCarrinho.innerHTML = '';
  }

  const listaHtml = restaurantes.map(rest => `
    <div onclick="verCardapio(${rest.id})" class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition border border-gray-100 flex flex-col justify-between">
      <div>
        <h3 class="text-lg font-bold text-gray-900">${rest.name}</h3>
        <p class="text-sm text-gray-500 mt-1">${rest.category}</p>
      </div>
      <div class="mt-4 flex gap-2">
        <span class="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded font-medium">${rest.badge}</span>
        <span class="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-0.5 rounded font-medium">${rest.time}</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <h2 class="text-xl font-bold mb-4 text-gray-800">Restaurantes Disponíveis</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${listaHtml}
    </div>
  `;
}

window.verCardapio = (restaurantId) => {
  abrirCardapio(restaurantId);
};
