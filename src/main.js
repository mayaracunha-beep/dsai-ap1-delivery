import { renderRestaurantes } from './components/restaurants.js';
import { renderPedidos } from './components/orders.js';

window.verPedidos = () => {
  renderPedidos();
};

document.addEventListener('DOMContentLoaded', () => {
  renderRestaurantes();
});