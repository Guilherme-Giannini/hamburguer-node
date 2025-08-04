const express = require('express');
const uuid = require('uuid');
const port = 3000;
const app = express();
app.use(express.json());

const pedidos = [];

app.post('/pedidos', (req, res) => {
    const {order, clientName, price} = req.body;
    const pedido = {
        id: uuid.v4(),
        order,
        clientName,
        price
    };
    pedidos.push(pedido); 
    res.status(201).json(pedido);
});

app.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

app.put('/pedidos/:id', (req, res) => {
    const {id} = req.params;
    const {order, clientName, price} = req.body;
    const pedidoIndex = pedidos.findIndex(p => p.id === id);

    if (pedidoIndex === -1) {
        return res.status(404).json({message: 'Pedido não encontrado'});
    }

    pedidos[pedidoIndex] = {
        id,
        order,
        clientName,
        price
    };

    res.json(pedidos[pedidoIndex]);
});

app.delete('/pedidos/:id', (req, res) => {
    const {id} = req.params;
    const pedidoIndex = pedidos.findIndex(p => p.id === id);
    if (pedidoIndex === -1) {
        return res.status(404).json({message: 'Pedido não encontrado'});
    }  
    pedidos.splice(pedidoIndex, 1);
    res.status(204).send();
});

app.get('/pedidos/:id', (req, res) => {
    const {id} = req.params;
    const pedido = pedidos.find(p => p.id === id);
    if (!pedido) {
        return res.status(404).json({message: 'Pedido não encontrado'});
    }
    res.json(pedido);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

