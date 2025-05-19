API de Gerenciamento de Produtos
Descrição Geral
Esta API permite o gerenciamento de produtos em um sistema, possibilitando operações como cadastro, consulta, atualização e remoção de produtos. É ideal para quem está começando a aprender sobre APIs RESTful e deseja praticar conceitos básicos de programação.

Objetivos
Facilitar o controle de produtos em uma aplicação.
Proporcionar um ambiente de aprendizado para iniciantes.
Demonstrar boas práticas de desenvolvimento de APIs.
Funcionalidades
Cadastrar produtos
Listar todos os produtos
Consultar produto por ID
Atualizar informações de um produto
Remover produto
Tecnologias Utilizadas
Linguagem: Node.js (JavaScript)
Framework: Express.js
Banco de Dados: MongoDB
Ferramentas: Postman (para testes), npm
Instalação
Clone o repositório:
git clone https://github.com/oiyancode/API_PRD_MENAGED.git
Acesse a pasta do projeto e instale as dependências:
cd API_PRD_MENAGED
npm install
Configure o arquivo .env:
echo "MONGODB_URI=mongodb://localhost:27017/nome_do_banco" > .env
echo "PORT=3000" >> .env
Execute a aplicação:
npm run dev
# ou
npm start
Se encontrar problemas, verifique se o MongoDB está em execução e se as variáveis de ambiente estão corretas.

Exemplos de Requisições e Respostas
1. Cadastrar Produto
Requisição:

POST /produtos
Content-Type: application/json

{
  "nome": "Camiseta",
  "preco": 49.90,
  "estoque": 100
}
Resposta:

{
  "id": "123",
  "nome": "Camiseta",
  "preco": 49.90,
  "estoque": 100
}
2. Listar Produtos
Requisição:

GET /produtos
Resposta:

[
  {
     "id": "123",
     "nome": "Camiseta",
     "preco": 49.90,
     "estoque": 100
  }
]
3. Consultar Produto por ID
Requisição:

GET /produtos/123
Resposta:

{
  "id": "123",
  "nome": "Camiseta",
  "preco": 49.90,
  "estoque": 100
}
4. Atualizar Produto
Requisição:

PUT /produtos/123
Content-Type: application/json

{
  "nome": "Camiseta Polo",
  "preco": 59.90,
  "estoque": 80
}
Resposta:

{
  "id": "123",
  "nome": "Camiseta Polo",
  "preco": 59.90,
  "estoque": 80
}
5. Remover Produto
Requisição:

DELETE /produtos/123
Resposta:

{
  "mensagem": "Produto removido com sucesso."
}
Lista de Endpoints
Método	Endpoint	Descrição
POST	/produtos	Cadastrar novo produto
GET	/produtos	Listar todos os produtos
GET	/produtos/{id}	Consultar produto por ID
PUT	/produtos/{id}	Atualizar produto por ID
DELETE	/produtos/{id}	Remover produto por ID
Sinta-se à vontade para contribuir ou tirar dúvidas!
