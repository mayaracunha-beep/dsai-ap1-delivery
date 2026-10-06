import { cadastrarUsuario } from '../js/database.js';

export function renderRegister() {
  return `
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 class="text-2xl font-bold mb-4 text-center text-gray-800">Criar Conta</h2>
      
      <form id="form-register" class="flex flex-col gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input type="text" id="reg-nome" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Seu nome">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input type="email" id="reg-email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="seu@email.com">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
          <input type="password" id="reg-senha" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="••••••••">
        </div>

        <button type="submit" class="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition-colors mt-2">
          Cadastrar
        </button>
      </form>
    </div>
  `;
}

export function initRegisterEvents(onSuccess) {
  const form = document.getElementById('form-register');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('reg-nome').value;
      const email = document.getElementById('reg-email').value;
      const senha = document.getElementById('reg-senha').value;

      try {
        // Tenta cadastrar
        cadastrarUsuario({ nome, email, senha });
        alert('CADASTRADO COM SUCESSO!');

        if (typeof onSuccess === 'function') {
          onSuccess();
        }
      } catch (error) {
        // Captura o erro do e-mail duplicado e exibe o alerta na tela
        alert(error.message);
      }
    });
  }
}