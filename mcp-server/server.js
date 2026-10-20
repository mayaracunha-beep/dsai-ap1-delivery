
import { McpServer } from '@modelcontextprotocol/server';
import { serveStdio } from '@modelcontextprotocol/server/stdio';
import * as z from 'zod/v4';

const restaurantes = [
  { id: 1, nome: 'Burger House', categoria: 'Hambúrgueres' },
  { id: 2, nome: 'Bella Italia', categoria: 'Pizzas e massas' },
  { id: 3, nome: 'Sushi Kai', categoria: 'Japonesa' },
  { id: 4, nome: 'Sabor do Brasil', categoria: 'Brasileira' },
  { id: 5, nome: 'Açaí da Amazônia', categoria: 'Açaí' },
  { id: 6, nome: 'Sabores do Pará', categoria: 'Regional' }
];

function criarServidor() {
  const server = new McpServer({
    name: 'deliveryfast-mcp',
    version: '1.0.0'
  });

  server.registerTool(
    'listar_restaurantes',
    {
      description: 'Lista os restaurantes de exemplo do DeliveryFast',
      inputSchema: z.object({})
    },
    async () => ({
      content: [{
        type: 'text',
        text: JSON.stringify(restaurantes, null, 2)
      }]
    })
  );

  server.registerTool(
    'buscar_restaurante',
    {
      description: 'Busca um restaurante pelo nome',
      inputSchema: z.object({
        nome: z.string()
      })
    },
    async ({ nome }) => {
      const encontrados = restaurantes.filter(r =>
        r.nome.toLowerCase().includes(nome.toLowerCase())
      );

      return {
        content: [{
          type: 'text',
          text: JSON.stringify(encontrados, null, 2)
        }]
      };
    }
  );

  return server;
}

serveStdio(criarServidor);
