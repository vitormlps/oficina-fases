const Random = require('../servicos/input_mock');
const Cliente = require('../entidades/cliente');
const Veiculo = require('../entidades/veiculo');
const CrudCliente = require('../persistencia/crud_cliente');

// Validação das funções de CRUD de cliente
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
// Testes
describe('O CRUD do cliente', () => {
    describe('na função Registrar', () => {
        test('não devolve erro recebendo um objeto cliente', () => {
            expect(() => CrudCliente.registrar(novoCliente)
            ).not.toThrow();
        });
        test('e devolve o mesmo objeto cliente', async () => {
            const data = await CrudCliente.registrar(novoCliente);
            expect(data).toBeInstanceOf(Cliente);
        });
        test('mas ocorre erro ao passar outro tipo', async () => {
            try {
                await CrudCliente.registrar('new Veiculo()')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função Listar', () => {
        test('devolve um resultado Array da query', async () => {
            const data = await CrudCliente.listar();
            expect(data).toBeInstanceOf(Array);
        });
    });
    describe('na função Listar por campo', () => {
        test('devolve um resultado Array da query', async () => {
            const data = await CrudCliente.listar_por_campo('cpf');
            expect(data).toBeInstanceOf(Array);
        });
        test('mas devolve erro se o parametro for != de string', async () => {
            try {
                await CrudCliente.listar_por_campo(0)
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar', () => {
        test('devolve um resultado objeto da query', async () => {
            const data = await CrudCliente.buscar(1);
            expect(data).toBeInstanceOf(Object);
        });
        test('mas devolve erro se o parametro for != de numero', async () => {
            try {
                await CrudCliente.buscar('0')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar campo', () => {
        test('devolve um resultado string da query', async () => {
            const data = await CrudCliente.buscar_campo(1, 'cpf');
            expect(typeof data).toBe('string');
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudCliente.buscar_campo('cpf', 1)
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função atualizar', () => {
        test('devolve um resultado string da query', async () => {
            const data = await CrudCliente.atualizar(novoCliente, 'cpf', "'537.199.055-00'");
            expect(typeof data).toBe('string');
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudCliente.atualizar('cpf', 1, 'data')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função remover', () => {
        test('devolve um resultado number da query', async () => {
            const data = await CrudCliente.remover(1);
            expect(typeof data).toBe('number');
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudCliente.remover('1')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
});