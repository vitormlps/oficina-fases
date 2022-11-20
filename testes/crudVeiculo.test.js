const Random = require('../servicos/input_mock');
const Veiculo = require('../entidades/veiculo');
const CrudVeiculo = require('../persistencia/crud_veiculo');

// Validação das funções de CRUD de veículo
// Setup
let novoVeiculo = new Veiculo()
novoVeiculo.setTipo(Random.v_Tipo())
novoVeiculo.marca = Random.v_Marca()
novoVeiculo.modelo = Random.v_Modelo()
novoVeiculo.placa = Random.v_Placa()
novoVeiculo.quilometragem = Random.v_Quilometragem()
novoVeiculo.cor = Random.v_Cor()
// Testes
describe('O CRUD do veículo', () => {
    describe('na função Registrar', () => {
        test('não devolve erro recebendo um objeto veículo', () => {
            expect(() => CrudVeiculo.registrar(novoVeiculo)
            ).not.toThrow();
        });
        test('e devolve o mesmo objeto veículo', async () => {
            const data = await CrudVeiculo.registrar(novoVeiculo);
            expect(data).toBeInstanceOf(Veiculo);
        });
        test('mas ocorre erro ao passar outro tipo', async () => {
            try {
                await CrudVeiculo.registrar('new Veiculo()')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função Listar', () => {
        test('devolve um resultado Array da query', async () => {
            const data = await CrudVeiculo.listar();
            expect(data).toBeInstanceOf(Array);
        });
    });
    describe('na função Listar por campo', () => {
        test('devolve um resultado Array da query', async () => {
            const data = await CrudVeiculo.listar_por_campo('marca');
            expect(data).toBeInstanceOf(Array);
        });
        test('mas devolve erro se o parametro for != de string', async () => {
            try {
                await CrudVeiculo.listar_por_campo(0)
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar', () => {
        test('devolve um resultado objeto da query', async () => {
            const data = await CrudVeiculo.buscar(1);
            expect(data).toBeInstanceOf(Object);
        });
        test('mas devolve erro se o parametro for != de numero', async () => {
            try {
                await CrudVeiculo.buscar('0')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar campo', () => {
        test('devolve um resultado string da query', async () => {
            const data = await CrudVeiculo.buscar_campo(1, 'marca');
            expect(typeof data).toBe('string');
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudVeiculo.buscar_campo('marca', 1)
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função atualizar', () => {
        test('devolve um resultado string da query', async () => {
            const data = await CrudVeiculo.atualizar(novoVeiculo, 'marca', "'Daewoo'");
            expect(typeof data).toBe('string');
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudVeiculo.atualizar('marca', 1, 'data')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função remover', () => {
        test('devolve um resultado number da query', async () => {
            const data = await CrudVeiculo.remover(1);
            expect(typeof data).toBe('number');
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudVeiculo.remover('1')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função remover em cascade', () => {
        test('devolve um resultado number da query', async () => {
            const data = await CrudVeiculo.removerCascade(1);
            expect(typeof data).toBe('number');
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudVeiculo.removerCascade('1')
            } catch (err) {
                expect(err).toEqual({ id: 666, mensagem: "Erro ao dominar o mundo." });
            }
        });
    });
});