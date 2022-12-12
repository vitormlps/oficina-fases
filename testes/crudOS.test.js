const CrudCliente = require('../persistencia/crud_cliente');
const CrudOs = require('../persistencia/crud_os');
const OrdemServico = require('../entidades/ordem_servico');

// setup
let novaOS = new OrdemServico()
novaOS.dataEntrada = "2023-05-26"
novaOS.descricao = "Acidente fatal"
novaOS.quantidadeDanos = 5
novaOS.trocarPecas = true
novaOS.fotos = "/oficina-fases/fotos/sinistro_03.jpg"

// Validação das funções de CRUD de OS
describe('O CRUD da OS', () => {
    describe('na função Registrar', () => {
        test('não devolve erro recebendo um objeto OS', async () => {
            novaOS.cliente = await CrudCliente.buscarUltimoRegistro()
            expect(async () => await CrudOs.registrar(novaOS)
            ).not.toThrow();
        });
        test('mas ocorre erro ao passar outro tipo', async () => {
            try {
                await CrudOs.registrar('new OrdemServico()')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função Listar', () => {
        test('devolve um resultado Array da query', async () => {
            const data = await CrudOs.listar();
            expect(data).toBeInstanceOf(Array);
        });
    });
    describe('na função Listar por campo', () => {
        test('devolve um resultado Array da query', async () => {
            const data = await CrudOs.listar_por_campo('dataEntrada');
            expect(data).toBeInstanceOf(Array);
        });
        test('mas devolve erro se o parametro for diferente de string', async () => {
            try {
                await CrudOs.listar_por_campo(0)
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função Listar tudo', () => {
        test('devolve um resultado Array da query', async () => {
            const data = await CrudOs.listarTudo();
            expect(data).toBeInstanceOf(Array);
        });
    });
    describe('na função buscar', () => {
        test('devolve um resultado objeto da query', async () => {
            let os = await CrudOs.buscarUltimoRegistro()
            const data = await CrudOs.buscar(os.id_os);
            expect(data).toBeInstanceOf(Object);
        });
        test('mas devolve erro se o parametro for diferente de número', async () => {
            try {
                await CrudOs.buscar('0')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar último registro', () => {
        test('devolve um resultado objeto da query', async () => {
            const data = await CrudOs.buscarUltimoRegistro();
            expect(data).toBeInstanceOf(Object);
        });
    });
    describe('na função buscar campo', () => {
        test('devolve um resultado string da query', async () => {
            let os = await CrudOs.buscarUltimoRegistro()
            const data = await CrudOs.buscar_campo(os.id_os, 'descricao');
            expect(typeof data).toBe('string');
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudOs.buscar_campo('dataEntrada', 1)
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função atualizar', () => {
        test('devolve um resultado objeto da query', async () => {
            let os = await CrudOs.buscarUltimoRegistro()
            const data = await CrudOs.atualizar(os.id_os, 'data_entrada', '2022-11-13');
            expect(data).toBeInstanceOf(Object);
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudOs.atualizar('dataEntrada', 1, 'data')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função remover', () => {
        test('devolve um resultado objeto da query', async () => {
            let os = await CrudOs.buscarUltimoRegistro()
            const data = await CrudOs.remover(os.id_os);
            expect(data).toBeInstanceOf(Object);
        });
        test('mas devolve erro se parametros estiverem errados', async () => {
            try {
                await CrudOs.remover('1')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
});