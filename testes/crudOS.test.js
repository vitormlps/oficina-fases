const Random = require('../servicos/input_mock');
const OrdemServico = require('../entidades/ordem_servico');
const Cliente = require('../entidades/cliente');
const Veiculo = require('../entidades/veiculo');
const CrudOs = require('../persistencia/crud_os');
const CrudCliente = require('../persistencia/crud_cliente');
const CrudVeiculo = require('../persistencia/crud_veiculo');

// Validação das funções de CRUD de OS
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
novaOS.dataEntrada = Random.os_DataEntrada()
novaOS.descricao = Random.os_Descricao()
novaOS.quantidadeDanos = Random.os_QtdeDanos()
novaOS.trocarPecas = Random.os_TrocarPecas()
novaOS.fotos = Random.os_Fotos()
novaOS.cliente = novoCliente
// Testes
describe('O CRUD da OS', () => {
    describe('na função Registrar', () => {
        test('não devolve erro recebendo um objeto OS', () => {
            expect(() => CrudOs.registrar(novaOS)
            ).not.toThrow();
        });
        test('e devolve o mesmo objeto OS', async () => {
            const data = await CrudOs.registrar(novaOS);
            expect(data).toBeInstanceOf(OrdemServico);
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
        test('mas devolve erro se o parametro for != de string', async () => {
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
            const data = await CrudOs.buscar(1);
            expect(data).toBeInstanceOf(Object);
        });
        test('mas devolve erro se o parametro for != de numero', async () => {
            try {
                await CrudOs.buscar('0')
            } catch (err) {
                expect(err).toBeDefined();
            }
        });
    });
    describe('na função buscar campo', () => {
        test('devolve um resultado string da query', async () => {
            const data = await CrudOs.buscar_campo(1, 'dataEntrada');
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
        test('devolve um resultado string da query', async () => {
            const data = await CrudOs.atualizar(novaOS, 'dataEntrada', "'2022-11-13'");
            expect(typeof data).toBe('string');
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
        test('devolve um resultado number da query', async () => {
            const data = await CrudOs.remover(1);
            expect(typeof data).toBe('number');
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