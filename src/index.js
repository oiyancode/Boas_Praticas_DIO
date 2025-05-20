const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('API de Gerenciamento de Produtos');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
const Joi = require('joi'); // Biblioteca para validação

let produtos = []; // Array para armazenar os produtos
let idAtual = 1; // ID incremental para os produtos

// Validação de produto
const produtoSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  preco: Joi.number().positive().required(),
  descricao: Joi.string().optional(),
});

// Endpoint para listar todos os produtos
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

// Endpoint para criar um novo produto
app.post('/produtos', (req, res) => {
  const { error, value } = produtoSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ erro: error.details[0].message });
  }

  const novoProduto = { id: idAtual++, ...value };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

// Endpoint para editar um produto
app.put('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { error, value } = produtoSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ erro: error.details[0].message });
  }

  const produtoIndex = produtos.findIndex((p) => p.id === parseInt(id));
  if (produtoIndex === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  produtos[produtoIndex] = { id: parseInt(id), ...value };
  res.json(produtos[produtoIndex]);
});

// Endpoint para deletar um produto
app.delete('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const produtoIndex = produtos.findIndex((p) => p.id === parseInt(id));

  if (produtoIndex === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  produtos.splice(produtoIndex, 1);
  res.status(204).send();
});
