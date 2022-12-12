const CrudVeiculo = require('../persistencia/crud_veiculo');
const CrudCliente = require('../persistencia/crud_cliente');
const Cliente = require('../entidades/cliente');

// setup
let novoCliente = new Cliente()
novoCliente.nome = "Gael Zampirolli"
novoCliente.contato = "(99) 2748-0113"
novoCliente.endereco = "Travessa da CDL | Bairro Centro | Ji-Paraná/RO | 76900032"
novoCliente.cpf = "117.066.880-16"

// Validação das funções de CRUD de cliente
describe('O CRUD do cliente', () => {
    describe('na função Registrar', () => {
        test('não devolve erro recebendo um objeto cliente', async () => {
            novoCliente.veiculo = await CrudVeiculo.buscarUltimoRegistro()
            expect(async () => await CrudCliente.registrar(novoCliente)
            ).not.toThrow();
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
        test('mas devolve erro se o parametro for diferente de string', async () => {
            try {
                await CrudCliente.listar_por_campo(0)
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar', () => {
        test('devolve um resultado objeto da query', async () => {
            let cliente = await CrudCliente.buscarUltimoRegistro()
            const data = await CrudCliente.buscar(cliente.id_cliente);
            expect(data).toBeInstanceOf(Object);
        });
        test('mas devolve erro se o parametro for diferente de número', async () => {
            try {
                await CrudCliente.buscar('0')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar último registro', () => {
        test('devolve um resultado objeto da query', async () => {
            const data = await CrudCliente.buscarUltimoRegistro();
            expect(data).toBeInstanceOf(Object);
        });
    });
    describe('na função buscar campo', () => {
        test('devolve um resultado string da query', async () => {
            let cliente = await CrudCliente.buscarUltimoRegistro()
            const data = await CrudCliente.buscar_campo(cliente.id_cliente, 'cpf');
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
        test('devolve um resultado objeto da query', async () => {
            let cliente = await CrudCliente.buscarUltimoRegistro()
            const data = await CrudCliente.atualizar(cliente.id_cliente, 'cpf', '537.199.055-00');
            expect(data).toBeInstanceOf(Object);
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
            let cliente = await CrudCliente.buscarUltimoRegistro()
            const data = await CrudCliente.remover(cliente.id_cliente);
            expect(data).toBeInstanceOf(Object);
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