const Random = require('../servicos/input_mock');
const Etapas = require('../servicos/etapas');
const OrdemServico = require('../entidades/ordem_servico');
const Cliente = require('../entidades/cliente');
const Veiculo = require('../entidades/veiculo');

// Validação das funções de etapas
// Setup
let novoVeiculo = new Veiculo()
novoVeiculo.setTipo(Random.v_Tipo())
novoVeiculo.marca = Random.v_Marca()
novoVeiculo.modelo = Random.v_Modelo()
novoVeiculo.placa = Random.v_Placa()
novoVeiculo.quilometragem = Random.v_Quilometragem()
novoVeiculo.cor = Random.v_Cor()
let novoCliente = new Cliente()
novoCliente.nome = Random.c_Nome()
novoCliente.contato = Random.c_Contato()
novoCliente.endereco = Random.c_Endereco()
novoCliente.cpf = Random.c_Cpf()
novoCliente.veiculo = novoVeiculo
let novaOS = new OrdemServico()
novaOS.id = 1
novaOS.dataEntrada = Random.os_DataEntrada()
novaOS.descricao = Random.os_Descricao()
novaOS.quantidadeDanos = Random.os_QtdeDanos()
novaOS.trocarPecas = Random.os_TrocarPecas()
novaOS.fotos = Random.os_Fotos()
novaOS.cliente = novoCliente

// Vistoria
let fazerVistoria = Etapas.fazerVistoria
describe('A Vistoria do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            const data = await fazerVistoria(novaOS);
            expect(typeof data).toBe('boolean');
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await fazerVistoria('new Veiculo()')
            } catch (err) {
                expect(err).toEqual({ id: 421, mensagem: "Erro ao verificar o status Vistoria." });
            }
        });
        test('ou numbers', async () => {
            try {
                await fazerVistoria(0)
            } catch (err) {
                expect(err).toEqual({ id: 421, mensagem: "Erro ao verificar o status Vistoria." });
            }
        });
        test('ou funções', async () => {
            try {
                await fazerVistoria(fazerVistoria)
            } catch (err) {
                expect(err).toEqual({ id: 421, mensagem: "Erro ao verificar o status Vistoria." });
            }
        });
    });
});

// Desmontagem
let desmontar = Etapas.desmontar
describe('A Desmontagem do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            const data = await desmontar(novaOS);
            expect(typeof data).toBe('boolean');
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await desmontar('new Veiculo()')
            } catch (err) {
                expect(err).toEqual({ id: 422, mensagem: "Erro ao verificar o status Desmontagem." });
            }
        });
        test('ou numbers', async () => {
            try {
                await desmontar(0)
            } catch (err) {
                expect(err).toEqual({ id: 422, mensagem: "Erro ao verificar o status Desmontagem." });
            }
        });
        test('ou funções', async () => {
            try {
                await desmontar(fazerVistoria)
            } catch (err) {
                expect(err).toEqual({ id: 422, mensagem: "Erro ao verificar o status Desmontagem." });
            }
        });
    });
});

// Funilaria
let funilaria = Etapas.funilaria
describe('A Funilaria do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            const data = await funilaria(novaOS);
            expect(typeof data).toBe('boolean');
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await funilaria('new Veiculo()')
            } catch (err) {
                expect(err).toEqual({ id: 423, mensagem: "Erro ao verificar o status Funilaria." });
            }
        });
        test('ou numbers', async () => {
            try {
                await funilaria(0)
            } catch (err) {
                expect(err).toEqual({ id: 423, mensagem: "Erro ao verificar o status Funilaria." });
            }
        });
        test('ou funções', async () => {
            try {
                await funilaria(fazerVistoria)
            } catch (err) {
                expect(err).toEqual({ id: 423, mensagem: "Erro ao verificar o status Funilaria." });
            }
        });
    });
});

// Montagem
let montar = Etapas.montar
describe('A Montagem do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            const data = await montar(novaOS);
            expect(typeof data).toBe('boolean');
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await montar('new Veiculo()')
            } catch (err) {
                expect(err).toEqual({ id: 424, mensagem: "Erro ao verificar o status Montagem." });
            }
        });
        test('ou numbers', async () => {
            try {
                await montar(0)
            } catch (err) {
                expect(err).toEqual({ id: 424, mensagem: "Erro ao verificar o status Montagem." });
            }
        });
        test('ou funções', async () => {
            try {
                await montar(fazerVistoria)
            } catch (err) {
                expect(err).toEqual({ id: 424, mensagem: "Erro ao verificar o status Montagem." });
            }
        });
    });
});

// Acabamento
let acabar = Etapas.acabar
describe('O Acabamento do veículo', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            const data = await acabar(novaOS);
            expect(typeof data).toBe('boolean');
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await acabar('new Veiculo()')
            } catch (err) {
                expect(err).toEqual({ id: 425, mensagem: "Erro ao verificar o status Acabamento." });
            }
        });
        test('ou numbers', async () => {
            try {
                await acabar(0)
            } catch (err) {
                expect(err).toEqual({ id: 425, mensagem: "Erro ao verificar o status Acabamento." });
            }
        });
        test('ou funções', async () => {
            try {
                await acabar(fazerVistoria)
            } catch (err) {
                expect(err).toEqual({ id: 425, mensagem: "Erro ao verificar o status Acabamento." });
            }
        });
    });
});

// Glitch
let glitch = Etapas.glitch
describe('O glitch', () => {
    describe('não devolve um erro', () => {
        test('com o objeto OS', async () => {
            const data = await glitch(novaOS);
            expect(typeof data).toBe('undefined');
        });
    });
    describe('mas sim com outros tipos', () => {
        test('como strings', async () => {
            try {
                await glitch('new Veiculo()')
            } catch (err) {
                expect(err).toEqual({ id: 666, mensagem: "Erro ao dominar o mundo." });
            }
        });
        test('ou numbers', async () => {
            try {
                await glitch(0)
            } catch (err) {
                expect(err).toEqual({ id: 666, mensagem: "Erro ao dominar o mundo." });
            }
        });
        test('ou funções', async () => {
            try {
                await glitch(fazerVistoria)
            } catch (err) {
                expect(err).toEqual({ id: 666, mensagem: "Erro ao dominar o mundo." });
            }
        });
    });
});