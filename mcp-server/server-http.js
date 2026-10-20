import { createServer } from 'node:http';
import { createMcpHandler } from '@modelcontextprotocol/server';
import { McpServer } from '@modelcontextprotocol/server';
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
      description: 'Lista os restaurantes do DeliveryFast',
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
    async ({ nome }) => ({
      content: [{
        type: 'text',
        text: JSON.stringify(
          restaurantes.filter(r =>
            r.nome.toLowerCase().includes(nome.toLowerCase())
          ),
          null,
          2
        )
      }]
    })
  );

  return server;
}

const handler = createMcpHandler(criarServidor);

const PORT = Number(process.env.PORT || 3000);

createServer(async (req, res) => {
  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  if (req.url !== '/mcp') {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: ['GET', 'HEAD'].includes(req.method)
      ? undefined
      : req,
    duplex: 'half'
  });

  try {
    const response = await handler.fetch(request);

    res.writeHead(
      response.status,
      Object.fromEntries(response.headers)
    );

    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    console.error(error);
    res.writeHead(500);
    res.end('Internal server error');
  }
}).listen(PORT, '0.0.0.0', () => {
  console.log(`MCP HTTP iniciado na porta ${PORT}`);
});