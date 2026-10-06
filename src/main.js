import { renderRestaurantes } from './components/restaurants.js';
import { renderPedidos } from './components/orders.js';
import { obterUsuarioLogado, sairUsuario } from './js/database.js';

// Atualiza a área do utilizador na barra de navegação
export function atualizarNavegacao() {
  const usuario = obterUsuarioLogado();
  const areaUsuario = document.getElementById('area-usuario');

  if (areaUsuario) {
    if (usuario) {
      areaUsuario.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2 text-gray-800 font-semibold bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
            <span class="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
              ${usuario.nome.charAt(0).toUpperCase()}
            </span>
            <span class="text-sm">Olá, ${usuario.nome.split(' ')[0]}</span>
          </div>

          <button onclick="window.sairDaConta()" class="text-sm text-red-600 hover:underline font-medium">
            Sair
          </button>
        </div>
      `;
    } else {
      areaUsuario.innerHTML = `
        <button onclick="window.abrirTelaCadastro()" class="text-gray-700 hover:text-red-600 font-medium transition-colors">
          Cadastrar
        </button>
      `;
    }
  }
}

// Função para voltar à tela inicial
window.voltarParaRestaurantes = () => {
  renderRestaurantes();
  const btnInicio = document.getElementById('btn-inicio');
  if (btnInicio) {
    btnInicio.classList.add('hidden');
  }
  atualizarNavegacao();
};
window.sairDaConta = () => {
  sairUsuario();
  atualizarNavegacao();
  renderRestaurantes();
  alert('Você saiu da conta. Agora outro usuário pode se cadastrar.');
};


// Função para abrir a tela de Pedidos
window.verPedidos = () => {
  renderPedidos();
  const btnInicio = document.getElementById('btn-inicio');
  if (btnInicio) {
    btnInicio.classList.remove('hidden');
  }
};

// Função para abrir a tela de Cadastro
window.abrirTelaCadastro = async () => {
  const container = document.getElementById('app');
  const btnInicio = document.getElementById('btn-inicio');

  if (container) {
    try {
      const { renderRegister, initRegisterEvents } = await import('./components/register.js');
      container.innerHTML = renderRegister();

      if (btnInicio) {
        btnInicio.classList.remove('hidden');
      }

      initRegisterEvents(() => {
        atualizarNavegacao();
        window.voltarParaRestaurantes();
      });
    } catch (err) {
      console.error('Erro ao carregar a tela de cadastro:', err);
    }
  }
};

// Arranque da aplicação
document.addEventListener('DOMContentLoaded', () => {
  renderRestaurantes();
  atualizarNavegacao();
});