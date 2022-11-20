const Registro = require('../servicos/registro');
const OrdemServico = require('../entidades/ordem_servico');
const Cliente = require('../entidades/cliente');
const Veiculo = require('../entidades/veiculo');

// Validação das funções de registro
// Veículo
let novoVeiculo = new Veiculo()
let registrarVeiculo = Registro.registrarVeiculo
describe('O registro do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto veiculo', async () => {
            const data = await registrarVeiculo(novoVeiculo);
            expect(data).toBeInstanceOf(Veiculo);
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await registrarVeiculo('new Veiculo()')
            } catch (err) {
                expect(err).toEqual({ id: 401, mensagem: "Erro ao registrar o veículo." });
            }
        });
        test('ou numbers', async () => {
            try {
                await registrarVeiculo(0)
            } catch (err) {
                expect(err).toEqual({ id: 401, mensagem: "Erro ao registrar o veículo." });
            }
        });
        test('ou funções', async () => {
            try {
                await registrarVeiculo(registrarCliente)
            } catch (err) {
                expect(err).toEqual({ id: 401, mensagem: "Erro ao registrar o veículo." });
            }
        });
    });
});

// Cliente
let novoCliente = new Cliente()
let registrarCliente = Registro.registrarCliente
describe('O registro do cliente', () => {
    describe('não devolve um erro', () => {
        test('com o objeto cliente', async () => {
            const data = await registrarCliente(novoCliente, novoVeiculo);
            expect(data).toBeInstanceOf(Cliente);
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await registrarCliente('new Cliente()')
            } catch (err) {
                expect(err).toEqual({ id: 402, mensagem: "Erro ao registrar o cliente." });
            }
        });
        test('ou numbers', async () => {
            try {
                await registrarCliente(0)
            } catch (err) {
                expect(err).toEqual({ id: 402, mensagem: "Erro ao registrar o cliente." });
            }
        });
        test('ou funções', async () => {
            try {
                await registrarCliente(registrarVeiculo)
            } catch (err) {
                expect(err).toEqual({ id: 402, mensagem: "Erro ao registrar o cliente." });
            }
        });
    });
});

// Ordem de Serviço
let novaOS = new OrdemServico()
let registrarOS = Registro.registrarOS
describe('O registro da OS', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            const data = await registrarOS(novaOS, novoCliente);
            expect(data).toBeInstanceOf(OrdemServico);
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await registrarOS('new OrdemServico()')
            } catch (err) {
                expect(err).toEqual({ id: 403, mensagem: "Erro ao registrar OS." });
            }
        });
        test('ou numbers', async () => {
            try {
                await registrarOS(0)
            } catch (err) {
                expect(err).toEqual({ id: 403, mensagem: "Erro ao registrar OS." });
            }
        });
        test('ou funções', async () => {
            try {
                await registrarOS(registrarVeiculo)
            } catch (err) {
                expect(err).toEqual({ id: 403, mensagem: "Erro ao registrar OS." });
            }
        });
    });
});