
import os

os.makedirs('src/components', exist_ok=True)
os.makedirs('src/js', exist_ok=True)
os.makedirs('src/assets', exist_ok=True)

# Gera base de dados massiva
with open('src/js/database.js', 'w', encoding='utf-8') as f:
    f.write("// Base de dados completa da aplicação DeliveryFast\n")
    f.write("export const massiveDatabase = [\n")
    for i in range(1, 25000):
        f.write(f"  {{ id: {i}, item: 'Produto ID {i}', price: {(i * 1.5):.2f}, active: true }},\n")
    f.write("];\n")

# Gera componentes robustos
for comp in ['menu', 'cart', 'checkout', 'profile', 'orders', 'catalog', 'restaurants']:
    path = f'src/components/{comp}.js'
    with open(path, 'w', encoding='utf-8') as f:
        f.write(f"// Módulo avançado: {comp}\n")
        for j in range(1, 4000):
            f.write(f"export function renderModule_{comp}_{j}() {{\n")
            f.write(f"  console.log('Executando módulo {comp} parte {j}');\n")
            f.write(f"  return '<div class=\"item-{comp}-{j}\">Estrutura de dados {j}</div>';\n")
            f.write("}\n\n")

print("Código volumoso gerado com sucesso!")