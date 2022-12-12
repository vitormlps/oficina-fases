const Registro = require('../servicos/registro');

// Validação das funções de registro
// Veículo
let registrarVeiculo = Registro.registrarVeiculo
describe('O registro do veículo', () => {
    let body = {
        "tipo": "Carro",
        "marca": "Daewoo",
        "modelo": "Nubira SW CDX 2.0 16V Mec.",
        "placa": "KFF5901",
        "quilometragem": 120000,
        "cor": "Verde"
    }
    describe('não devolve um erro', () => {
        test('com o objeto veiculo', async () => {
            const data = await registrarVeiculo(body);
            expect(data).toBeInstanceOf(Object);
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await registrarVeiculo('new Veiculo()')
            } catch (err) {
                expect(err).toEqual({ id: 406, mensagem: "Faltam informações no formulário." });
            }
        });
        test('ou numbers', async () => {
            try {
                await registrarVeiculo(0)
            } catch (err) {
                expect(err).toEqual({ id: 406, mensagem: "Faltam informações no formulário." });
            }
        });
        test('ou funções', async () => {
            try {
                await registrarVeiculo(registrarCliente)
            } catch (err) {
                expect(err).toEqual({ id: 406, mensagem: "Faltam informações no formulário." });
            }
        });
    });
});

// Cliente
let registrarCliente = Registro.registrarCliente
describe('O registro do cliente', () => {
    let body = {
        "nome": "Gael Zampirolli",
        "contato": "(99) 2748-0113",
        "endereco": "Travessa da CDL | Bairro Centro | Ji-Paraná/RO | 76900032",
        "cpf": "117.066.880-16"
    }
    describe('não devolve um erro', () => {
        test('com o objeto cliente', async () => {
            const data = await registrarCliente(body);
            expect(data).toBeInstanceOf(Object);
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await registrarCliente('new Cliente()')
            } catch (err) {
                expect(err).toEqual({ id: 406, mensagem: "Faltam informações no formulário." });
            }
        });
        test('ou numbers', async () => {
            try {
                await registrarCliente(0)
            } catch (err) {
                expect(err).toEqual({ id: 406, mensagem: "Faltam informações no formulário." });
            }
        });
        test('ou funções', async () => {
            try {
                await registrarCliente(registrarVeiculo)
            } catch (err) {
                expect(err).toEqual({ id: 406, mensagem: "Faltam informações no formulário." });
            }
        });
    });
});

// Ordem de Serviço
let registrarOS = Registro.registrarOS
describe('O registro da OS', () => {
    let body = {
        "dataEntrada": "2023-05-26",
        "descricao": "Acidente fatal",
        "quantidadeDanos": 5,
        "trocarPecas": true,
        "fotos": "/oficina-fases/fotos/sinistro_03.jpg"
    }
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            const data = await registrarOS(body);
            expect(data).toBeInstanceOf(Object);
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await registrarOS('new OrdemServico()')
            } catch (err) {
                expect(err).toEqual({ id: 406, mensagem: "Faltam informações no formulário." });
            }
        });
        test('ou numbers', async () => {
            try {
                await registrarOS(0)
            } catch (err) {
                expect(err).toEqual({ id: 406, mensagem: "Faltam informações no formulário." });
            }
        });
        test('ou funções', async () => {
            try {
                await registrarOS(registrarVeiculo)
            } catch (err) {
                expect(err).toEqual({ id: 406, mensagem: "Faltam informações no formulário." });
            }
        });
    });
});