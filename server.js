
const express = require('express');

const app = express();

app.use(express.json());

let clientes = [];

let veiculos = [];

let proximoIdCliente = 1;
let proximoIdVeiculo = 1;

app.get('/clientes', (req, res) => {
    res.status(200).json(clientes);
});

app.get('/veiculos', (req, res) => {
    res.status(200).json(veiculos);
});

app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'API Locadora funcionando!'
    });
});


app.post('/clientes', (req, res) => {

    const { nome, cpf, telefone, email } = req.body;

    if (!nome || !cpf || !telefone || !email) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios!'
        });
    }

    const cpfExistente = clientes.find(cliente => cliente.cpf === cpf);

    if (cpfExistente) {
        return res.status(400).json({
            mensagem: 'CPF já cadastrado!'
        });
    }

    const novoCliente = {
        id: proximoIdCliente++,
        nome,
        cpf,
        telefone,
        email
    };

    clientes.push(novoCliente);

    res.status(201).json({
        mensagem: 'Cliente cadastrado com sucesso!',
        cliente: novoCliente
    });

});

app.get('/clientes/:id', (req, res) => {

    const id = Number(req.params.id);

    const cliente = clientes.find(cliente => cliente.id === id);

    if (!cliente) {
        return res.status(404).json({
            mensagem: 'Cliente não encontrado!'
        });
    }

    res.status(200).json({
        mensagem: 'Cliente encontrado com sucesso!',
        cliente: cliente
    });

});


app.put('/clientes/:id', (req, res) => {

    const id = Number(req.params.id);

    const cliente = clientes.find(cliente => cliente.id === id);

    if (!cliente) {
        return res.status(404).json({
            mensagem: 'Cliente não encontrado!'
        });
    }

    const { nome, cpf, telefone, email } = req.body;

    if (!nome || !cpf || !telefone || !email) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios!'
        });
    }

    const cpfExistente = clientes.find(
        c => c.cpf === cpf && c.id !== id
    );

    if (cpfExistente) {
        return res.status(400).json({
            mensagem: 'CPF já cadastrado para outro cliente!'
        });
    }

    cliente.nome = nome;
    cliente.cpf = cpf;
    cliente.telefone = telefone;
    cliente.email = email;

    res.status(200).json({
        mensagem: 'Cliente atualizado com sucesso!',
        cliente: cliente
    });

});


app.delete('/clientes/:id', (req, res) => {

    const id = Number(req.params.id);

    const indice = clientes.findIndex(
        cliente => cliente.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Cliente não encontrado!'
        });
    }

    clientes.splice(indice, 1);

    res.status(200).json({
        mensagem: 'Cliente excluído com sucesso!'
    });

});


app.post('/veiculos', (req, res) => {

    const {
        modelo,
        marca,
        placa,
        ano,
        valorDiaria,
        disponivel
    } = req.body;

    if (
        !modelo ||
        !marca ||
        !placa ||
        !ano ||
        valorDiaria === undefined ||
        disponivel === undefined
    ) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios!'
        });
    }

    const placaExistente = veiculos.find(
        veiculo => veiculo.placa === placa
    );

    if (placaExistente) {
        return res.status(400).json({
            mensagem: 'Placa já cadastrada!'
        });
    }

    const novoVeiculo = {
        id: proximoIdVeiculo++,
        modelo,
        marca,
        placa,
        ano,
        valorDiaria,
        disponivel
    };

    veiculos.push(novoVeiculo);

    res.status(201).json({
        mensagem: 'Veículo cadastrado com sucesso!',
        veiculo: novoVeiculo
    });

});


app.get('/veiculos', (req, res) => {

    res.status(200).json({
        mensagem: 'Veículos encontrados!',
        veiculos: veiculos
    });

});


app.get('/veiculos/:id', (req, res) => {

    const id = Number(req.params.id);

    const veiculo = veiculos.find(
        veiculo => veiculo.id === id
    );

    if (!veiculo) {
        return res.status(404).json({
            mensagem: 'Veículo não encontrado!'
        });
    }

    res.status(200).json({
        mensagem: 'Veículo encontrado com sucesso!',
        veiculo: veiculo
    });

});


app.put('/veiculos/:id', (req, res) => {

    const id = Number(req.params.id);

    const veiculo = veiculos.find(
        veiculo => veiculo.id === id
    );

    if (!veiculo) {
        return res.status(404).json({
            mensagem: 'Veículo não encontrado!'
        });
    }

    const {
        modelo,
        marca,
        placa,
        ano,
        valorDiaria,
        disponivel
    } = req.body;

    if (
        !modelo ||
        !marca ||
        !placa ||
        !ano ||
        valorDiaria === undefined ||
        disponivel === undefined
    ) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios!'
        });
    }

    const placaExistente = veiculos.find(
        v => v.placa === placa && v.id !== id
    );

    if (placaExistente) {
        return res.status(400).json({
            mensagem: 'Placa já cadastrada para outro veículo!'
        });
    }

    veiculo.modelo = modelo;
    veiculo.marca = marca;
    veiculo.placa = placa;
    veiculo.ano = ano;
    veiculo.valorDiaria = valorDiaria;
    veiculo.disponivel = disponivel;

    res.status(200).json({
        mensagem: 'Veículo atualizado com sucesso!',
        veiculo: veiculo
    });

});


app.delete('/veiculos/:id', (req, res) => {

    const id = Number(req.params.id);

    const indice = veiculos.findIndex(
        veiculo => veiculo.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Veículo não encontrado!'
        });
    }

    veiculos.splice(indice, 1);

    res.status(200).json({
        mensagem: 'Veículo excluído com sucesso!'
    });

});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
