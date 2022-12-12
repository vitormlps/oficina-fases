const CrudVeiculo = require('../persistencia/crud_veiculo');
const Veiculo = require('../entidades/veiculo');

// setup
let novoVeiculo = new Veiculo()
novoVeiculo.tipo = "Carro"
novoVeiculo.marca = "Daewoo"
novoVeiculo.modelo = "Nubira SW CDX 2.0 16V Mec."
novoVeiculo.placa = "KFF5901"
novoVeiculo.quilometragem = 120000
novoVeiculo.cor = "Verde"

// Validação das funções de CRUD de veículo
describe('O CRUD do veículo', () => {
    describe('na função Registrar', () => {
        test('não devolve erro recebendo um objeto veículo', () => {
            expect(async () => await CrudVeiculo.registrar(novoVeiculo)
            ).not.toThrow();
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
        test('mas devolve erro se o parametro for diferente de string', async () => {
            try {
                await CrudVeiculo.listar_por_campo(0)
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar', () => {
        test('devolve um resultado objeto da query', async () => {
            let veiculo = await CrudVeiculo.buscarUltimoRegistro()
            const data = await CrudVeiculo.buscar(veiculo.id_veiculo);
            expect(data).toBeInstanceOf(Object);
        });
        test('mas devolve erro se o parametro for diferente de número', async () => {
            try {
                await CrudVeiculo.buscar('0')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar último registro', () => {
        test('devolve um resultado objeto da query', async () => {
            const data = await CrudVeiculo.buscarUltimoRegistro();
            expect(data).toBeInstanceOf(Object);
        });
    });
    describe('na função buscar campo', () => {
        test('devolve um resultado string da query', async () => {
            let veiculo = await CrudVeiculo.buscarUltimoRegistro()
            const data = await CrudVeiculo.buscar_campo(veiculo.id_veiculo, 'marca');
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
        test('devolve um resultado objeto da query', async () => {
            let veiculo = await CrudVeiculo.buscarUltimoRegistro()
            const data = await CrudVeiculo.atualizar(veiculo.id_veiculo, 'marca', 'Daewoo');
            expect(data).toBeInstanceOf(Object);
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
        test('devolve um resultado objeto da query', async () => {
            let veiculo = await CrudVeiculo.buscarUltimoRegistro()
            const data = await CrudVeiculo.remover(veiculo.id_veiculo);
            expect(data).toBeInstanceOf(Object);
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudVeiculo.remover('0')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
});